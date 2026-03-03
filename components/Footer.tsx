import Link from "next/link";

export default function Footer() {
  const lightLogo = "https://assets.macaly-user-data.dev/if738gvrrpzsz730065jex23/nrpwbzp6w1i007zm1dfep5r3/sCHT7Y6QmTCno_ZYI20nV.svg";
  const darkLogo = "https://assets.macaly-user-data.dev/if738gvrrpzsz730065jex23/nrpwbzp6w1i007zm1dfep5r3/CUdvPod703ncRqzlpg9vu.svg";

  const linkStyles = "text-sm text-foreground/60 hover:text-foreground transition-colors";

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <img 
                src={lightLogo}
                alt="Cue AI" 
                className="h-6 w-auto dark:hidden"
              />
              <img 
                src={darkLogo}
                alt="Cue AI" 
                className="h-6 w-auto hidden dark:block"
              />
            </div>
            <p className="text-sm text-foreground/60">
              AI-powered sales intelligence for every conversation.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#features" className={linkStyles}>
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className={linkStyles}>
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className={linkStyles}>
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://docs.rightoncue.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={linkStyles}
                >
                  Documentation
                </a>
              </li>
              <li>
                <a 
                  href="https://support.rightoncue.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={linkStyles}
                >
                  Support
                </a>
              </li>
              <li>
                <a 
                  href="https://status.rightoncue.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={linkStyles}
                >
                  Status
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className={linkStyles}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className={linkStyles}>
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className={linkStyles}>
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-sm text-foreground/60">
              © {new Date().getFullYear()} Cue AI Technologies, Inc. All rights reserved.
            </span>
            <a 
              href="mailto:support@rightoncue.ai" 
              className={linkStyles}
            >
              contact@rightoncue.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
