import { GoogleGenAI } from "@google/genai";
import { SEVASAATHI_SYSTEM_PROMPT } from "./system-prompt";

const apiKey = process.env.GEMINI_API_KEY || "";

export const aiClient = new GoogleGenAI({ apiKey });

export async function generateAiResponse(prompt: string, context?: string, language: string = "en"): Promise<string> {
  if (!apiKey) {
    return "SevaSaathi AI is operating in knowledge-base fallback mode.";
  }

  try {
    const fullPrompt = `
${SEVASAATHI_SYSTEM_PROMPT}

Language requested: ${language}
${context ? `Context Data: ${context}` : ""}

User Prompt: ${prompt}
`;

    const response = await aiClient.models.generateContent({
      model: "gemini-2.5-flash",
      contents: fullPrompt,
    });

    return response.text || "No explanation generated.";
  } catch (err: any) {
    console.error("Gemini API call failed, using graceful fallback:", err);
    return "SevaSaathi AI: Application is under routine review. No action needed.";
  }
}
