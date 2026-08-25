import { NextResponse } from "next/server";
import serviceKnowledge from "@/lib/services/income-certificate.json";

export async function GET() {
  return NextResponse.json({
    success: true,
    services: [serviceKnowledge],
  });
}
