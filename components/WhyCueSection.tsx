"use client";

import { useState, useEffect } from "react";

const aiSignals = [
  { icon: "✓", text: "Pain identified" },
  { icon: "✓", text: "Suggested follow-up question" },
  { icon: "✓", text: "Objection detected with response guidance" },
  { icon: "✓", text: "Propose this next step" },
];

function AnimatedAISignals() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= aiSignals.length) {
          setTimeout(() => setVisibleCount(0), 1500);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-2.5 pt-2.5 border-t border-cue-lime/20 space-y-1">
      {aiSignals.map((signal, index) => (
        <div
          key={index}
          className={`flex items-center gap-1.5 transition-all duration-300 ${
            index < visibleCount
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-2"
          }`}
        >
          <span className="text-cue-lime text-[10px]">{signal.icon}</span>
          <span className="text-[10px] text-white/70 font-mono">
            {signal.text}
          </span>
        </div>
      ))}
    </div>
  );
}

function AnimatedKPIs() {
  const [winRate, setWinRate] = useState(0);
  const [engagement, setEngagement] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    setHasAnimated(true);

    const winInterval = setInterval(() => {
      setWinRate((prev) => {
        if (prev >= 8) {
          clearInterval(winInterval);
          return 8;
        }
        return prev + 1;
      });
    }, 100);

    const engInterval = setInterval(() => {
      setEngagement((prev) => {
        if (prev >= 12) {
          clearInterval(engInterval);
          return 12;
        }
        return prev + 1;
      });
    }, 80);

    return () => {
      clearInterval(winInterval);
      clearInterval(engInterval);
    };
  }, [hasAnimated]);

  return (
    <div className="mt-3 pt-3 border-t border-border/50 space-y-2">
      <div className="flex items-center justify-between text-xs">
        <span className="text-foreground/60">Win rate</span>
        <span className="text-cue-lime font-semibold">+{winRate}%</span>
      </div>
      <div className="flex items-center justify-between text-xs">
        <span className="text-foreground/60">Engagement</span>
        <span className="text-cue-lime font-semibold">↑{engagement}%</span>
      </div>
    </div>
  );
}

function CapabilityCard({
  title,
  description,
  isAI = false,
  showKPI = false,
}: {
  title: string;
  description: string;
  isAI?: boolean;
  showKPI?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  if (isAI) {
    return (
      <div
        className="relative p-4 rounded-xl bg-cue-slate dark:bg-cue-slate/80 border border-cue-slate/20 dark:border-cue-lime/20 shadow-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-xl bg-cue-lime/10 dark:bg-cue-lime/15 blur-lg -z-10 animate-pulse-slow" />
        
        <div className="flex items-center gap-2 mb-2">
          <div className="w-7 h-7 rounded-full bg-cue-lime flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-cue-slate" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h4 className="text-[13px] font-semibold text-white dark:text-cue-lime">{title}</h4>
        </div>
        <p className="text-[11px] text-white/80 dark:text-foreground/70 leading-relaxed">
          {description}
        </p>
        <AnimatedAISignals />
      </div>
    );
  }

  return (
    <div
      className={`p-4 rounded-lg bg-card border border-border transition-all duration-300 ${
        isHovered ? "shadow-md -translate-y-0.5" : "shadow-sm"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h4 className="text-sm font-semibold text-foreground mb-2">{title}</h4>
      <p className="text-xs text-foreground/60 leading-relaxed">{description}</p>
      {showKPI && isHovered && <AnimatedKPIs />}
    </div>
  );
}

function LifecycleColumn({
  stage,
  headline,
  children,
}: {
  stage: string;
  headline: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-full">
      {/* Stage Label */}
      <div className="mb-3">
        <span className="text-[10px] uppercase tracking-widest text-foreground/40 font-medium">
          {stage}
        </span>
      </div>
      
      {/* Headline */}
      <h3 className="text-lg font-semibold text-foreground mb-4 leading-snug min-h-[28px]">
        {headline}
      </h3>
      
      {/* Capability Cards */}
      <div className="flex flex-col gap-3 flex-1">
        {children}
      </div>
    </div>
  );
}

export default function WhyCueSection() {
  return (
    <section id="how-it-works" className="py-20 bg-muted dark:bg-muted/30 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs text-cue-amber uppercase tracking-wider font-medium mb-3">
            HOW IT WORKS
          </p>
          <h2 className="text-3xl sm:text-[38px] font-semibold text-foreground leading-tight">
            How Cue Supports Every Sales Conversation
          </h2>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            From preparation to live calls to follow-up, Cue quietly equips reps with the right context at the right moment.
          </p>
        </div>

        {/* 3-Column Lifecycle Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {/* Column 1: Before the Call */}
          <LifecycleColumn
            stage="Before the Call"
            headline="Walk In Prepared"
          >
            <CapabilityCard
              title="Pre-Call Intelligence"
              description="Show up prepared with conversations starters and trends, stakeholder, research, ad a call strategy."
            />
            <CapabilityCard
              title="Account Context"
              description="Key stakeholders, recent activity, and relationship history at a glance."
            />
          </LifecycleColumn>

          {/* Column 2: During the Call */}
          <LifecycleColumn
            stage="During the Call"
            headline="Stay Present. Stay Sharp."
          >
            <CapabilityCard
              title="Live Conversation Analysis"
              description="Get cues in real time so your nail your playbook on every call and close more deals."
            />
            <CapabilityCard
              title="AI Intelligence Engine"
              description="Get real-time guidance during live conversations — so you stay aligned to your playbook and close more deals."
              isAI
            />
          </LifecycleColumn>

          {/* Column 3: After the Call */}
          <LifecycleColumn
            stage="After the Call"
            headline="Follow Up Without Busywork"
          >
            <CapabilityCard
              title="Automated Capture & Sync"
              description="Notes structured, CRM updated, next steps tracked — automatically."
            />
            <CapabilityCard
              title="Performance Insights"
              description="Trends, coaching signals, win-loss patterns."
              showKPI
            />
          </LifecycleColumn>
        </div>
      </div>
    </section>
  );
}
