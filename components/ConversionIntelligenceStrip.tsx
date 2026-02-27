export default function ConversionIntelligenceStrip() {
  const reassurances = [
    "No bots join your calls",
    "Works with your existing CRM",
    "No behavior change required",
    "Enterprise-grade privacy and security",
  ];

  return (
    <section className="py-10 bg-muted/30 dark:bg-muted/10 border-y border-border/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-lg font-medium text-foreground mb-6">
          Designed to Fit Your Workflow — Not Disrupt It
        </h3>
        
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {reassurances.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-foreground/70">
              <span className="w-1.5 h-1.5 rounded-full bg-cue-lime flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
