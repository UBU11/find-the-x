"use client";

import { useRef } from "react";
import { useHeroAnimation } from "@/hooks/use-hero-animation";
import { Button } from "@/src/components/ui/button";
import { ShieldCheck, CreditCard, Zap, Link as LinkIcon, Lock } from "lucide-react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  useHeroAnimation(containerRef);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Floating Background Assets */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        {/* Layer 1 - Deep background */}
        <div className="floating-group layer-1 absolute top-[20%] left-[15%]">
          <div className="floating-asset bg-[#fde047] text-[#854d0e] p-6 rounded-2xl shadow-[8px_8px_0_rgba(0,0,0,0.1)] -rotate-12 border-4 border-white/50 backdrop-blur-sm">
            <CreditCard size={48} strokeWidth={2.5} />
            <span className="block mt-2 font-bold text-sm">Pay</span>
          </div>
        </div>

        <div className="floating-group layer-1 absolute bottom-[25%] right-[10%]">
          <div className="floating-asset bg-[#60a5fa] text-[#1e3a8a] p-5 rounded-3xl shadow-[8px_8px_0_rgba(0,0,0,0.1)] rotate-12 border-4 border-white/50 backdrop-blur-sm">
            <Lock size={40} strokeWidth={2.5} />
          </div>
        </div>

        {/* Layer 2 - Midground */}
        <div className="floating-group layer-2 absolute top-[30%] right-[20%]">
          <div className="floating-asset bg-[#4ade80] text-[#14532d] py-3 px-8 rounded-full shadow-[8px_8px_0_rgba(0,0,0,0.1)] rotate-6 border-4 border-white/50 flex items-center gap-2 backdrop-blur-sm">
            <LinkIcon size={24} strokeWidth={3} />
            <span className="font-extrabold text-lg tracking-tight">link</span>
          </div>
        </div>

        <div className="floating-group layer-2 absolute bottom-[20%] left-[25%]">
          <div className="floating-asset bg-black text-white p-6 rounded-2xl shadow-[8px_8px_0_rgba(0,0,0,0.1)] -rotate-6 border-4 border-white/20 backdrop-blur-sm">
            <Zap size={48} fill="currentColor" strokeWidth={0} className="text-[#fbbf24]" />
          </div>
        </div>

        {/* Layer 3 - Foreground */}
        <div className="floating-group layer-3 absolute top-[45%] right-[15%]">
          <div className="floating-asset bg-white text-[#d97706] p-4 rounded-xl shadow-[12px_12px_0_rgba(0,0,0,0.15)] -rotate-12 border-2 border-orange-200">
             <ShieldCheck size={32} strokeWidth={2.5} />
          </div>
        </div>

        <div className="floating-group layer-3 absolute top-[15%] left-[30%]">
          <div className="floating-asset bg-white text-[#374151] p-2 rounded-lg shadow-[6px_6px_0_rgba(0,0,0,0.1)] rotate-12 border border-gray-100">
             <span className="font-bold text-xl px-2">G Pay</span>
          </div>
        </div>
      </div>

      {/* Main Content Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto space-y-8">
        <div className="hero-badge inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary transition-colors hover:bg-primary/20">
          ✨ Introducing the new standard
        </div>

        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-foreground drop-shadow-sm flex flex-wrap justify-center gap-x-4">
          <span className="hero-title-word">Payments</span>
          <span className="hero-title-word">that</span>
          <span className="hero-title-word">feel</span>
          <span className="hero-title-word text-[#f97316] relative">
            <span className="absolute -bottom-2 left-0 w-full h-4 bg-[#fdba74]/50 -z-10 -rotate-2 rounded"></span>
            effortless
          </span>
        </h1>

        <p className="hero-subtitle max-w-[600px] text-lg sm:text-xl text-foreground/80 font-medium">
          Designed for modern payment experiences that feel seamless from the first click to final confirmation.
        </p>

        <div className="hero-cta relative group">
          <Button size="lg" className="rounded-full px-8 py-6 text-lg font-bold bg-[#1f2937] hover:bg-black text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all hover:scale-105 hover:-translate-y-1 overflow-hidden">
            <span className="relative z-10">Get started</span>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-[#f97316] rounded-r-full group-hover:w-full transition-all duration-300 ease-out z-0 flex items-center justify-end pr-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
}
