import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const college = await prisma.college.findUnique({
      where: { id },
      include: {
        courses: true,
        reviews: {
          include: {
            user: {
              select: { name: true, image: true }
            }
          }
        },
      }
    });

    if (!college) {
      return NextResponse.json({ error: "College not found" }, { status: 404 });
    }

    return NextResponse.json(college);
  } catch (error) {
    console.error("Error fetching college:", error);
    // Fallback Mock Data
    if (params.id === "iit-madras") {
      return NextResponse.json({
        id: "iit-madras",
        name: "IIT Madras - Indian Institute of Technology",
        location: "Chennai, Tamil Nadu",
        establishedYear: 1959,
        description: "Indian Institute of Technology Madras is a public technical university located in Chennai, Tamil Nadu. It is recognized as an Institute of National Importance.",
        ranking: 1,
        ownershipType: "Public/Government",
        avgPlacement: 21.48,
        acceptedExams: ["JEE Advanced", "GATE", "JAM"],
        facilities: ["Boys Hostel", "Girls Hostel", "Library", "Cafeteria", "Sports Complex", "Hospital"],
        courses: [
          { name: "B.Tech Computer Science", fees: 214000, duration: "4 Years" },
          { name: "B.Tech Electrical", fees: 214000, duration: "4 Years" }
        ],
        reviews: [
          { rating: 5, content: "Excellent infrastructure and placements.", user: { name: "Rahul S." } }
        ]
      });
    }

    return NextResponse.json(
      { error: "Failed to fetch college details" },
      { status: 500 }
    );
  }
}
