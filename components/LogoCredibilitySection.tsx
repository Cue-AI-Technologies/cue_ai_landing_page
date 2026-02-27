"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type LogoItem = {
  name: string;
  src: string;
};

const logos: LogoItem[] = [
  {
    name: "Company 1",
    src: "https://asset.brandfetch.io/id1B8_hyT0/idBdbqOltf.svg",
  },
  {
    name: "Company 2",
    src: "https://pitch-assets-ccb95893-de3f-4266-973c-20049231b248.s3.eu-west-1.amazonaws.com/ab685adc-9dfb-45f6-b7b9-a47b14d7135c?pitch-bytes=8747&pitch-content-type=image%2Fsvg%2Bxml",
  },
  {
    name: "Company 3",
    src: "https://pitch-assets-ccb95893-de3f-4266-973c-20049231b248.s3.eu-west-1.amazonaws.com/e9cb158d-69ed-495b-8290-cd014bb9003a?pitch-bytes=2373&pitch-content-type=image%2Fsvg%2Bxml",
  },
  {
    name: "Company 4",
    src: "https://pitch-assets-ccb95893-de3f-4266-973c-20049231b248.s3.eu-west-1.amazonaws.com/a1aef588-b505-4096-8dba-69a4e6eb4bbc?pitch-bytes=4007&pitch-content-type=image%2Fsvg%2Bxml",
  },
  {
    name: "Company 5",
    src: "https://pitch-assets-ccb95893-de3f-4266-973c-20049231b248.s3.eu-west-1.amazonaws.com/8a634f03-a4cf-4421-bd49-6c21fae17d47?pitch-bytes=9481&pitch-content-type=image%2Fsvg%2Bxml",
  },
  {
    name: "Company 6",
    src: "https://pitch-assets-ccb95893-de3f-4266-973c-20049231b248.s3.eu-west-1.amazonaws.com/4a096966-3bc4-42b9-8c65-83036560d95f?pitch-bytes=268044&pitch-content-type=image%2Fpng",
  },
  {
    name: "Company 7",
    src: "https://pitch-assets-ccb95893-de3f-4266-973c-20049231b248.s3.eu-west-1.amazonaws.com/9d66d5c9-e472-4a0b-a76c-d8848de6926b?pitch-bytes=8351&pitch-content-type=image%2Fpng",
  },
];

export default function LogoCredibilitySection() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.35; // Slower for smoother feel

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed;
        
        // Reset position when we've scrolled one third (since it's tripled)
        const thirdWidth = scrollContainer.scrollWidth / 3;
        if (scrollPosition >= thirdWidth) {
          scrollPosition = 0;
        }
        
        scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused]);

  // Safety: never render an <Image> without a real src.
  const safeLogos = logos.filter((l) => {
    const isValid = typeof l.src === "string" && l.src.trim().length > 0;
    if (!isValid) console.warn("[LogoCredibilitySection] Skipping invalid logo", l);
    return isValid;
  });

  // Triple logos for seamless infinite scroll with less visible repetition
  const allLogos = [...safeLogos, ...safeLogos, ...safeLogos];

  return (
    <section className="py-16 overflow-hidden relative">
      {/* Subtle radial glow for depth - barely visible */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 60%, hsl(var(--primary) / 0.03), transparent)"
        }}
      />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-foreground/40 font-light mb-12">
          Trusted by Leading Sales Teams
        </p>
      </div>
      
      <div 
        className="relative w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient fade edges - wider for smoother transition */}
        <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-40 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-40 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling container */}
        <div 
          ref={scrollRef}
          className="flex items-center gap-16 sm:gap-24 will-change-transform"
          style={{ width: "fit-content" }}
        >
          {allLogos.map((logo, index) => (
            <div
              key={`${logo.src}-${index}`}
              className="shrink-0 group"
            >
              <div 
                className="h-10 sm:h-12 w-auto relative transition-all duration-300 ease-out
                           opacity-75 grayscale-[40%] 
                           group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105"
                style={{ minWidth: "80px", maxWidth: "140px" }}
              >
                <Image
                  src={logo.src}
                  alt={logo.name || "Customer logo"}
                  width={120}
                  height={48}
                  className="object-contain h-full w-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
