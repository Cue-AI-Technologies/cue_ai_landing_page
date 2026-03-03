import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-muted dark:bg-muted/30 relative overflow-hidden">
            
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
