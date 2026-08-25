import { NextResponse } from "next/server";
import { db } from "@/lib/mock-data/store";
import { WorkflowEngine } from "@/lib/workflow/engine";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const app = db.getApplicationById(id);

  if (!app) {
    return NextResponse.json({ success: false, error: "Application not found" }, { status: 404 });
  }

  try {
    // Perform deterministic workflow state transition
    const nextStatus = WorkflowEngine.transition(app.status, "CORRECTION_IN_PROGRESS");
    const updatedApp = db.updateApplicationStatus(id, "CORRECTION_SUBMITTED");

    return NextResponse.json({
      success: true,
      message: "Correction submitted and state updated to CORRECTION_SUBMITTED.",
      application: updatedApp,
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 400 });
  }
}
