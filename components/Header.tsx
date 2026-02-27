"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();

  // Logo URLs
  const lightLogo = "https://assets.macaly-user-data.dev/if738gvrrpzsz730065jex23/nrpwbzp6w1i007zm1dfep5r3/sCHT7Y6QmTCno_ZYI20nV.svg";
  const darkLogo = "https://assets.macaly-user-data.dev/if738gvrrpzsz730065jex23/nrpwbzp6w1i007zm1dfep5r3/CUdvPod703ncRqzlpg9vu.svg";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* Light mode logo */}
            <img 
              src={lightLogo}
              alt="Cue AI" 
              className="h-8 w-auto dark:hidden"
            />
            {/* Dark mode logo */}
            <img 
              src={darkLogo}
              alt="Cue AI" 
              className="h-8 w-auto hidden dark:block"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
              How it Works
            </Link>
            <Link href="#pricing" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
              Pricing
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link href="https://app.rightoncue.ai" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
              Sign in
            </Link>
            <Link
              href="https://app.rightoncue.ai"
              className="bg-cue-lime text-cue-slate px-4 py-2 rounded text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Try Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link href="#features" className="text-sm text-foreground/80 hover:text-foreground">
                Features
              </Link>
              <Link href="#how-it-works" className="text-sm text-foreground/80 hover:text-foreground">
                How it Works
              </Link>
              <Link href="#pricing" className="text-sm text-foreground/80 hover:text-foreground">
                Pricing
              </Link>
              <Link href="https://app.rightoncue.ai" className="text-sm text-foreground/80 hover:text-foreground">
                Sign in
              </Link>
              <Link
                href="https://app.rightoncue.ai"
                className="bg-cue-lime text-cue-slate px-4 py-2 rounded text-sm font-medium text-center"
              >
                Try Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
