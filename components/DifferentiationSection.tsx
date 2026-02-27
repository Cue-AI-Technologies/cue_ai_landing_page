"use client";

import { Check, Minus } from "lucide-react";

export default function DifferentiationSection() {
  const traditionalFeatures = [
    "Review calls after they happen",
    "Focus on analytics and dashboards",
    "Coaching insights delivered later",
    "CRM updates done manually",
  ];

  const cueFeatures = [
    "Supports reps during the call",
    "Surfaces context in real time",
    "Captures next steps automatically",
    "Syncs structured summaries instantly",
  ];

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Subtle decorative line */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
            Not Just Call Recording. Real-Time Sales Support.
          </h2>
          <p className="mt-3 text-foreground/70 max-w-2xl mx-auto text-sm">
            Traditional tools review conversations after the fact. Cue supports reps while the deal is still in motion.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {/* Traditional Tools Column */}
          <div className="p-6 bg-muted/40 dark:bg-muted/20 rounded-md border border-border/50">
            <h3 className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-4">
              Traditional Call Tools
            </h3>
            <ul className="space-y-3">
              {traditionalFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground/60 text-sm">
                  <Minus size={16} className="mt-0.5 flex-shrink-0 opacity-40" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Cue Column */}
          <div className="p-6 bg-card rounded-md border border-border shadow-sm">
            <h3 className="text-sm font-medium text-cue-lime uppercase tracking-wider mb-4">
              Cue
            </h3>
            <ul className="space-y-3">
              {cueFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground text-sm">
                  <Check size={16} className="mt-0.5 flex-shrink-0 text-cue-lime" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
