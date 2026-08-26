import type { Metadata } from "next";
import { Playfair_Display, JetBrains_Mono, Noto_Sans_Gujarati, Noto_Sans_Devanagari } from "next/font/google";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { LanguageProvider } from "@/components/language/LanguageContext";
import { AwardPreloader } from "@/components/animations/AwardPreloader";
import { PrototypeBanner } from "@/components/ui/PrototypeBanner";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const gujarati = Noto_Sans_Gujarati({
  subsets: ["gujarati"],
  variable: "--font-gujarati",
});

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-hindi",
});

export const metadata: Metadata = {
  title: "SevaSaathi — Government services, without the confusion.",
  description: "An independent citizen-first prototype simplifying Digital Gujarat services with clear steps, AI explanations, and guided recovery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jetbrains.variable} ${gujarati.variable} ${devanagari.variable}`}
    >
      <body>
        <LanguageProvider>
          <LenisProvider>
            <AwardPreloader>
              <PrototypeBanner />
              {children}
            </AwardPreloader>
          </LenisProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
