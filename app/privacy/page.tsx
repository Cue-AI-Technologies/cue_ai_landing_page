import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Cue AI",
  description: "Privacy Policy for Cue AI - Learn how we collect, use, and protect your data on our AI-powered sales intelligence platform.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "information-collected", title: "Information We Collect" },
  { id: "how-we-use", title: "How We Use Information" },
  { id: "ai-processing", title: "AI Processing Disclosure" },
  { id: "data-sharing", title: "Data Sharing" },
  { id: "data-retention", title: "Data Retention" },
  { id: "security", title: "Security Measures" },
  { id: "gdpr-rights", title: "Your Privacy Rights (GDPR)" },
  { id: "international", title: "International Transfers" },
  { id: "cookies", title: "Cookies & Tracking" },
  { id: "children", title: "Children's Privacy" },
  { id: "changes", title: "Changes to This Policy" },
  { id: "contact", title: "Contact Us" },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="py-16 sm:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Privacy Policy
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
                Cue AI Technologies, Inc. (&quot;Cue AI,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your 
                privacy and being transparent about how we handle your data. This Privacy Policy explains 
                how we collect, use, disclose, and safeguard your information when you use our AI-powered 
                sales intelligence platform (the &quot;Service&quot;).
              </p>
              <p className="text-foreground/80 leading-relaxed">
                By using our Service, you agree to the collection and use of information in accordance 
                with this policy. If you do not agree with our practices, please do not use our Service.
              </p>
            </section>

            {/* Information We Collect */}
            <section id="information-collected" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              
              <h3 className="text-lg font-medium text-foreground mb-3">Account Information</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                When you create an account, we collect:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-6">
                <li>Name and email address</li>
                <li>Company name and job title</li>
                <li>Password (stored in encrypted form)</li>
                <li>Profile preferences and settings</li>
                <li>Billing information (processed by our payment provider)</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mb-3">Usage Data</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We automatically collect information about how you interact with our Service:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-6">
                <li>Pages viewed and features used</li>
                <li>Time spent on the platform</li>
                <li>Device type, browser, and operating system</li>
                <li>IP address and approximate location</li>
                <li>Referring URLs and navigation paths</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mb-3">Sales Call Metadata</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                To provide our core service, we process:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-6">
                <li>Meeting schedules and calendar events</li>
                <li>Participant information (names, email addresses)</li>
                <li>Call duration and timestamps</li>
                <li>Meeting transcripts and audio recordings (when authorized)</li>
                <li>AI-generated summaries and insights</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mb-3">CRM Integration Data</h3>
              <p className="text-foreground/80 leading-relaxed">
                When you connect third-party CRM systems, we access data necessary to provide our 
                service, including contact records, opportunity data, and activity history. We only 
                access data you authorize and use it solely to deliver our Service.
              </p>
            </section>

            {/* How We Use Information */}
            <section id="how-we-use" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-foreground mb-4">3. How We Use Information</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              
              <h3 className="text-lg font-medium text-foreground mb-3">Service Delivery</h3>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-6">
                <li>Provide pre-call intelligence and prospect research</li>
                <li>Generate real-time meeting insights and coaching suggestions</li>
                <li>Create post-call summaries and action items</li>
                <li>Sync data with your connected CRM systems</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mb-3">Service Improvement</h3>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-6">
                <li>Analyze usage patterns to improve features</li>
                <li>Train and refine our AI models using aggregated, anonymized data</li>
                <li>Develop new features and capabilities</li>
                <li>Fix bugs and improve performance</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mb-3">Customer Support</h3>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-6">
                <li>Respond to your inquiries and support requests</li>
                <li>Provide technical assistance and troubleshooting</li>
                <li>Send service-related announcements and updates</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mb-3">Security & Compliance</h3>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                <li>Detect and prevent fraud, abuse, and security threats</li>
                <li>Monitor for violations of our Terms of Service</li>
                <li>Comply with legal obligations and respond to lawful requests</li>
              </ul>
            </section>

            {/* AI Processing Disclosure */}
            <section id="ai-processing" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-foreground mb-4">4. AI Processing Disclosure</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Cue AI uses artificial intelligence to analyze your data and provide insights. 
                We believe in transparency about how AI processes your information:
              </p>
              
              <h3 className="text-lg font-medium text-foreground mb-3">Automated Processing</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Our AI systems automatically analyze meeting content, sales conversations, and 
                related data to generate:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-6">
                <li>Pre-call briefings and prospect research summaries</li>
                <li>Real-time coaching suggestions during calls</li>
                <li>Post-meeting summaries, action items, and CRM updates</li>
                <li>Performance analytics and trend reports</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mb-3">No Automated Legal Decisions</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Our AI does not make automated decisions that have legal effects or similarly 
                significant impacts on you. AI-generated insights are advisory and intended to 
                assist human decision-making, not replace it.
              </p>

              <h3 className="text-lg font-medium text-foreground mb-3">Human Oversight</h3>
              <p className="text-foreground/80 leading-relaxed">
                You maintain control over how you use AI-generated content. All sales decisions, 
                customer communications, and business actions remain your responsibility. Our 
                team monitors AI systems for accuracy and bias, and we continuously work to 
                improve AI outputs.
              </p>
            </section>

            {/* Data Sharing */}
            <section id="data-sharing" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Data Sharing</h2>
              
              <h3 className="text-lg font-medium text-foreground mb-3">We Do Not Sell Your Data</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                We do not sell, rent, or trade your personal information to third parties for 
                their marketing purposes.
              </p>

              <h3 className="text-lg font-medium text-foreground mb-3">Limited Sharing</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-6">
                <li>
                  <strong>Service Providers:</strong> Trusted vendors who help us operate our 
                  Service (cloud hosting, payment processing, analytics) under strict 
                  confidentiality agreements
                </li>
                <li>
                  <strong>Integrations:</strong> Third-party services you choose to connect 
                  (CRM systems, calendar apps) receive only the data necessary for the integration
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law, legal process, or 
                  to protect our rights and safety
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger, acquisition, 
                  or sale of assets (you will be notified of any such change)
                </li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mb-3">Infrastructure Providers</h3>
              <p className="text-foreground/80 leading-relaxed">
                Our Service is hosted on secure cloud infrastructure. Our infrastructure providers 
                are contractually obligated to maintain the confidentiality and security of your data.
              </p>
            </section>

            {/* Data Retention */}
            <section id="data-retention" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Data Retention</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We retain your information for as long as necessary to provide our Service and 
                fulfill the purposes described in this policy:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>
                  <strong>Account Data:</strong> Retained while your account is active and for 
                  a reasonable period afterward for legal and business purposes
                </li>
                <li>
                  <strong>Call Data & Transcripts:</strong> Retained according to your account 
                  settings; you can delete this data at any time
                </li>
                <li>
                  <strong>Usage Logs:</strong> Generally retained for 12-24 months for analytics 
                  and security purposes
                </li>
                <li>
                  <strong>Billing Records:</strong> Retained as required by tax and financial 
                  regulations (typically 7 years)
                </li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                When you delete your account, we will delete or anonymize your personal information 
                within 90 days, except where retention is required by law.
              </p>
            </section>

            {/* Security Measures */}
            <section id="security" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-foreground mb-4">7. Security Measures</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We implement comprehensive security measures to protect your data:
              </p>
              
              <h3 className="text-lg font-medium text-foreground mb-3">Encryption</h3>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-6">
                <li>All data transmitted between your browser and our servers is encrypted using TLS 1.3</li>
                <li>Data at rest is encrypted using AES-256 encryption</li>
                <li>Passwords are hashed using industry-standard algorithms</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mb-3">Access Controls</h3>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-6">
                <li>Role-based access controls limit employee access to customer data</li>
                <li>Multi-factor authentication required for administrative access</li>
                <li>Regular access reviews and audits</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mb-3">Compliance & Certifications</h3>
              <p className="text-foreground/80 leading-relaxed">
                We maintain SOC 2 Type II compliance and undergo regular third-party security 
                assessments. Our infrastructure providers maintain their own certifications 
                including SOC 2, ISO 27001, and GDPR compliance.
              </p>
            </section>

            {/* GDPR Rights */}
            <section id="gdpr-rights" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-foreground mb-4">8. Your Privacy Rights (GDPR)</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                If you are located in the European Economic Area (EEA), United Kingdom, or 
                similar jurisdictions, you have the following rights:
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-cue-cloud dark:bg-muted rounded-lg border border-border">
                  <h3 className="font-medium text-foreground mb-2">Right to Access</h3>
                  <p className="text-foreground/80 text-sm">
                    Request a copy of the personal data we hold about you.
                  </p>
                </div>
                
                <div className="p-4 bg-cue-cloud dark:bg-muted rounded-lg border border-border">
                  <h3 className="font-medium text-foreground mb-2">Right to Rectification</h3>
                  <p className="text-foreground/80 text-sm">
                    Request correction of inaccurate or incomplete personal data.
                  </p>
                </div>
                
                <div className="p-4 bg-cue-cloud dark:bg-muted rounded-lg border border-border">
                  <h3 className="font-medium text-foreground mb-2">Right to Erasure (&quot;Right to be Forgotten&quot;)</h3>
                  <p className="text-foreground/80 text-sm">
                    Request deletion of your personal data, subject to legal retention requirements.
                  </p>
                </div>
                
                <div className="p-4 bg-cue-cloud dark:bg-muted rounded-lg border border-border">
                  <h3 className="font-medium text-foreground mb-2">Right to Data Portability</h3>
                  <p className="text-foreground/80 text-sm">
                    Receive your data in a structured, commonly used format and transfer it to another service.
                  </p>
                </div>
                
                <div className="p-4 bg-cue-cloud dark:bg-muted rounded-lg border border-border">
                  <h3 className="font-medium text-foreground mb-2">Right to Object</h3>
                  <p className="text-foreground/80 text-sm">
                    Object to processing of your data for certain purposes, including direct marketing.
                  </p>
                </div>
                
                <div className="p-4 bg-cue-cloud dark:bg-muted rounded-lg border border-border">
                  <h3 className="font-medium text-foreground mb-2">Right to Restrict Processing</h3>
                  <p className="text-foreground/80 text-sm">
                    Request limitation of how we process your data in certain circumstances.
                  </p>
                </div>
              </div>
              
              <p className="text-foreground/80 leading-relaxed mt-6">
                To exercise these rights, contact us at{" "}
                <a href="mailto:privacy@rightoncue.ai" className="text-cue-lime hover:underline">
                  privacy@rightoncue.ai
                </a>
                . We will respond within 30 days. You also have the right to lodge a complaint 
                with your local data protection authority.
              </p>
            </section>

            {/* International Transfers */}
            <section id="international" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-foreground mb-4">9. International Data Transfers</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Your information may be transferred to and processed in countries other than your 
                country of residence. These countries may have different data protection laws.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                When we transfer data internationally, we implement appropriate safeguards such 
                as Standard Contractual Clauses approved by the European Commission, or rely on 
                adequacy decisions where applicable. We ensure that any transfers comply with 
                applicable data protection laws and that your data receives an adequate level 
                of protection.
              </p>
            </section>

            {/* Cookies & Tracking */}
            <section id="cookies" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-foreground mb-4">10. Cookies & Tracking</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your experience:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>
                  <strong>Essential Cookies:</strong> Required for the Service to function 
                  (authentication, security, preferences)
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how users interact 
                  with our Service to improve it
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements 
                  (can be disabled in your browser settings)
                </li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                You can control cookies through your browser settings. Note that disabling certain 
                cookies may affect your ability to use some features of our Service.
              </p>
            </section>

            {/* Children's Privacy */}
            <section id="children" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-foreground mb-4">11. Children&apos;s Privacy</h2>
              <p className="text-foreground/80 leading-relaxed">
                Our Service is not intended for individuals under the age of 18. We do not knowingly 
                collect personal information from children. If you believe we have collected 
                information from a child, please contact us at{" "}
                <a href="mailto:privacy@rightoncue.ai" className="text-cue-lime hover:underline">
                  privacy@rightoncue.ai
                </a>
                , and we will promptly delete such information.
              </p>
            </section>

            {/* Changes to This Policy */}
            <section id="changes" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-foreground mb-4">12. Changes to This Policy</h2>
              <p className="text-foreground/80 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our 
                practices or applicable laws. We will notify you of material changes by posting 
                the updated policy on our website and updating the &quot;Last updated&quot; date. For 
                significant changes, we may also notify you by email. Your continued use of 
                the Service after changes take effect constitutes acceptance of the revised policy.
              </p>
            </section>

            {/* Contact Us */}
            <section id="contact" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-foreground mb-4">13. Contact Us</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or 
                our data practices, please contact us:
              </p>
              <div className="bg-cue-cloud dark:bg-muted rounded-lg p-6 border border-border">
                <p className="text-foreground font-medium mb-2">Cue AI Technologies, Inc.</p>
                <p className="text-foreground/80 mb-1">
                  Privacy inquiries:{" "}
                  <a href="mailto:privacy@rightoncue.ai" className="text-cue-lime hover:underline">
                    privacy@rightoncue.ai
                  </a>
                </p>
                <p className="text-foreground/80 mb-1">
                  General inquiries:{" "}
                  <a href="mailto:contact@rightoncue.ai" className="text-cue-lime hover:underline">
                    contact@rightoncue.ai
                  </a>
                </p>
                <p className="text-foreground/80 mt-4 text-sm">
                  We aim to respond to all privacy-related inquiries within 30 days.
                </p>
              </div>
            </section>

            {/* Related Links */}
            <section className="pt-8 border-t border-border">
              <p className="text-foreground/60 text-sm">
                See also:{" "}
                <Link href="/terms" className="text-cue-lime hover:underline">
                  Terms of Service
                </Link>
              </p>
            </section>

          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
