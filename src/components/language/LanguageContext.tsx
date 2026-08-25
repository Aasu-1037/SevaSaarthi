"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language } from "@/types";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    heroTitle: "Government services, without the confusion.",
    heroSub: "Tell us what you need. SevaSaathi turns complicated processes into clear steps, explains what your status means, and shows you what to do next.",
    startService: "Start a service",
    tryDemo: "Try the demo",
    howItWorks: "How it works",
    services: "Services",
    whySevaSaathi: "Why SevaSaathi",
    step1: "Tell us what you need",
    step2: "Get your documents ready",
    step3: "Apply without confusion",
    step4: "Understand your status",
    step5: "Fix problems & continue",
    explainStatus: "Explain this status with AI",
    backOnTrack: "You're back on track.",
    somethingNeedsFixing: "Something needs fixing.",
  },
  hi: {
    heroTitle: "सरकारी सेवाएं, बिना किसी उलझन के।",
    heroSub: "अपनी जरूरत बताएं। सेवासाथी जटिल प्रक्रियाओं को स्पष्ट चरणों में बदलता है और आगे का मार्गदर्शन करता है।",
    startService: "सेवा शुरू करें",
    tryDemo: "डेमो आजमाएं",
    howItWorks: "यह कैसे काम करता है",
    services: "सेवाएं",
    whySevaSaathi: "सेवासाथी क्यों",
    step1: "बताएं आपको क्या चाहिए",
    step2: "दस्तावेज तैयार करें",
    step3: "बिना उलझन आवेदन करें",
    step4: "अपनी स्थिति समझें",
    step5: "समस्याएं सुधारें और आगे बढ़ें",
    explainStatus: "एआई से स्थिति समझें",
    backOnTrack: "आप वापस सही रास्ते पर हैं।",
    somethingNeedsFixing: "कुछ सुधार की जरूरत है।",
  },
  gu: {
    heroTitle: "સરકારી સેવાઓ, કોઈ પણ મૂંઝવણ વગર.",
    heroSub: "તમારી જરૂરિયાત જણાવો. સેવાસાથી જટિલ પ્રક્રિયાઓને સરળ પગલાંઓમાં રૂપાંતરિત કરે છે અને માર્ગદર્શન આપે છે.",
    startService: "સેવા શરૂ કરો",
    tryDemo: "ડેમો અજમાવો",
    howItWorks: "આ કેવી રીતે કામ કરે છે",
    services: "સેવાઓ",
    whySevaSaathi: "શા માટે સેવાસાથી",
    step1: "જણાવો તમારી જરૂરિયાત",
    step2: "દસ્તાવેજો તૈયાર કરો",
    step3: "સરળતાથી અરજી કરો",
    step4: "અરજીની સ્થિતિ સમજો",
    step5: "ભૂલો સુધારી આગળ વધો",
    explainStatus: "AI સાથે સ્થિતિ સમજો",
    backOnTrack: "તમે ફરીથી યોગ્ય માર્ગ પર છો.",
    somethingNeedsFixing: "કંઈક સુધારવાની જરૂર છે.",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language]?.[key] || translations["en"]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
