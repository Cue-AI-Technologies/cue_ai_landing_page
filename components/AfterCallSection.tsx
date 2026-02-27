"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

function PostCallDashboard() {
  const [showSync, setShowSync] = useState(false);

  useEffect(() => {
    const syncTimeout = setTimeout(() => {
      setShowSync(true);
    }, 1000);
    return () => clearTimeout(syncTimeout);
  }, []);

  return (
    <div className="bg-card rounded-lg border border-border shadow-lg overflow-hidden">
      {/* Panel Header */}
      <div className="px-5 py-3 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cue-lime" />
          <span className="text-xs font-medium text-foreground">Post-Call Summary</span>
        </div>
        <span className="text-[10px] text-foreground/50">TechCorp Solutions • Just now</span>
      </div>

      <div className="p-5 space-y-4">
        {/* Call Summary */}
        <div>
          <div className="text-[10px] uppercase tracking-wider text-foreground/50 mb-2">Call Summary</div>
          <div className="bg-muted/30 dark:bg-muted/20 rounded-lg p-3 text-xs text-foreground/80 leading-relaxed">
            Discovery call with Sarah Mitchell (VP Sales) focused on current challenges with sales rep onboarding. Key concern: implementation timeline. Budget confirmed at $50K. Decision expected within 2 weeks pending technical review.
          </div>
        </div>

        {/* Next Steps */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-[10px] uppercase tracking-wider text-foreground/50">Next Steps</div>
            <div className="text-[10px] text-cue-lime font-medium">3 captured</div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2 p-2 bg-cue-lime/5 dark:bg-cue-lime/10 rounded border border-cue-lime/20">
              <div className="w-4 h-4 rounded border-2 border-cue-lime/40 flex items-center justify-center shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-sm bg-cue-lime" />
              </div>
              <div className="text-xs text-foreground/80">Send implementation timeline document</div>
            </div>
            <div className="flex items-start gap-2 p-2 bg-muted/30 dark:bg-muted/20 rounded border border-border">
              <div className="w-4 h-4 rounded border-2 border-border shrink-0 mt-0.5" />
              <div className="text-xs text-foreground/70">Schedule technical deep-dive with James</div>
            </div>
            <div className="flex items-start gap-2 p-2 bg-muted/30 dark:bg-muted/20 rounded border border-border">
              <div className="w-4 h-4 rounded border-2 border-border shrink-0 mt-0.5" />
              <div className="text-xs text-foreground/70">Follow up on ROI calculator request</div>
            </div>
          </div>
        </div>

        {/* CRM Sync Status */}
        <div
          className={`transition-all duration-500 ${
            showSync ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <div className="bg-cue-lime/5 dark:bg-cue-lime/10 border border-cue-lime/20 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-cue-lime/20 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-cue-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-medium text-foreground">CRM Updated</div>
                  <div className="text-[10px] text-foreground/50">Salesforce • Opportunity synced</div>
                </div>
              </div>
              <div className="text-[10px] text-cue-lime">Review →</div>
            </div>
          </div>
        </div>

        {/* Performance Trend */}
        <div>
          <div className="text-[10px] uppercase tracking-wider text-foreground/50 mb-2">Performance Trend</div>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-2 bg-muted/30 dark:bg-muted/20 rounded">
              <div className="text-lg font-semibold text-foreground">78%</div>
              <div className="text-[9px] text-foreground/50 uppercase">Talk ratio</div>
              <div className="text-[9px] text-cue-lime">↑ 5%</div>
            </div>
            <div className="text-center p-2 bg-muted/30 dark:bg-muted/20 rounded">
              <div className="text-lg font-semibold text-foreground">12</div>
              <div className="text-[9px] text-foreground/50 uppercase">Questions</div>
              <div className="text-[9px] text-cue-lime">↑ 3</div>
            </div>
            <div className="text-center p-2 bg-muted/30 dark:bg-muted/20 rounded">
              <div className="text-lg font-semibold text-foreground">A</div>
              <div className="text-[9px] text-foreground/50 uppercase">Call score</div>
              <div className="text-[9px] text-cue-amber">= B+</div>
            </div>
          </div>
        </div>

        {/* Mini trend chart */}
        <div className="pt-2">
          <div className="flex items-end gap-1 h-8">
            {[35, 42, 38, 55, 48, 62, 58, 70, 65, 78].map((value, i) => (
              <div
                key={i}
                className="flex-1 bg-cue-lime/20 rounded-t"
                style={{ height: `${value}%` }}
              >
                <div
                  className="w-full bg-cue-lime rounded-t transition-all duration-500"
                  style={{ height: i === 9 ? "100%" : "0%" }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-1 text-[9px] text-foreground/40">
            <span>Last 10 calls</span>
            <span>This call</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AfterCallSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-xs text-cue-amber uppercase tracking-wider font-medium mb-3">
              AFTER YOUR MEETING
            </p>
            <h2 className="text-3xl sm:text-[40px] font-semibold text-foreground leading-tight">
              Close the loop without busywork.
            </h2>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Decisions & Next Steps Captured</h3>
                <p className="text-foreground/80 text-sm">
                  Key commitments, requirements, and tasks are captured automatically — while the context is still fresh.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">CRM Updates, Done for You</h3>
                <p className="text-foreground/80 text-sm">
                  Cue prepares CRM updates for review and approval, keeping data accurate without manual entry.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Trends Over Time</h3>
                <p className="text-foreground/80 text-sm">
                  Across calls, Cue highlights patterns in objections, deal health, and execution — helping reps improve and leaders coach with real context.
                </p>
              </div>
            </div>

            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-cue-lime text-cue-slate px-5 py-2.5 rounded text-sm font-medium hover:opacity-90 transition-opacity mt-8"
            >
              Get started
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Visual - Post-Call Dashboard */}
          <div className="relative">
            <PostCallDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
