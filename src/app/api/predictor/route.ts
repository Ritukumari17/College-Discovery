import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { exam, score, category } = await req.json();

    if (!exam || !score || !category) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Attempt DB Query
    try {
      const data = await prisma.predictorData.findMany({
        where: {
          examName: exam,
          category: category,
          cutoffScore: {
            lte: parseFloat(score)
          }
        },
        orderBy: {
          cutoffScore: 'desc'
        },
        take: 10
      });

      if (data.length > 0) {
         return NextResponse.json(data);
      }
    } catch (e) {
      console.warn("DB not connected for predictor, using mock data");
    }

    // Mock response
    return NextResponse.json([
      { name: "IIT Madras", chance: "High", cutoff: 99.5, courseName: "Computer Science" },
      { name: "IIT Bombay", chance: "Medium", cutoff: 99.8, courseName: "Mechanical" },
      { name: "NIT Trichy", chance: "Very High", cutoff: 98.5, courseName: "Civil" }
    ]);
    
  } catch (error) {
    return NextResponse.json({ error: "Predictor analysis failed" }, { status: 500 });
  }
}
