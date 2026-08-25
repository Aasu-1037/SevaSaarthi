import { ApplicationStatus } from "@/types";

// Valid transition mapping matrix
const validTransitions: Record<ApplicationStatus, ApplicationStatus[]> = {
  DRAFT: ["READY_TO_SUBMIT"],
  READY_TO_SUBMIT: ["SUBMITTED"],
  SUBMITTED: ["UNDER_VERIFICATION"],
  UNDER_VERIFICATION: ["PROCESSING", "NEEDS_CORRECTION", "APPROVED"],
  PROCESSING: ["APPROVED", "NEEDS_CORRECTION"],
  NEEDS_CORRECTION: ["CORRECTION_IN_PROGRESS"],
  CORRECTION_IN_PROGRESS: ["CORRECTION_SUBMITTED"],
  CORRECTION_SUBMITTED: ["UNDER_VERIFICATION"],
  APPROVED: ["ISSUED"],
  ISSUED: [],
};

export class WorkflowEngine {
  /**
   * Validates whether a state transition is legal according to government rules.
   */
  static canTransition(current: ApplicationStatus, next: ApplicationStatus): boolean {
    const allowed = validTransitions[current] || [];
    return allowed.includes(next);
  }

  /**
   * Executes a state transition deterministically.
   * Throws an error if invalid, guaranteeing LLM responses never bypass workflow rules.
   */
  static transition(current: ApplicationStatus, next: ApplicationStatus): ApplicationStatus {
    if (!this.canTransition(current, next)) {
      throw new Error(`Invalid workflow transition from ${current} to ${next}`);
    }
    return next;
  }

  /**
   * Returns permitted next actions for a given application state.
   */
  static getNextActions(current: ApplicationStatus): string[] {
    switch (current) {
      case "DRAFT":
        return ["Fill missing details", "Check document readiness"];
      case "READY_TO_SUBMIT":
        return ["Review details", "Submit application"];
      case "UNDER_VERIFICATION":
        return ["Wait for officer review", "Ask AI status explanation"];
      case "NEEDS_CORRECTION":
        return ["Review officer feedback", "Upload updated document", "Resubmit correction"];
      case "CORRECTION_SUBMITTED":
        return ["Wait for re-verification"];
      case "ISSUED":
        return ["Download Certificate PDF"];
      default:
        return ["View application details"];
    }
  }
}
