"use client";

import ProgramsSection from "@/components/ProgramsSection";
import Image from "next/image";

export default function ProgramsPage() {
  return (
    <main className="bg-[#060404] text-white min-h-screen overflow-x-hidden pt-[68px]">
      <ProgramsSection />

      {/* Expanded Program Details Section */}
      <section className="relative py-20 pb-28 px-5 max-w-7xl mx-auto">
        
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-display text-white text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wider">
            Inside the <span className="text-gradient-red">Arena</span>
          </h2>
          <p className="mt-6 text-[#b89090] max-w-2xl text-sm lg:text-[15px] leading-relaxed mx-auto">
            Our curriculum isn't just about throwing punches—it's about mastering the mechanics of the human body under extreme pressure. Discover the meticulous training regimes used by our elite fight squad.
          </p>
        </div>

        {/* Feature 1: Sparring */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-24">
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#1e0707]">
            <Image src="/ai_sparring.png" fill alt="Live Sparring" className="object-cover transition-transform duration-700 hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,4,4,0.95)] to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6">
               <h4 className="text-xl font-display text-white tracking-widest uppercase mb-1">Live Combat Application</h4>
               <p className="text-xs text-[#a07070] tracking-wider uppercase">Weekly Scrimmages & Technical Sparring</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl lg:text-3xl font-display text-white uppercase tracking-wide">
              The Forge
            </h3>
            <p className="text-[#a07070] text-sm lg:text-[15px] leading-relaxed">
              Drilling builds the system, sparring tests the weapon. We enforce a strictly regulated, high-intensity live sparring culture. You learn to control distance, angle the pocket, and bite down on your mouthpiece when it counts. 
            </p>
            <p className="text-[#a07070] text-sm lg:text-[15px] leading-relaxed">
              Our striking coaches analyze your flow states and identify micro-mistakes before they become habits. You will graduate from predictable routines into dynamic, unpredictable combat mastery.
            </p>
          </div>
        </div>

        {/* Feature 2: S&C */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 md:order-1 flex flex-col gap-6">
            <h3 className="text-2xl lg:text-3xl font-display text-white uppercase tracking-wide">
              Strength & Conditioning
            </h3>
            <p className="text-[#a07070] text-sm lg:text-[15px] leading-relaxed">
              Combat without an engine is a car without gas. We map out full periodization blocks based on active fight camps, ensuring fighters peak directly before walking into the cage.
            </p>
            <ul className="flex flex-col gap-3 mt-2">
              {[
                "Kettlebell & Olympic Lifting",
                "Advanced Plyometrics & Rotational Power",
                "Anaerobic Threshold Protocols",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-[13px] text-[#b89090]">
                  <div className="w-1.5 h-1.5 rounded-sm bg-[#cc1a1a] flex-shrink-0 transform rotate-45" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/3] rounded-sm overflow-hidden border border-[#1e0707]">
            <Image src="/ai_kettlebell.png" fill alt="Strength and Conditioning" className="object-cover transition-transform duration-700 hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,4,4,0.95)] to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6">
               <h4 className="text-xl font-display text-white tracking-widest uppercase mb-1">Combat Athletics</h4>
               <p className="text-xs text-[#a07070] tracking-wider uppercase">Forging the Unbreakable Body</p>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
