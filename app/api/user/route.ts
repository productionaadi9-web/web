import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, link } = body;

    if (!email || !link) {
      return NextResponse.json(
        { error: "Email and link are required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.create({
      data: {
        email,
        link,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
