"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function PreCallIntelligencePanel() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-card rounded-lg border border-border shadow-lg transition-all duration-300 ${
        isHovered ? "shadow-xl transform -translate-y-1" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Panel Header */}
      <div className="px-5 py-3 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cue-lime animate-pulse" />
          <span className="text-xs font-medium text-foreground">Pre-Call Brief</span>
        </div>
        <span className="text-[10px] text-foreground/50 font-mono">Call in 15 min</span>
      </div>

      <div className="p-5 space-y-5">
        {/* Company Snapshot */}
        <div>
          <div className="text-[10px] uppercase tracking-wider text-foreground/50 mb-2">Company</div>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
              TC
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm text-foreground">TechCorp Solutions</div>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <span className="text-[10px] px-1.5 py-0.5 bg-muted rounded text-foreground/70">Series B</span>
                <span className="text-[10px] px-1.5 py-0.5 bg-muted rounded text-foreground/70">$45M ARR</span>
                <span className="text-[10px] px-1.5 py-0.5 bg-muted rounded text-foreground/70">SaaS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stakeholders */}
        <div>
          <div className="text-[10px] uppercase tracking-wider text-foreground/50 mb-2">Stakeholders</div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-cue-slate/10 dark:bg-cue-slate/30 flex items-center justify-center text-[10px] font-medium text-foreground/80">
                SM
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-foreground">Sarah Mitchell</div>
                <div className="text-[10px] text-foreground/50">VP of Sales • Decision Maker</div>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-cue-lime" title="Key stakeholder" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-cue-slate/10 dark:bg-cue-slate/30 flex items-center justify-center text-[10px] font-medium text-foreground/80">
                JR
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-foreground">James Rodriguez</div>
                <div className="text-[10px] text-foreground/50">Sales Ops Manager • Influencer</div>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Indicators */}
        <div>
          <div className="text-[10px] uppercase tracking-wider text-foreground/50 mb-2">Signals</div>
          <div className="flex flex-wrap gap-1.5">
            <div className="flex items-center gap-1 text-[10px] px-2 py-1 rounded-full bg-cue-amber/10 text-cue-amber border border-cue-amber/20">
              <span>⚠</span>
              <span>Competitor mentioned</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] px-2 py-1 rounded-full bg-cue-lime/10 text-cue-lime border border-cue-lime/20">
              <span>✓</span>
              <span>Budget approved</span>
            </div>
          </div>
        </div>

        {/* Key Talking Points */}
        <div>
          <div className="text-[10px] uppercase tracking-wider text-foreground/50 mb-2">Suggested Topics</div>
          <div className="space-y-1.5">
            <div className="flex items-start gap-2 text-xs text-foreground/80">
              <span className="text-cue-lime mt-0.5">→</span>
              <span>Address integration timeline concerns</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-foreground/80">
              <span className="text-cue-lime mt-0.5">→</span>
              <span>Revisit ROI calculation from last call</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-foreground/80">
              <span className="text-cue-lime mt-0.5">→</span>
              <span>Confirm decision timeline</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-border bg-muted/30 rounded-b-lg">
        <div className="flex items-center justify-between text-[10px] text-foreground/50">
          <span>Powered by Cue AI</span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cue-lime" />
            Auto-updated
          </span>
        </div>
      </div>
    </div>
  );
}

export default function BeforeCallSection() {
  return (
    <section id="features" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-xs text-cue-amber uppercase tracking-wider font-medium mb-3">
              BEFORE YOUR SALES CALL
            </p>
            <h2 className="text-3xl sm:text-[40px] font-semibold text-foreground leading-tight">
              Walk in prepared — every time.
            </h2>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Pre-Call Research & Context</h3>
                <p className="text-foreground/80 text-sm">
                  Show up prepared with conversation starters, account trends, stakeholder insights, and a clear call strategy.
                </p>
                <div className="mt-3 text-sm text-foreground/80">
                  <p className="font-medium text-foreground mb-1">Cue brings together:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Trends and insights</li>
                    <li>• Current company situation</li>
                    <li>• Business priorities and pains</li>
                  </ul>
                </div>
                <p className="text-sm text-foreground/60 mt-2 italic">
                  No tab-flipping. No last-minute scrambling.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Stakeholder & Deal Context</h3>
                <p className="text-foreground/80 text-sm">
                  See who&apos;s involved in the deal and how they relate — decision-makers, influencers, and blockers — so you know where to focus.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Call Strategy, Aligned to Your Playbook</h3>
                <p className="text-foreground/80 text-sm">
                  Cue understands how you sell. It aligns questions, hypotheses, and angles to your team&apos;s playbook and the reality of this account — not generic scripts.
                </p>
              </div>
            </div>

            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-cue-slate text-white px-5 py-2.5 rounded text-sm font-medium hover:opacity-90 transition-opacity mt-8"
            >
              Get started
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Visual - Product Panel */}
          <div className="relative">
            <PreCallIntelligencePanel />
          </div>
        </div>
      </div>
    </section>
  );
}
