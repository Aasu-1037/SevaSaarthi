import { NextResponse } from "next/server";
import { db } from "@/lib/mock-data/store";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const app = db.getApplicationById(id);

  if (!app) {
    return NextResponse.json({ success: false, error: "Application not found" }, { status: 404 });
  }

  return NextResponse.json({
    success: true,
    application: app,
  });
}
