"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-12 overflow-hidden">
  
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold text-foreground max-w-4xl mx-auto leading-tight">
          Sell with clarity. Close with confidence.
        </h1>
        
        <p className="mt-6 text-foreground/80 max-w-2xl mx-auto text-lg">
          Cue prepares you before the call, supports you during, and handles the busywork after — so nothing slips through.
        </p>
        
        <p className="mt-4 text-sm text-foreground/60">
          Built for sales teams that move fast.
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="https://app.rightoncue.ai"
            className="inline-flex items-center gap-2 bg-cue-slate text-white px-6 py-3 rounded font-medium hover:opacity-90 transition-opacity"
          >
            Try Cue Now
            <ArrowRight size={18} />
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex items-center gap-2 bg-background text-foreground border border-border px-6 py-3 rounded font-medium hover:bg-muted transition-colors"
          >
            See how it works
          </Link>
        </div>
      </div>
    </section>
  );
}
