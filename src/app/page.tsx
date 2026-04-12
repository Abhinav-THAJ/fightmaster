"use client";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProgramsSection from "@/components/ProgramsSection";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="bg-[#060404] text-white min-h-screen overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <WhyChooseSection />
      <ProgramsSection />
      <CTABanner />
      <ContactSection />
    </main>
  );
}
