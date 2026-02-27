"use client";

import { useEffect, useState, useRef } from "react";

const metrics = [
  {
    value: 18,
    prefix: "+",
    suffix: "%",
    label: "Meeting-to-Opportunity Conversion",
    subtext: "Average across enterprise teams",
  },
  {
    value: 35,
    prefix: "-",
    suffix: "%",
    label: "CRM Admin Time",
    subtext: "Time saved per rep, per week",
  },
  {
    value: 22,
    prefix: "+",
    suffix: "%",
    label: "Rep Engagement Score",
    subtext: "Measured via call analytics",
  },
];

function AnimatedMetric({
  value,
  prefix,
  suffix,
  label,
  subtext,
}: {
  value: number;
  prefix: string;
  suffix: string;
  label: string;
  subtext: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Animate the number
          const duration = 1500;
          const steps = 30;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setDisplayValue(value);
              clearInterval(timer);
            } else {
              setDisplayValue(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-center px-4">
      <div className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
        <span className="text-cue-lime">{prefix}</span>
        {displayValue}
        <span className="text-cue-lime">{suffix}</span>
      </div>
      <div className="text-sm font-medium text-foreground mb-1">{label}</div>
      <div className="text-xs text-foreground/50">{subtext}</div>
    </div>
  );
}

export default function ImpactMetricsSection() {
  return (
    <section className="py-16 bg-background border-t border-b border-border/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {metrics.map((metric) => (
            <AnimatedMetric key={metric.label} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}
