import { Application } from "@/types";
import { happyPathApplication, recoveryPathApplication } from "./seed";

class MockDataStore {
  private applications: Map<string, Application> = new Map();

  constructor() {
    // Seed initial demo applications
    this.applications.set(happyPathApplication.id, { ...happyPathApplication });
    this.applications.set(recoveryPathApplication.id, { ...recoveryPathApplication });
  }

  getAllApplications(): Application[] {
    return Array.from(this.applications.values());
  }

  getApplicationById(id: string): Application | undefined {
    return this.applications.get(id);
  }

  createApplication(app: Partial<Application>): Application {
    const newApp: Application = {
      id: `DG-DEMO-${Math.floor(10000 + Math.random() * 90000)}`,
      serviceId: app.serviceId || "income_certificate",
      serviceName: app.serviceName || "Income Certificate",
      purpose: app.purpose || "General Purpose",
      citizenName: app.citizenName || "Demo Citizen",
      district: app.district || "Surat",
      annualIncome: app.annualIncome || 120000,
      incomeSource: app.incomeSource || "Agriculture",
      status: "UNDER_VERIFICATION",
      documents: app.documents || [],
      submittedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    this.applications.set(newApp.id, newApp);
    return newApp;
  }

  updateApplicationStatus(id: string, newStatus: Application["status"]): Application | undefined {
    const app = this.applications.get(id);
    if (!app) return undefined;

    app.status = newStatus;
    app.updatedAt = new Date().toISOString();
    this.applications.set(id, app);
    return app;
  }
}

export const db = new MockDataStore();
