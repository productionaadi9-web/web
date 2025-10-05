import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try{  
    const { id } = await params;
    const event = await prisma.events.findUnique({
        where: { id },
    });
    if(!event){
        return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }
    return NextResponse.json(event);
  }
  catch(error){
    console.log(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try{
    const { id } = await params;
    const body = await request.json();
    const event = await prisma.events.update({
        where: { id },
        data: body,
    });
    return NextResponse.json(event);
    }
    catch(error){
        console.log(error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try{
    const { id } = await params;
    const event = await prisma.events.delete({
        where: { id },
    });
    return NextResponse.json(event);
    }
    catch(error){
        console.log(error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}