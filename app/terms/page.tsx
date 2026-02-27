import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Cue AI",
  description: "Terms of Service for Cue AI - AI-powered sales intelligence platform. Read our terms and conditions for using our services.",
  alternates: {
    canonical: "/terms",
  },
};

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "eligibility", title: "Eligibility & Accounts" },
  { id: "service", title: "Description of Service" },
  { id: "billing", title: "Subscription & Billing" },
  { id: "acceptable-use", title: "Acceptable Use" },
  { id: "customer-content", title: "Data & Customer Content" },
  { id: "privacy", title: "Privacy" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "termination", title: "Termination" },
  { id: "governing-law", title: "Governing Law" },
  { id: "contact", title: "Contact Information" },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="py-16 sm:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-foreground/60">
              Last updated: February 26, 2026
            </p>
          </div>

          {/* Table of Contents */}
          <nav className="mb-12 p-6 bg-cue-cloud dark:bg-muted rounded-lg border border-border">
            <h2 className="text-sm font-semibold text-foreground/80 uppercase tracking-wide mb-4">
              Table of Contents
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm text-foreground/70 hover:text-cue-lime transition-colors"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            
            {/* Introduction */}
            <section id="introduction" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Welcome to Cue AI. These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Cue AI platform, 
                website, and services (collectively, the &quot;Service&quot;) provided by Cue AI Technologies, Inc. (&quot;Cue AI,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Cue AI is an AI-powered sales enablement platform that provides real-time intelligence before, during, 
                and after sales conversations. Our Service helps sales professionals prepare for meetings, receive 
                live coaching, and automate post-call workflows.
              </p>
            </section>

            {/* Acceptance of Terms */}
            <section id="acceptance" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-foreground mb-4">2. Acceptance of Terms</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                By accessing or using the Service, you agree to be bound by these Terms. If you are using the Service 
                on behalf of an organization, you represent and warrant that you have the authority to bind that 
                organization to these Terms.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                If you do not agree to these Terms, you may not access or use the Service. We reserve the right to 
                update these Terms at any time. Continued use of the Service after changes constitutes acceptance 
                of the revised Terms.
              </p>
            </section>

            {/* Eligibility & Accounts */}
            <section id="eligibility" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Eligibility & Accounts</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                To use the Service, you must be at least 18 years old and capable of forming a binding contract. 
                By creating an account, you agree to:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain the security of your account credentials</li>
                <li>Promptly update your account information if it changes</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized access or security breach</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                We reserve the right to suspend or terminate accounts that violate these Terms or engage in 
                fraudulent or harmful activity.
              </p>
            </section>

            {/* Description of Service */}
            <section id="service" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Description of Service</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Cue AI provides AI-assisted sales enablement tools, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Pre-call research and prospect intelligence</li>
                <li>Real-time meeting analysis and coaching suggestions</li>
                <li>Post-call summaries and CRM integration</li>
                <li>Sales playbook and methodology support</li>
                <li>Performance analytics and insights</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mb-4">
                <strong>AI Limitations:</strong> Our AI-powered features are designed to assist and augment human 
                decision-making, not replace it. We do not guarantee specific sales outcomes, revenue increases, 
                or conversion improvements. The effectiveness of the Service depends on many factors outside our control.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                <strong>Human Responsibility:</strong> You acknowledge that all final decisions regarding sales 
                conversations, customer interactions, and business outcomes remain your responsibility. AI suggestions 
                and insights should be evaluated and applied at your discretion.
              </p>
            </section>

            {/* Subscription & Billing */}
            <section id="billing" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Subscription & Billing</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                <strong>Subscription Plans:</strong> The Service is offered on a subscription basis with monthly 
                and annual billing options. Plan details, pricing, and included features are described on our 
                pricing page and may change from time to time.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                <strong>Automatic Renewal:</strong> Subscriptions automatically renew at the end of each billing 
                period unless cancelled. Monthly subscriptions renew monthly; annual subscriptions renew annually. 
                You authorize us to charge your payment method for renewal fees.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                <strong>Cancellation:</strong> You may cancel your subscription at any time through your account 
                settings. Cancellation takes effect at the end of the current billing period. You retain access 
                to paid features until the billing period ends.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                <strong>Refunds:</strong> Refund requests are evaluated on a case-by-case basis. Generally, 
                subscription fees are non-refundable except where required by applicable law. Contact 
                support@rightoncue.ai for refund inquiries.
              </p>
            </section>

            {/* Acceptable Use */}
            <section id="acceptable-use" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Acceptable Use</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                You agree to use the Service only for lawful purposes and in accordance with these Terms. 
                You may not:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Use the Service for any illegal, fraudulent, or harmful purpose</li>
                <li>Violate any applicable laws, regulations, or third-party rights</li>
                <li>Attempt to reverse engineer, decompile, or disassemble any part of the Service</li>
                <li>Circumvent security measures or access restrictions</li>
                <li>Transmit malware, viruses, or other harmful code</li>
                <li>Interfere with or disrupt the Service or its infrastructure</li>
                <li>Resell, sublicense, or redistribute the Service without authorization</li>
                <li>Use AI outputs to generate misleading, deceptive, or harmful content</li>
                <li>Misrepresent AI-generated content as entirely human-created</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                We reserve the right to investigate and take appropriate action against violations, including 
                account suspension or termination.
              </p>
            </section>

            {/* Data & Customer Content */}
            <section id="customer-content" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-foreground mb-4">7. Data & Customer Content</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                <strong>Ownership:</strong> You retain all rights, title, and interest in the data, content, 
                and materials you upload, submit, or transmit through the Service (&quot;Customer Content&quot;). 
                Cue AI does not claim ownership of your Customer Content.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                <strong>License Grant:</strong> By using the Service, you grant Cue AI a limited, non-exclusive, 
                worldwide license to process, analyze, and store your Customer Content solely to provide and 
                improve the Service. This license terminates when you delete your Customer Content or close 
                your account.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                <strong>AI Processing:</strong> You acknowledge that Customer Content may be processed by 
                AI systems to generate insights, suggestions, and analytics. We use appropriate safeguards 
                to protect your data during AI processing. Aggregated, anonymized insights may be used to 
                improve our AI models without identifying you or your organization.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                <strong>Your Responsibilities:</strong> You are responsible for ensuring you have the right 
                to share Customer Content with the Service and that your use complies with applicable data 
                protection laws and third-party agreements.
              </p>
            </section>

            {/* Privacy */}
            <section id="privacy" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-foreground mb-4">8. Privacy</h2>
              <p className="text-foreground/80 leading-relaxed">
                Your privacy is important to us. Our collection, use, and protection of personal information 
                is governed by our{" "}
                <Link href="/privacy" className="text-cue-lime hover:underline">
                  Privacy Policy
                </Link>
                , which is incorporated into these Terms by reference. By using the Service, you consent to 
                the data practices described in our Privacy Policy.
              </p>
            </section>

            {/* Intellectual Property */}
            <section id="intellectual-property" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-foreground mb-4">9. Intellectual Property</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                The Service, including its design, features, content, AI models, and underlying technology, 
                is owned by Cue AI and protected by intellectual property laws. Except for the limited rights 
                expressly granted in these Terms, we reserve all rights in the Service.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                &quot;Cue AI,&quot; our logo, and related marks are trademarks of Cue AI Technologies, Inc. You may 
                not use our trademarks without prior written permission.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section id="liability" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-foreground mb-4">10. Limitation of Liability</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, CUE AI AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND 
                AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE 
                DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR 
                USE OF THE SERVICE.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM THESE TERMS OR YOUR USE OF THE SERVICE SHALL 
                NOT EXCEED THE AMOUNT YOU PAID TO CUE AI IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                SOME JURISDICTIONS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR LIABILITY, SO THESE 
                LIMITATIONS MAY NOT APPLY TO YOU.
              </p>
            </section>

            {/* Indemnification */}
            <section id="indemnification" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-foreground mb-4">11. Indemnification</h2>
              <p className="text-foreground/80 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Cue AI and its officers, directors, employees, 
                and agents from any claims, damages, losses, liabilities, and expenses (including reasonable 
                attorneys&apos; fees) arising from: (a) your use of the Service; (b) your violation of these Terms; 
                (c) your violation of any third-party rights; or (d) your Customer Content.
              </p>
            </section>

            {/* Termination */}
            <section id="termination" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-foreground mb-4">12. Termination</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                You may terminate your account at any time by following the cancellation process in your 
                account settings. We may suspend or terminate your access to the Service at any time, with 
                or without cause, with or without notice.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Upon termination, your right to use the Service ceases immediately. Sections of these Terms 
                that by their nature should survive termination shall survive, including ownership provisions, 
                warranty disclaimers, indemnification, and limitations of liability.
              </p>
            </section>

            {/* Governing Law */}
            <section id="governing-law" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-foreground mb-4">13. Governing Law</h2>
              <p className="text-foreground/80 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of 
                Delaware, United States, without regard to its conflict of law provisions. Any disputes 
                arising from these Terms or the Service shall be resolved in the state or federal courts 
                located in Delaware.
              </p>
            </section>

            {/* Contact Information */}
            <section id="contact" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-foreground mb-4">14. Contact Information</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                If you have questions about these Terms or the Service, please contact us:
              </p>
              <div className="bg-cue-cloud dark:bg-muted rounded-lg p-6 border border-border">
                <p className="text-foreground font-medium mb-2">Cue AI Technologies, Inc.</p>
                <p className="text-foreground/80 mb-1">
                  Email:{" "}
                  <a href="mailto:contact@rightoncue.ai" className="text-cue-lime hover:underline">
                    contact@rightoncue.ai
                  </a>
                </p>
                <p className="text-foreground/80">
                  For legal inquiries:{" "}
                  <a href="mailto:legal@rightoncue.ai" className="text-cue-lime hover:underline">
                    legal@rightoncue.ai
                  </a>
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
