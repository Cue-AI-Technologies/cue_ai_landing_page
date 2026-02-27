import { Shield, Video, Lock, FileCheck } from "lucide-react";

export default function TrustSection() {
  const trustItems = [
    {
      icon: Shield,
      title: "Privacy-first architecture",
      description: "Data minimization and clear boundaries by design",
    },
    {
      icon: Video,
      title: "No meeting bots joining your calls",
      description: "Works silently alongside you without disruption",
    },
    {
      icon: Lock,
      title: "Secure handling of sensitive sales conversations",
      description: "Enterprise-grade encryption and access controls",
    },
    {
      icon: FileCheck,
      title: "SOC 2 compliance (in progress)",
      description: "Rigorous security standards and auditing",
    },
  ];

  return (
    <section className="py-20 bg-muted dark:bg-muted/30 relative overflow-hidden">
      {/* Decorative accents */}
      <img 
        src="https://assets.macaly-user-data.dev/if738gvrrpzsz730065jex23/nrpwbzp6w1i007zm1dfep5r3/j09PgMq-s8XA2iN06hfcY.svg"
        alt=""
        className="absolute top-8 left-8 w-10 h-20 opacity-15 dark:hidden"
      />
      <img 
        src="https://assets.macaly-user-data.dev/if738gvrrpzsz730065jex23/nrpwbzp6w1i007zm1dfep5r3/_XI9DgAO6OHKjpDsPVcbN.svg"
        alt=""
        className="absolute top-8 left-8 w-10 h-20 opacity-25 hidden dark:block"
      />
      
      <img 
        src="https://assets.macaly-user-data.dev/if738gvrrpzsz730065jex23/nrpwbzp6w1i007zm1dfep5r3/4dtmUnuhWZFL8paSB-GgK.svg"
        alt=""
        className="absolute bottom-12 right-12 w-14 h-14 opacity-15 dark:hidden"
      />
      <img 
        src="https://assets.macaly-user-data.dev/if738gvrrpzsz730065jex23/nrpwbzp6w1i007zm1dfep5r3/zUyuKxGJrgUYx4JrREijJ.svg"
        alt=""
        className="absolute bottom-12 right-12 w-14 h-14 opacity-25 hidden dark:block"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-[40px] font-semibold text-foreground">
            Built for trust. Designed for sales.
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-md border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-foreground/5 rounded flex items-center justify-center mb-4">
                <item.icon className="text-foreground" size={20} />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-2">{item.title}</h3>
              <p className="text-foreground/60 text-xs">{item.description}</p>
            </div>
          ))}
        </div>
        
        <p className="text-center text-sm text-foreground/60 mt-8 max-w-xl mx-auto">
          Cue is built for real sales environments, where customer trust and data protection are non-negotiable.
        </p>
      </div>
    </section>
  );
}
