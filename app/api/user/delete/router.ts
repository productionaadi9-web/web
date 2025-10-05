import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    try {
        const deletedUser = await prisma.user.delete({
            where: { id: id },  // Updated to use string directly as per Prisma schema
        });
        return NextResponse.json(deletedUser, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
    }
}
