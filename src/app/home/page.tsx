"use client";

import { HeroSection } from "@/src/components/blocks/hero-section";
import { Navbar } from "@/src/components/blocks/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      <Navbar />
      <div className="pt-20 w-full flex flex-col items-center justify-center">
        <HeroSection />
      </div>
    </main>
  );
}

