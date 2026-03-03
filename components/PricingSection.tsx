import Link from "next/link";
import { Check } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Individual",
      description: "For individual sales professionals",
      features: [
        "Up to 40 calls / month",
        "Personal AI sales intelligence",
        "Calendar integrations",
        "CRM preparation",
      ],
      cta: "Start Free Trial",
      href: "https://app.rightoncue.ai",
      ctaStyle: "outline",
      popular: false,
    },
    {
      name: "Pro",
      description: "For reps and operators who want deeper control",
      features: [
        "Everything in Individual",
        "Up to 80 calls / month",
        "Custom playbooks",
        "API & integrations",
        "Analytics & trends",
      ],
      cta: "Start Free Trial",
      href: "https://app.rightoncue.ai",
      ctaStyle: "primary",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For larger teams and organizations",
      features: [
        "Unlimited team seats",
        "Advanced access & compliance",
        "Custom intelligence workflows",
        "Dedicated support",
      ],
      cta: "Contact Sales",
      href: "mailto:sales@rightoncue.ai",
      ctaStyle: "outline",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-cue-slate relative overflow-hidden">
      {/* Background decorative wave */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320">
          <path
            fill="currentColor"
            className="text-white"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,186.7C960,213,1056,235,1152,224C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
      
      {/* Decorative accents - using lime/light variants for dark background */}
            
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-[40px] font-semibold text-white">
            Choose your plan
          </h2>
          <p className="mt-4 text-white/70">
            Start individually or scale across your team.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-md p-6 ${
                plan.popular
                  ? "bg-white shadow-xl"
                  : "bg-white/10 backdrop-blur border border-white/20"
              }`}
            >
              {plan.popular && (
                <span className="inline-block bg-cue-lime text-cue-slate text-xs font-medium px-3 py-1 rounded-xs mb-4">
                  Most Popular
                </span>
              )}
              <h3 className={`font-semibold text-lg ${plan.popular ? "text-cue-slate" : "text-white"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mt-1 ${plan.popular ? "text-foreground/80" : "text-white/70"}`}>
                {plan.description}
              </p>
              
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check
                      className="mt-0.5 flex-shrink-0 text-cue-lime"
                      size={16}
                    />
                    <span className={`text-sm ${plan.popular ? "text-cue-slate" : "text-white/90"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Link
                href={plan.href}
                className={`block text-center mt-6 px-4 py-2.5 rounded text-sm font-medium transition-colors ${
                  plan.ctaStyle === "primary"
                    ? "bg-cue-lime text-cue-slate hover:opacity-90"
                    : plan.popular
                    ? "bg-white text-cue-slate border border-cue-divider hover:bg-cue-cloud"
                    : "bg-white/10 text-white border border-white/30 hover:bg-white/20"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
