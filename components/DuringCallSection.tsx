"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

function LiveCallPanel() {
  const [engagementLevel, setEngagementLevel] = useState(72);
  const [showObjection, setShowObjection] = useState(false);

  useEffect(() => {
    // Simulate engagement fluctuation
    const engagementInterval = setInterval(() => {
      setEngagementLevel((prev) => {
        const change = Math.random() > 0.5 ? 2 : -1;
        const newValue = prev + change;
        return Math.max(60, Math.min(85, newValue));
      });
    }, 2000);

    // Show objection after delay
    const objectionTimeout = setTimeout(() => {
      setShowObjection(true);
    }, 1500);

    return () => {
      clearInterval(engagementInterval);
      clearTimeout(objectionTimeout);
    };
  }, []);

  const engagementColor =
    engagementLevel >= 75 ? "bg-cue-lime" : engagementLevel >= 65 ? "bg-cue-amber" : "bg-red-400";

  return (
    <div className="bg-card rounded-lg border border-border shadow-lg overflow-hidden">
      {/* Panel Header */}
      <div className="px-5 py-3 border-b border-border flex items-center justify-between bg-cue-slate dark:bg-cue-slate/50">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs font-medium text-white">Live Call Intelligence</span>
        </div>
        <span className="text-[10px] text-white/60 font-mono">12:34 elapsed</span>
      </div>

      <div className="p-5 space-y-4">
        {/* Live Transcript Snippet */}
        <div>
          <div className="text-[10px] uppercase tracking-wider text-foreground/50 mb-2">Live Transcript</div>
          <div className="bg-muted/50 dark:bg-muted/30 rounded-lg p-3 space-y-2 text-xs font-mono">
            <div className="flex gap-2">
              <span className="text-foreground/40 shrink-0">Sarah:</span>
              <span className="text-foreground/80">&ldquo;...concerned about the implementation timeline&rdquo;</span>
            </div>
            <div className="flex gap-2">
              <span className="text-cue-lime shrink-0">You:</span>
              <span className="text-foreground/80">&ldquo;I understand. Let me address that specifically...&rdquo;</span>
            </div>
            <div className="h-[2px] w-16 bg-foreground/20 animate-pulse" />
          </div>
        </div>

        {/* Objection Detection */}
        <div
          className={`transition-all duration-500 ${
            showObjection ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <div className="bg-cue-amber/10 border border-cue-amber/20 rounded-lg p-3">
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded bg-cue-amber/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-cue-amber text-xs">!</span>
              </div>
              <div>
                <div className="text-xs font-medium text-foreground">Objection Detected</div>
                <div className="text-[10px] text-foreground/60 mt-0.5">Timeline concern • Common pattern</div>
              </div>
            </div>
          </div>
        </div>

        {/* Suggested Prompt */}
        <div className="bg-cue-lime/5 dark:bg-cue-lime/10 border border-cue-lime/20 rounded-lg p-3">
          <div className="flex items-start gap-2">
            <div className="w-5 h-5 rounded bg-cue-lime/20 flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-cue-lime text-xs">→</span>
            </div>
            <div>
              <div className="text-xs font-medium text-foreground">Suggested Response</div>
              <div className="text-[11px] text-foreground/70 mt-1">
                &ldquo;We typically see teams go live in 2-3 weeks. Would it help to walk through a sample timeline?&rdquo;
              </div>
            </div>
          </div>
        </div>

        {/* Engagement Momentum */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-[10px] uppercase tracking-wider text-foreground/50">Engagement</div>
            <div className="text-xs font-medium text-foreground">{engagementLevel}%</div>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className={`h-full ${engagementColor} transition-all duration-500 rounded-full`}
              style={{ width: `${engagementLevel}%` }}
            />
          </div>
          <div className="flex justify-between mt-1 text-[9px] text-foreground/40">
            <span>Low</span>
            <span>High</span>
          </div>
        </div>

        {/* Coverage Checklist */}
        <div>
          <div className="text-[10px] uppercase tracking-wider text-foreground/50 mb-2">Topic Coverage</div>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="flex items-center gap-1.5 text-[10px]">
              <div className="w-3 h-3 rounded border border-cue-lime bg-cue-lime/10 flex items-center justify-center">
                <span className="text-cue-lime text-[8px]">✓</span>
              </div>
              <span className="text-foreground/70">Pain points</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px]">
              <div className="w-3 h-3 rounded border border-cue-lime bg-cue-lime/10 flex items-center justify-center">
                <span className="text-cue-lime text-[8px]">✓</span>
              </div>
              <span className="text-foreground/70">Budget</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px]">
              <div className="w-3 h-3 rounded border border-border bg-muted/50 flex items-center justify-center">
                <span className="text-foreground/30 text-[8px]">○</span>
              </div>
              <span className="text-foreground/50">Timeline</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px]">
              <div className="w-3 h-3 rounded border border-border bg-muted/50 flex items-center justify-center">
                <span className="text-foreground/30 text-[8px]">○</span>
              </div>
              <span className="text-foreground/50">Next steps</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DuringCallSection() {
  return (
    <section className="py-20 bg-muted dark:bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual - Live Call Panel */}
          <div className="order-2 lg:order-1">
            <LiveCallPanel />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-xs text-cue-amber uppercase tracking-wider font-medium mb-3">
              DURING YOUR MEETING
            </p>
            <h2 className="text-3xl sm:text-[40px] font-semibold text-foreground leading-tight">
              Stay present. Keep momentum.
            </h2>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">In-Moment Cues</h3>
                <p className="text-foreground/80 text-sm">
                  Cue surfaces timely prompts and observations as the conversation unfolds — helping you ask better questions and follow the signal, not a checklist.
                </p>
                <p className="text-sm text-foreground/60 mt-2 italic">
                  No alerts. No interruptions. Just guidance when it matters.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Live Context</h3>
                <p className="text-foreground/80 text-sm">
                  Relevant background and signals appear as they become useful, so you can adapt in the moment without breaking focus.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Conversation Coverage</h3>
                <p className="text-foreground/80 text-sm">
                  See which topics have been addressed — pain points, priorities, next steps — and what still needs clarity before the call ends.
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
        </div>
      </div>
    </section>
  );
}
