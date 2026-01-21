// app/api/admin/atleticas/route.ts
import { NextResponse } from "next/server";
import * as service from "@/services/atletica.service";

export async function GET() {
  const atleticas = await service.listAtleticas();
  return NextResponse.json(atleticas);
}

export async function POST(req: Request) {
  const body = await req.json();
  const atletica = await service.createAtletica(body);
  return NextResponse.json(atletica, { status: 201 });
}
