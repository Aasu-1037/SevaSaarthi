import { NextResponse } from "next/server";
import { db } from "@/lib/mock-data/store";

export async function GET() {
  const apps = db.getAllApplications();
  return NextResponse.json({
    success: true,
    count: apps.length,
    applications: apps,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newApp = db.createApplication(body);
    return NextResponse.json({
      success: true,
      message: "Application submitted successfully to mock backend.",
      application: newApp,
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Invalid application request payload" }, { status: 400 });
  }
}
