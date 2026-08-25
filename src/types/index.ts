export type ServiceId = 
  | "income_certificate"
  | "caste_certificate"
  | "non_creamy_layer"
  | "scholarship"
  | "pension";

export type ApplicationStatus = 
  | "DRAFT"
  | "READY_TO_SUBMIT"
  | "SUBMITTED"
  | "UNDER_VERIFICATION"
  | "PROCESSING"
  | "NEEDS_CORRECTION"
  | "CORRECTION_IN_PROGRESS"
  | "CORRECTION_SUBMITTED"
  | "APPROVED"
  | "ISSUED";

export type Language = "en" | "hi" | "gu";

export interface User {
  id: string;
  name: string;
  district: string;
  email?: string;
  phone?: string;
}

export interface DocumentRequirement {
  id: string;
  title: string;
  category: "identity" | "address" | "income" | "supporting";
  status: "READY" | "NEEDS_ATTENTION" | "OPTIONAL" | "MISSING";
  description: string;
  whyNeeded: string;
  acceptedOptions: string[];
}

export interface Application {
  id: string;
  serviceId: ServiceId;
  serviceName: string;
  purpose: string;
  citizenName: string;
  district: string;
  annualIncome?: number;
  incomeSource?: string;
  status: ApplicationStatus;
  documents: DocumentRequirement[];
  submittedAt: string;
  updatedAt: string;
  rejectionReason?: string;
  correctionRequiredDocId?: string;
}

export interface ServiceIntent {
  service: ServiceId;
  purpose: string;
  language: Language;
  confidence: number;
}

export interface AIExplanation {
  simpleExplanation: string;
  actionRequired: boolean;
  actionSummary: string;
  nextStepSummary: string;
  yourNextAction: string;
}
