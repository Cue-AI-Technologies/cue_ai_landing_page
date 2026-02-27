import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative accents */}
      <img 
        src="https://assets.macaly-user-data.dev/if738gvrrpzsz730065jex23/nrpwbzp6w1i007zm1dfep5r3/mX6ePqNRf4fH4rz6EGaCX.svg"
        alt=""
        className="absolute top-1/2 -translate-y-1/2 right-8 w-14 h-20 opacity-15 dark:hidden"
      />
      <img 
        src="https://assets.macaly-user-data.dev/if738gvrrpzsz730065jex23/nrpwbzp6w1i007zm1dfep5r3/WlYTJraAA1E_EZqLrsESV.svg"
        alt=""
        className="absolute top-1/2 -translate-y-1/2 right-8 w-14 h-20 opacity-25 hidden dark:block"
      />
      
      <img 
        src="https://assets.macaly-user-data.dev/if738gvrrpzsz730065jex23/nrpwbzp6w1i007zm1dfep5r3/pjTKqOWRpTkovCptVrTF8.svg"
        alt=""
        className="absolute bottom-8 left-12 w-10 h-10 opacity-15 dark:hidden"
      />
      <img 
        src="https://assets.macaly-user-data.dev/if738gvrrpzsz730065jex23/nrpwbzp6w1i007zm1dfep5r3/mD6Nzydo7FGBbw9EEcsD9.svg"
        alt=""
        className="absolute bottom-8 left-12 w-10 h-10 opacity-25 hidden dark:block"
      />
      
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
