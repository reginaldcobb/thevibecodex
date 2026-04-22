/**
 * THE VIBE CODEX — Terms of Service Page
 * Design: Swiss Editorial Tech Magazine (dark slate, electric violet accents)
 */

import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
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
              Terms of Service
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container py-16 max-w-3xl mx-auto">
        <div className="mb-10">
          <p className="text-xs font-mono text-primary/70 uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl font-extrabold text-foreground mb-3" style={{ fontFamily: "Syne, sans-serif" }}>
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-sm">Last updated: April 2026</p>
          <div className="mt-4 h-px bg-gradient-to-r from-primary/40 via-primary/10 to-transparent" />
        </div>

        <div className="prose-custom space-y-8 text-sm text-muted-foreground leading-relaxed">

          <section>
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing or using thevibecodex.com (the "Site"), you agree to be bound by these Terms of
              Service ("Terms"). If you do not agree to these Terms, please do not use the Site. These Terms
              apply to all visitors and users of the Site.
            </p>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:support@thevibecodex.com">support@thevibecodex.com</a>.
            </p>
          </section>

          <section>
            <h2>Description of Service</h2>
            <p>
              The Vibe Codex is a free, publicly accessible reference resource providing cheat sheets, prompt
              patterns, workflow guides, and tool comparisons for AI-assisted software development. The Site is
              provided for informational and educational purposes only.
            </p>
          </section>

          <section>
            <h2>Intellectual Property</h2>
            <p>
              The content on this Site — including text, code snippets, prompt patterns, and design — is owned
              by The Vibe Codex and is protected by applicable intellectual property laws.
            </p>
            <p>
              <strong className="text-foreground">Personal Use:</strong> You are free to use, copy, and adapt
              the prompt patterns, cursor rules, and cheat sheet content for your own personal or professional
              development work. Attribution is appreciated but not required.
            </p>
            <p>
              <strong className="text-foreground">Restrictions:</strong> You may not reproduce, republish, or
              redistribute the Site's content in bulk (e.g., as a competing cheat sheet site or product) without
              prior written permission. You may not scrape the Site for commercial data collection purposes.
            </p>
          </section>

          <section>
            <h2>Disclaimer of Warranties</h2>
            <p>
              The Site and its content are provided "as is" and "as available" without warranties of any kind,
              either express or implied. We do not warrant that:
            </p>
            <ul>
              <li>The content is accurate, complete, or up to date</li>
              <li>The Site will be available without interruption or error</li>
              <li>Any prompt patterns or workflows will produce specific results in your AI tools</li>
              <li>The Site is free from viruses or other harmful components</li>
            </ul>
            <p>
              AI tools and best practices evolve rapidly. Always verify information against the official
              documentation of the tools you use.
            </p>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, The Vibe Codex and its operators shall not be liable for
              any indirect, incidental, special, consequential, or punitive damages arising from your use of or
              inability to use the Site or its content. This includes, but is not limited to, damages resulting
              from reliance on any information obtained from the Site.
            </p>
            <p>
              Our total liability for any claim arising out of or relating to these Terms or the Site shall not
              exceed $100 USD.
            </p>
          </section>

          <section>
            <h2>Third-Party Links and Services</h2>
            <p>
              The Site contains links to third-party websites and tools (such as Cursor, Claude, GitHub, and
              others). These links are provided for convenience only. We do not endorse, control, or take
              responsibility for the content, privacy practices, or availability of any third-party sites.
              Your use of third-party services is governed by their respective terms and policies.
            </p>
          </section>

          <section>
            <h2>Advertising</h2>
            <p>
              The Site displays advertisements through Google AdSense. These advertisements are clearly
              distinguished from editorial content. We are not responsible for the content of third-party
              advertisements and do not endorse the products or services advertised.
            </p>
          </section>

          <section>
            <h2>Prohibited Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Site for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any part of the Site</li>
              <li>Use automated tools to scrape or harvest content from the Site at scale</li>
              <li>Interfere with or disrupt the Site's infrastructure</li>
              <li>Misrepresent your affiliation with The Vibe Codex</li>
            </ul>
          </section>

          <section>
            <h2>Changes to the Site and Terms</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue the Site at any time without notice. We
              may also update these Terms at any time. The "Last updated" date at the top of this page will
              reflect the most recent revision. Your continued use of the Site after any changes constitutes
              your acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the United States,
              without regard to its conflict of law provisions. Any disputes arising under these Terms shall be
              resolved in the appropriate courts of the United States.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns about these Terms, please contact us at:{" "}
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
                <span className="hover:text-foreground transition-colors">Privacy Policy</span>
              </Link>
              <Link href="/terms">
                <span className="hover:text-foreground transition-colors text-primary/80">Terms of Service</span>
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
