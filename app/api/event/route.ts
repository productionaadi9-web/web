import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { eventSchema } from "@/types";

const prisma = new PrismaClient();

export async function GET() {
    const events = await prisma.events.findMany();
    return NextResponse.json(events);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        // Map 'images' from frontend to 'image' expected by schema
        const dataWithCorrectField = {
            ...body,
            image: body.images || body.image || []
        };
        delete dataWithCorrectField.images;
        
        const parsedData = eventSchema.parse(dataWithCorrectField);
        
        if(!parsedData.title || !parsedData.date || !parsedData.location || !parsedData.guests || !parsedData.status || !parsedData.type || !parsedData.description){
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }
        
        const event = await prisma.events.create({
            data: {
                title: parsedData.title,
                date: parsedData.date,
                location: parsedData.location,
                guests: parsedData.guests,
                status: parsedData.status,
                type: parsedData.type,
                image: parsedData.image,
                description: parsedData.description
            },
        });
        
        return NextResponse.json(event);
    } catch(error) {
        console.error("Error creating event:", error);
        if (error instanceof Error && error.name === 'ZodError') {
            return NextResponse.json({ error: "Invalid data format", details: error }, { status: 400 });
        }
        return NextResponse.json({ error: "Failed to create event" }, { status: 500 });
    }
}