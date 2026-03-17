"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/60 backdrop-blur-xl border-b border-black/5">
      <div className="flex items-center gap-2">
        <Link href="/home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#f97316] rounded-xl flex items-center justify-center shadow-[0_4px_15px_rgba(249,115,22,0.4)] transition-transform group-hover:scale-110 group-hover:rotate-3">
            <span className="text-white font-black text-2xl">X</span>
          </div>
          <span className="text-2xl font-black tracking-tighter text-[#1a2e05]">
            find the <span className="text-[#f97316]">x</span>
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-8 mr-4">
          <Link href="/home" className="text-sm font-bold text-[#1a2e05]/60 hover:text-[#1a2e05] transition-all hover:-translate-y-0.5">
            Connection
          </Link>
          <Link href="/home" className="text-sm font-bold text-[#1a2e05]/60 hover:text-[#1a2e05] transition-all hover:-translate-y-0.5">
            Dashboard
          </Link>
        </div>

        <div className="flex items-center gap-4 pl-6 border-l border-black/10">
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-10 h-10 border-2 border-[#f97316]/20 hover:border-[#f97316] transition-all hover:scale-105 shadow-sm"
              }
            }}
          />
        </div>
      </div>
    </nav>

  );
}
