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
