import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const t = await prisma.torneio.findMany();
  return NextResponse.json(t);
}
