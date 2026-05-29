import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search");

    let colleges;
    try {
      colleges = await prisma.college.findMany({
        where: search ? {
          name: {
            contains: search,
            mode: "insensitive",
          }
        } : undefined,
        include: {
          courses: true,
          reviews: true,
        },
        take: 10,
      });
    } catch (e) {
      // Fallback if DB is not connected
      console.error("Database connection failed. Returning mock data.", e);
      colleges = [
        {
          id: "mock-1",
          name: "Mock Institute of Technology",
          location: "Mock City",
          establishedYear: 2000,
          description: "This is a mock college returned because the DB is not connected.",
          ranking: 1,
          courses: [],
          reviews: []
        }
      ];
    }

    return NextResponse.json(colleges);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch colleges" },
      { status: 500 }
    );
  }
}
