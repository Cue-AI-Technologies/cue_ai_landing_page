import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-muted dark:bg-muted/30 relative overflow-hidden">
      {/* Decorative accents */}
      <img 
        src="https://assets.macaly-user-data.dev/if738gvrrpzsz730065jex23/nrpwbzp6w1i007zm1dfep5r3/U-GamkVq8tR2mXts_YdF3.svg"
        alt=""
        className="absolute top-1/2 -translate-y-1/2 left-16 w-16 h-16 opacity-15 dark:hidden"
      />
      <img 
        src="https://assets.macaly-user-data.dev/if738gvrrpzsz730065jex23/nrpwbzp6w1i007zm1dfep5r3/bjfcJ1-nbajXJYp1i6MIV.svg"
        alt=""
        className="absolute top-1/2 -translate-y-1/2 left-16 w-16 h-16 opacity-25 hidden dark:block"
      />
      
      <img 
        src="https://assets.macaly-user-data.dev/if738gvrrpzsz730065jex23/nrpwbzp6w1i007zm1dfep5r3/-xlACcdEn2jRwdCfbfk4w.svg"
        alt=""
        className="absolute top-1/2 -translate-y-1/2 right-16 w-14 h-14 opacity-15 dark:hidden"
      />
      <img 
        src="https://assets.macaly-user-data.dev/if738gvrrpzsz730065jex23/nrpwbzp6w1i007zm1dfep5r3/_ux2kmfwbgKKueKghDWau.svg"
        alt=""
        className="absolute top-1/2 -translate-y-1/2 right-16 w-14 h-14 opacity-25 hidden dark:block"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
          See how Cue fits into your sales workflow.
        </h2>
        
        <Link
          href="https://app.rightoncue.ai"
          className="inline-flex items-center gap-2 bg-cue-lime text-cue-slate px-6 py-3 rounded font-medium hover:opacity-90 transition-opacity mt-8"
        >
          Try Cue Now
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
