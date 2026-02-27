"use client";

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-muted dark:bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Large quotation mark */}
        <div className="text-6xl text-cue-lime/30 font-serif leading-none mb-6">"</div>
        
        {/* Quote */}
        <blockquote className="text-xl sm:text-2xl font-medium text-foreground leading-relaxed mb-8">
          Cue helps our reps stay fully present while still capturing every signal that matters. 
          It&apos;s like having a sales coach in the room — without the interruption.
        </blockquote>
        
        {/* Attribution */}
        <div className="flex items-center justify-center gap-4">
          {/* Avatar placeholder */}
          <div className="w-12 h-12 rounded-full bg-cue-slate/10 dark:bg-cue-slate/30 flex items-center justify-center">
            <span className="text-sm font-semibold text-foreground/60">VP</span>
          </div>
          <div className="text-left">
            <div className="font-semibold text-foreground">VP of Sales</div>
            <div className="text-sm text-foreground/60">Mid-Market SaaS Company</div>
          </div>
        </div>
      </div>
    </section>
  );
}
