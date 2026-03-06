"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

type LogoItem = {
  name: string;
  alt?: string;
  // Theme-aware sources (preferred)
  lightSrc?: string; // Used on dark backgrounds (light-colored logo)
  darkSrc?: string;  // Used on light backgrounds (dark-colored logo)
  // Fallback for single-source logos
  src?: string;
};

const logos: LogoItem[] = [
  {
    name: "Apify",
    alt: "Apify logo",
    lightSrc:
      "https://assets.macaly-user-data.dev/if738gvrrpzsz730065jex23/i071e9v9cint3xgl1ff6u3vw/1Hc_aT-WoR3dhgttvRlQS.png",
    darkSrc:
      "https://assets.macaly-user-data.dev/if738gvrrpzsz730065jex23/i071e9v9cint3xgl1ff6u3vw/f_RRDAJ4IiMhjQjGKwxzr.png",
  },
  {
    name: "Advanto",
    alt: "Advanto logo",
    lightSrc:
      "https://assets.macaly-user-data.dev/if738gvrrpzsz730065jex23/i071e9v9cint3xgl1ff6u3vw/aWS6xVqscmGKQ0Y59tchI.svg",
    darkSrc:
      "https://assets.macaly-user-data.dev/if738gvrrpzsz730065jex23/i071e9v9cint3xgl1ff6u3vw/aWS6xVqscmGKQ0Y59tchI.svg",
  },
  {
    name: "TalentPilot",
    alt: "TalentPilot logo",
    src: "https://assets.macaly-user-data.dev/if738gvrrpzsz730065jex23/i071e9v9cint3xgl1ff6u3vw/0cFVSYdBjFuSEpb0L8V2t.png",
  },
  {
    name: "Customer 1",
    alt: "Customer logo",
    lightSrc:
      "https://assets.macaly-user-data.dev/if738gvrrpzsz730065jex23/i071e9v9cint3xgl1ff6u3vw/1Hc_aT-WoR3dhgttvRlQS.png",
    darkSrc:
      "https://assets.macaly-user-data.dev/if738gvrrpzsz730065jex23/i071e9v9cint3xgl1ff6u3vw/f_RRDAJ4IiMhjQjGKwxzr.png",
  },
  {
    name: "Customer 2",
    alt: "Customer logo",
    lightSrc:
      "https://assets.macaly-user-data.dev/if738gvrrpzsz730065jex23/i071e9v9cint3xgl1ff6u3vw/aWS6xVqscmGKQ0Y59tchI.svg",
    darkSrc:
      "https://assets.macaly-user-data.dev/if738gvrrpzsz730065jex23/i071e9v9cint3xgl1ff6u3vw/aWS6xVqscmGKQ0Y59tchI.svg",
  },
  {
    name: "Customer 3",
    alt: "Customer logo",
    src: "https://assets.macaly-user-data.dev/if738gvrrpzsz730065jex23/i071e9v9cint3xgl1ff6u3vw/0cFVSYdBjFuSEpb0L8V2t.png",
  },
  {
    name: "Customer 4",
    alt: "Customer logo",
    lightSrc:
      "https://assets.macaly-user-data.dev/if738gvrrpzsz730065jex23/i071e9v9cint3xgl1ff6u3vw/1Hc_aT-WoR3dhgttvRlQS.png",
    darkSrc:
      "https://assets.macaly-user-data.dev/if738gvrrpzsz730065jex23/i071e9v9cint3xgl1ff6u3vw/f_RRDAJ4IiMhjQjGKwxzr.png",
  },
  {
    name: "Customer 5",
    alt: "Customer logo",
    lightSrc:
      "https://assets.macaly-user-data.dev/if738gvrrpzsz730065jex23/i071e9v9cint3xgl1ff6u3vw/aWS6xVqscmGKQ0Y59tchI.svg",
    darkSrc:
      "https://assets.macaly-user-data.dev/if738gvrrpzsz730065jex23/i071e9v9cint3xgl1ff6u3vw/aWS6xVqscmGKQ0Y59tchI.svg",
  },
  {
    name: "Customer 6",
    alt: "Customer logo",
    src: "https://assets.macaly-user-data.dev/if738gvrrpzsz730065jex23/i071e9v9cint3xgl1ff6u3vw/0cFVSYdBjFuSEpb0L8V2t.png",
  },
];

/**
 * Gets the appropriate logo src based on current theme
 */
function getLogoSrc(logo: LogoItem, isDark: boolean): string | null {
  if (isDark) {
    return logo.lightSrc || logo.src || logo.darkSrc || null;
  } else {
    return logo.darkSrc || logo.src || logo.lightSrc || null;
  }
}

export default function LogoCredibilitySection() {
  const [isPaused, setIsPaused] = useState(false);
  const [mounted, setMounted] = useState(false);
  // Hydration-safe theme state for logos (prevents SSR/client src mismatches)
  const [logoTheme, setLogoTheme] = useState<"light" | "dark">("light");
  const scrollRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // next-themes resolves the theme after hydration; keep a stable default for SSR.
  useEffect(() => {
    if (!mounted) return;
    if (resolvedTheme !== "light" && resolvedTheme !== "dark") return;

    console.log("[LogoCredibilitySection] Theme resolved:", resolvedTheme);
    setLogoTheme(resolvedTheme);
  }, [mounted, resolvedTheme]);

  const isDark = logoTheme === "dark";

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.3;

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed;
        
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

  const processedLogos = useMemo(() => {
    return logos
      .map((logo) => {
        const src = getLogoSrc(logo, isDark);
        if (!src || src.trim().length === 0) {
          console.warn("[LogoCredibilitySection] Skipping logo with no valid src:", logo.name);
          return null;
        }
        return {
          ...logo,
          resolvedSrc: src,
        };
      })
      .filter((l): l is NonNullable<typeof l> => l !== null);
  }, [isDark]);

  // Triple logos for seamless infinite scroll
  const allLogos = useMemo(() => {
    return [...processedLogos, ...processedLogos, ...processedLogos];
  }, [processedLogos]);

  return (
    <section className="py-20 sm:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-foreground/40 font-light mb-14">
          Trusted by Leading Sales Teams
        </p>
      </div>
      
      <div 
        className="relative w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Subtle gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling container */}
        <div 
          ref={scrollRef}
          className="flex items-center gap-14 sm:gap-20 will-change-transform"
          style={{ width: "fit-content" }}
        >
          {allLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="shrink-0 group"
            >
              <div 
                className="h-9 sm:h-11 w-auto relative transition-opacity duration-300 ease-out
                           opacity-[0.55] grayscale
                           group-hover:opacity-80 group-hover:grayscale-[30%]"
                style={{ minWidth: "72px", maxWidth: "120px" }}
              >
                <div className={`transition-opacity duration-150 ${mounted ? "opacity-100" : "opacity-0"}`}>
                  <Image
                    src={logo.resolvedSrc}
                    alt={logo.alt || logo.name || "Customer logo"}
                    width={100}
                    height={44}
                    className="object-contain h-full w-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
