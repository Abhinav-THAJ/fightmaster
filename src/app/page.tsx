import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo",
  description: "Demo - Professional restaurant website offering the best services and experience online.",
  keywords: "restaurant, food, menu, dining, eat",
  alternates: {
    canonical: "https://example.com",
  },
  openGraph: {
    title: "Demo",
    description: "Demo - Professional restaurant website offering the best services and experience online.",
    url: "https://example.com",
    type: "website",
  },
};

"use client";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProgramsSection from "@/components/ProgramsSection";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import AthletesSection from "@/components/AthletesSection";

export default function Home() {
  return (
    <main className="bg-[#060404] text-white min-h-screen overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <WhyChooseSection />
      <ProgramsSection />
      <AthletesSection />
      <CTABanner />
      <ContactSection />
    </main>
  );
}
