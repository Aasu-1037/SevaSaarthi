import { generateAiResponse } from "./gemini-client";
import { Language, ServiceIntent } from "@/types";

export class ServiceAgent {
  static async identifyIntent(userInput: string, lang: Language = "en"): Promise<ServiceIntent> {
    const text = userInput.toLowerCase();
    
    // Check Gujarati/Hindi/English keywords for Income Certificate & Scholarship
    const isIncome = text.includes("income") || text.includes("આવક") || text.includes("आय") || text.includes("દાખલો") || text.includes("pramaan");
    const isScholarship = text.includes("scholarship") || text.includes("સ્કોલરશીપ") || text.includes("छात्रवृत्ति") || text.includes("education");

    return {
      service: "income_certificate",
      purpose: isScholarship ? "Higher Education Scholarship" : "General Purpose Income Certificate",
      language: lang,
      confidence: isIncome ? 0.98 : 0.85,
    };
  }
}

export class StatusAgent {
  static async explainStatus(status: string, lang: Language = "en"): Promise<string> {
    const context = `Application Status: ${status}. Service: Income Certificate. District: Surat.`;
    const prompt = `Explain what status "${status}" means to a citizen in 2 warm, simple sentences. Language: ${lang}.`;
    return generateAiResponse(prompt, context, lang);
  }
}

export class RecoveryAgent {
  static async explainRecovery(reason: string, lang: Language = "en"): Promise<string> {
    const context = `Rejection/Correction Reason: ${reason}`;
    const prompt = `Explain why the document needs update and what the citizen should do next in simple words. Language: ${lang}.`;
    return generateAiResponse(prompt, context, lang);
  }
}
