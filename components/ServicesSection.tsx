import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">      
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p className="text-xs text-cue-amber uppercase tracking-wider font-medium mb-3">
          PROFESSIONAL SERVICES
        </p>
        <h2 className="text-3xl sm:text-[40px] font-semibold text-foreground">
          Beyond the product: custom sales intelligence.
        </h2>
        <p className="mt-4 text-foreground/80 max-w-2xl mx-auto">
          For teams with more complex needs, Cue offers custom solutions and sales consulting — from tailored workflows and integrations to playbook design and analysis.
        </p>
        <p className="mt-4 text-foreground/60 max-w-xl mx-auto text-sm">
          This work builds on the same core intelligence layer, adapted to your sales motion, data environment, and go-to-market strategy.
        </p>
        
        <Link
          href="#"
          className="inline-flex items-center gap-2 bg-card text-foreground border border-border px-5 py-2.5 rounded font-medium hover:bg-muted transition-colors mt-8 text-sm"
        >
          Explore custom services
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
