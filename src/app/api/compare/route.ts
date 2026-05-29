import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const ids = searchParams.get("ids")?.split(",");

    if (!ids || ids.length === 0) {
      return NextResponse.json({ error: "No college IDs provided" }, { status: 400 });
    }

    const colleges = await prisma.college.findMany({
      where: {
        id: { in: ids }
      },
      include: {
        courses: true,
        reviews: true,
      }
    });

    return NextResponse.json(colleges);
  } catch (error) {
    console.error("Error fetching comparison data:", error);
    
    // Mock Fallback
    const mockColleges = [
      {
        id: "iit-madras",
        name: "IIT Madras",
        ranking: 1,
        avgPlacement: 21.48,
        ownershipType: "Public",
        facilities: ["Hostel", "Library", "Gym"],
        courses: [{ fees: 214000 }]
      },
      {
        id: "iit-bombay",
        name: "IIT Bombay",
        ranking: 3,
        avgPlacement: 23.50,
        ownershipType: "Public",
        facilities: ["Hostel", "Library", "Sports"],
        courses: [{ fees: 230000 }]
      }
    ];

    return NextResponse.json(mockColleges);
  }
}
