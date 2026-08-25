import { Application, DocumentRequirement } from "@/types";

export const mockDocuments: DocumentRequirement[] = [
  {
    id: "doc-1",
    title: "Identity Proof",
    category: "identity",
    status: "READY",
    description: "One government-issued photo identity document.",
    whyNeeded: "To verify your legal name and Indian citizenship for official records.",
    acceptedOptions: ["Aadhaar Card (Mock)", "Voter ID", "Ration Card", "Driving License"],
  },
  {
    id: "doc-2",
    title: "Address Proof",
    category: "address",
    status: "NEEDS_ATTENTION",
    description: "Recent proof showing your current residence in Gujarat.",
    whyNeeded: "Income certificates are issued by the local district Mamlatdar office based on your jurisdiction.",
    acceptedOptions: ["Electricity Bill (last 3 months)", "Water Bill", "Property Tax Receipt", "Ration Card"],
  },
  {
    id: "doc-3",
    title: "Income Proof",
    category: "income",
    status: "READY",
    description: "Proof of annual family income for the preceding financial year.",
    whyNeeded: "To calculate eligibility for government scholarships and fee concessions.",
    acceptedOptions: ["Employer Salary Slip", "Form 16", "Self-Declaration Affidavit", "Talati Income Report"],
  },
  {
    id: "doc-4",
    title: "Supporting Certificate",
    category: "supporting",
    status: "OPTIONAL",
    description: "Educational institution admission letter or student ID.",
    whyNeeded: "Helps expedite scholarship-specific income certificate processing.",
    acceptedOptions: ["College Admission Letter", "Student ID Card", "Fee Receipt"],
  },
];

export const happyPathApplication: Application = {
  id: "DG-DEMO-48291",
  serviceId: "income_certificate",
  serviceName: "Income Certificate",
  purpose: "Higher Education Scholarship",
  citizenName: "Demo Citizen",
  district: "Surat",
  annualIncome: 120000,
  incomeSource: "Agriculture & Small Business",
  status: "UNDER_VERIFICATION",
  documents: mockDocuments,
  submittedAt: "2026-08-25T10:00:00Z",
  updatedAt: "2026-08-25T10:00:00Z",
};

export const recoveryPathApplication: Application = {
  id: "DG-DEMO-58317",
  serviceId: "income_certificate",
  serviceName: "Income Certificate",
  purpose: "Higher Education Scholarship",
  citizenName: "Demo Citizen",
  district: "Surat",
  annualIncome: 180000,
  incomeSource: "Self-Employed",
  status: "NEEDS_CORRECTION",
  documents: mockDocuments,
  submittedAt: "2026-08-24T14:30:00Z",
  updatedAt: "2026-08-25T09:15:00Z",
  rejectionReason: "Address proof provided is older than 6 months. Please provide a current electricity bill or tax receipt.",
  correctionRequiredDocId: "doc-2",
};
