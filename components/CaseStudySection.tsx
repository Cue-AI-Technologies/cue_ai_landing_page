"use client";

const beforeItems = [
  "Manual note-taking",
  "Missed objection patterns",
  "Delayed CRM updates",
];

const afterItems = [
  "Structured call summaries",
  "Real-time objection detection",
  "Instant CRM sync",
];

export default function CaseStudySection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs text-cue-amber uppercase tracking-wider font-medium mb-3">
            CASE STUDY
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
            How TechCorp Improved Sales Execution with Cue
          </h2>
        </div>

        {/* Before/After Comparison */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Before */}
          <div className="bg-muted/50 dark:bg-muted/20 rounded-xl p-6 border border-border/50">
            <div className="text-xs uppercase tracking-wider text-foreground/50 font-medium mb-4">
              Before Cue
            </div>
            <ul className="space-y-3">
              {beforeItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-foreground/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-foreground/40 text-xs">✗</span>
                  </div>
                  <span className="text-sm text-foreground/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="bg-cue-lime/5 dark:bg-cue-lime/10 rounded-xl p-6 border border-cue-lime/20">
            <div className="text-xs uppercase tracking-wider text-cue-lime font-medium mb-4">
              With Cue
            </div>
            <ul className="space-y-3">
              {afterItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cue-lime/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-cue-lime text-xs">✓</span>
                  </div>
                  <span className="text-sm text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Result */}
        <div className="text-center p-6 bg-cue-slate/5 dark:bg-cue-slate/10 rounded-xl border border-border/30">
          <div className="text-xs uppercase tracking-wider text-foreground/50 font-medium mb-2">
            Result
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-cue-slate">
            <span>+21%</span> increase in win rate
          </div>
          <div className="text-sm text-foreground/60 mt-1">
            over 2 quarters
          </div>
        </div>
      </div>
    </section>
  );
}
