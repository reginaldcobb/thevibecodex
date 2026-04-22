/**
 * THE VIBE CODEX — Privacy Policy Page
 * Design: Swiss Editorial Tech Magazine (dark slate, electric violet accents)
 */

import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/8 bg-background/90 backdrop-blur-md">
        <div className="container">
          <div className="flex items-center h-14 gap-4">
            <Link href="/">
              <span className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft size={15} />
                Back to The Vibe Codex
              </span>
            </Link>
            <span className="text-white/20">|</span>
            <span className="text-sm font-semibold" style={{ fontFamily: "Syne, sans-serif" }}>
              Privacy Policy
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container py-16 max-w-3xl mx-auto">
        <div className="mb-10">
          <p className="text-xs font-mono text-primary/70 uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl font-extrabold text-foreground mb-3" style={{ fontFamily: "Syne, sans-serif" }}>
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm">Last updated: April 2026</p>
          <div className="mt-4 h-px bg-gradient-to-r from-primary/40 via-primary/10 to-transparent" />
        </div>

        <div className="prose-custom space-y-8 text-sm text-muted-foreground leading-relaxed">

          <section>
            <h2>Overview</h2>
            <p>
              The Vibe Codex ("we," "us," or "our") operates thevibecodex.com (the "Site"). This Privacy Policy
              explains how we collect, use, and protect information when you visit our Site. We are committed to
              being transparent about our data practices.
            </p>
            <p>
              If you have any questions about this policy, please contact us at{" "}
              <a href="mailto:support@thevibecodex.com">support@thevibecodex.com</a>.
            </p>
          </section>

          <section>
            <h2>Information We Collect</h2>
            <p>
              <strong className="text-foreground">Automatically Collected Data:</strong> When you visit the Site,
              we automatically collect certain information through analytics tools, including your IP address
              (anonymized), browser type, operating system, referring URLs, pages visited, and time spent on pages.
              This data is collected in aggregate and is not linked to any personally identifiable information.
            </p>
            <p>
              <strong className="text-foreground">Cookies:</strong> The Site uses cookies and similar tracking
              technologies for analytics and advertising purposes. You can control cookie settings through your
              browser preferences.
            </p>
            <p>
              <strong className="text-foreground">Information You Provide:</strong> If you contact us via email,
              we collect the information you choose to provide, such as your name and email address, solely to
              respond to your inquiry.
            </p>
          </section>

          <section>
            <h2>Google AdSense and Advertising</h2>
            <p>
              The Site uses Google AdSense to display advertisements. Google AdSense may use cookies and web
              beacons to collect data about your visits to this and other websites in order to provide relevant
              advertisements. This data collection is governed by{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Google's Privacy Policy
              </a>.
            </p>
            <p>
              You can opt out of personalized advertising by visiting{" "}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
                Google's Ads Settings
              </a>{" "}
              or by visiting{" "}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
                aboutads.info
              </a>.
            </p>
          </section>

          <section>
            <h2>Analytics</h2>
            <p>
              We use privacy-focused analytics to understand how visitors interact with the Site. Analytics data
              is collected in aggregate and anonymized form. We do not sell or share individual-level analytics
              data with third parties.
            </p>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Operate, maintain, and improve the Site</li>
              <li>Understand how visitors use the Site to improve content and user experience</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Display relevant advertisements through Google AdSense</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2>Data Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share anonymized,
              aggregate data with analytics providers and advertising partners (such as Google) as described in
              this policy. We may disclose information if required by law or to protect the rights and safety of
              our users.
            </p>
          </section>

          <section>
            <h2>Data Retention</h2>
            <p>
              We retain analytics data in aggregate form for up to 24 months. Email correspondence is retained
              for as long as necessary to resolve your inquiry and for a reasonable period thereafter.
            </p>
          </section>

          <section>
            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have the right to access, correct, or delete personal
              information we hold about you. To exercise these rights, please contact us at{" "}
              <a href="mailto:support@thevibecodex.com">support@thevibecodex.com</a>. We will respond to
              all requests within 30 days.
            </p>
          </section>

          <section>
            <h2>Children's Privacy</h2>
            <p>
              The Site is not directed to children under the age of 13. We do not knowingly collect personal
              information from children under 13. If you believe we have inadvertently collected such information,
              please contact us at{" "}
              <a href="mailto:support@thevibecodex.com">support@thevibecodex.com</a>.
            </p>
          </section>

          <section>
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify users of any material changes
              by updating the "Last updated" date at the top of this page. Your continued use of the Site after
              any changes constitutes your acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at:{" "}
              <a href="mailto:support@thevibecodex.com">support@thevibecodex.com</a>
            </p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/8 mt-8">
        <div className="container py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <Link href="/">
              <span className="hover:text-foreground transition-colors">← Back to The Vibe Codex</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/privacy">
                <span className="hover:text-foreground transition-colors text-primary/80">Privacy Policy</span>
              </Link>
              <Link href="/terms">
                <span className="hover:text-foreground transition-colors">Terms of Service</span>
              </Link>
              <a href="mailto:support@thevibecodex.com" className="hover:text-foreground transition-colors">
                support@thevibecodex.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
