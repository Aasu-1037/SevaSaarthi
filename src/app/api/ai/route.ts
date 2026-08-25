import { NextResponse } from "next/server";
import { ServiceAgent, StatusAgent, RecoveryAgent } from "@/lib/ai/orchestrator";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, prompt, status, reason, language = "en" } = body;

    if (type === "INTENT") {
      const intent = await ServiceAgent.identifyIntent(prompt || "", language);
      return NextResponse.json({ success: true, intent });
    }

    if (type === "STATUS") {
      const explanation = await StatusAgent.explainStatus(status || "UNDER_VERIFICATION", language);
      return NextResponse.json({ success: true, explanation });
    }

    if (type === "RECOVERY") {
      const explanation = await RecoveryAgent.explainRecovery(reason || "Address proof outdated", language);
      return NextResponse.json({ success: true, explanation });
    }

    return NextResponse.json({ success: false, error: "Invalid AI task type" }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
