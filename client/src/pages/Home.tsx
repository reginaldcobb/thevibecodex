/**
 * THE VIBE CODEX — Home Page
 * Design: Swiss Editorial Tech Magazine
 * Dark slate (#0f1117) + Electric Violet + Teal accents
 * Syne (headings) + IBM Plex Mono (code) + DM Sans (body)
 * Layout: Sticky top nav, two-column (content + ad sidebar), 10 sections
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { CopyButton } from "@/components/CopyButton";
import { AdSlot } from "@/components/AdSlot";
import {
  goldenRules,
  promptPatterns,
  tools,
  mistakes,
  rescuePrompts,
  models,
  shortcuts,
  cursorRules,
  resources,
} from "@/data/cheatsheet";
import {
  BookOpen,
  Zap,
  Code2,
  Wrench,
  AlertTriangle,
  Rocket,
  Cpu,
  Keyboard,
  Link2,
  FileCode,
  Menu,
  X,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663031591104/Awr2gYwYz8sa7UiGeyZPPu/hero-bg-awQFsazH3VHgeb3cDKFh9E.webp";
const WORKFLOW_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663031591104/Awr2gYwYz8sa7UiGeyZPPu/workflow-diagram-muxcCRCkW5KgFwPCtMZ3H2.webp";

const navSections = [
  { id: "golden-rules", label: "Golden Rules", icon: BookOpen },
  { id: "prompt-patterns", label: "Prompt Patterns", icon: Zap },
  { id: "workflow", label: "Workflow", icon: Rocket },
  { id: "tools", label: "AI Tools", icon: Wrench },
  { id: "cursor-rules", label: "Cursor Rules", icon: FileCode },
  { id: "mistakes", label: "Mistakes", icon: AlertTriangle },
  { id: "rescue", label: "Rescue Kit", icon: Code2 },
  { id: "models", label: "Model Guide", icon: Cpu },
  { id: "shortcuts", label: "Shortcuts", icon: Keyboard },
  { id: "resources", label: "Resources", icon: Link2 },
];

function SectionHeader({
  number,
  title,
  subtitle,
  icon: Icon,
}: {
  number: string;
  title: string;
  subtitle?: string;
  icon: React.ElementType;
}) {
  return (
    <div className="relative mb-8">
      <span className="section-number">{number}</span>
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
          <Icon size={18} className="text-primary" />
        </div>
        <span className="text-xs font-mono text-primary/70 uppercase tracking-widest">
          Section {number}
        </span>
      </div>
      <h2 className="text-3xl font-bold text-foreground" style={{ fontFamily: "Syne, sans-serif" }}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-muted-foreground text-sm leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="mt-4 h-px bg-gradient-to-r from-primary/40 via-primary/10 to-transparent" />
    </div>
  );
}

function TagBadge({ tag, color }: { tag: string; color: string }) {
  return (
    <span className={`tag-${color} inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-medium`}>
      {tag}
    </span>
  );
}

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("golden-rules");
  const [expandedCursorRule, setExpandedCursorRule] = useState<number | null>(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    navSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileNavOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Sticky Top Nav ── */}
      <header className="sticky top-0 z-50 border-b border-white/8 bg-background/90 backdrop-blur-md">
        <div className="container">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xs" style={{ fontFamily: "Syne, sans-serif" }}>VC</span>
              </div>
              <span className="font-bold text-sm text-foreground" style={{ fontFamily: "Syne, sans-serif" }}>
                The Vibe Codex
              </span>
              <span className="hidden sm:inline text-xs text-muted-foreground font-mono ml-1">
                v1.0 · Apr 2026
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navSections.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-all duration-150 ${
                    activeSection === id
                      ? "bg-primary/15 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 rounded text-muted-foreground hover:text-foreground"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              {mobileNavOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileNavOpen && (
          <div className="lg:hidden border-t border-white/8 bg-background/95 backdrop-blur-md">
            <div className="container py-3 grid grid-cols-2 gap-1">
              {navSections.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded text-sm transition-all ${
                    activeSection === id
                      ? "bg-primary/15 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  <Icon size={14} />
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="relative container py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Updated April 2026 · Free to use · Bookmark this page
            </div>
            <h1
              className="text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              The Vibe Codex
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl">
              The definitive cheat sheet for AI-assisted development. Prompt patterns, tool comparisons,
              cursor rules, workflows, and rescue prompts — everything you need to ship faster with AI.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("golden-rules")}
                className="px-5 py-2.5 bg-primary text-white rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                Start Reading
              </button>
            </div>
            {/* Hero Ad — below CTA buttons */}
            <div className="mt-6">
              <AdSlot slot="hero" className="w-full max-w-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Layout: Content + Sidebar ── */}
      <div className="container py-12">
        <div className="flex gap-8 lg:gap-12">
          {/* ── Main Content ── */}
          <main className="flex-1 min-w-0 space-y-20">

            {/* ── Section 1: Golden Rules ── */}
            <section id="golden-rules" className="relative scroll-mt-20">
              <SectionHeader
                number="01"
                title="The Golden Rules"
                subtitle="Non-negotiable principles that separate productive vibe coders from those stuck in the doom loop."
                icon={BookOpen}
              />
              <div className="grid sm:grid-cols-2 gap-4">
                {goldenRules.map((rule) => (
                  <div
                    key={rule.number}
                    className="group p-5 rounded-xl border border-white/8 bg-card hover:border-primary/30 hover:bg-card/80 transition-all duration-200"
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className="text-3xl font-extrabold text-primary/20 group-hover:text-primary/40 transition-colors leading-none mt-0.5"
                        style={{ fontFamily: "Syne, sans-serif" }}
                      >
                        {rule.number}
                      </span>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1.5" style={{ fontFamily: "Syne, sans-serif" }}>
                          {rule.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{rule.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Between Section Ad: After Golden Rules ── */}
            <div className="flex justify-center py-2">
              <AdSlot slot="between-section" className="w-full" />
            </div>

            {/* ── Section 2: Prompt Patterns ── */}
            <section id="prompt-patterns" className="relative scroll-mt-20">
              <SectionHeader
                number="02"
                title="Prompt Patterns"
                subtitle="Named, reusable prompt templates. Copy, customize, and use them directly in Cursor, Claude, or any AI tool."
                icon={Zap}
              />
              <div className="space-y-4">
                {promptPatterns.map((pattern, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/8 bg-card overflow-hidden hover:border-white/15 transition-all duration-200"
                  >
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold text-foreground" style={{ fontFamily: "Syne, sans-serif" }}>
                            {pattern.name}
                          </h3>
                          <TagBadge tag={pattern.tag} color={pattern.tagColor} />
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{pattern.description}</p>
                      <div className="relative">
                        <div className="prompt-block text-white/80">{pattern.prompt}</div>
                        <div className="absolute top-2 right-2">
                          <CopyButton text={pattern.prompt} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Between Section Ad: After Prompt Patterns ── */}
            <div className="flex justify-center py-2">
              <AdSlot slot="between-section" className="w-full" />
            </div>

            {/* ── Section 3: Workflow ── */}
            <section id="workflow" className="relative scroll-mt-20">
              <SectionHeader
                number="03"
                title="The Vibe Coding Workflow"
                subtitle="A repeatable, step-by-step process from raw idea to shipped product."
                icon={Rocket}
              />
              <div className="rounded-xl overflow-hidden border border-white/8 mb-6">
                <img
                  src={WORKFLOW_IMG}
                  alt="Vibe Coding Workflow: Idea → PRD → Scaffold → Build Loop → Review → Ship"
                  className="w-full"
                />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { step: "01", name: "Idea", color: "violet", desc: "Write a one-paragraph description of what you want to build. Be specific about the problem it solves." },
                  { step: "02", name: "PRD", color: "teal", desc: "Create a Product Requirements Doc. List features, user flows, tech stack, and constraints. Paste this into your AI tool as context." },
                  { step: "03", name: "Scaffold", color: "amber", desc: "Ask the AI to set up the project structure, install dependencies, and create placeholder files. Review before proceeding." },
                  { step: "04", name: "Build Loop", color: "violet", desc: "One feature at a time. Prompt → Review → Test → Commit. Never move to the next feature until the current one works." },
                  { step: "05", name: "Review", color: "teal", desc: "Read all generated code. Run tests. Check edge cases. Ask the AI to review its own output for bugs and security issues." },
                  { step: "06", name: "Ship", color: "amber", desc: "Deploy to your platform of choice. Set up monitoring. Gather feedback. Start the loop again with the next feature." },
                ].map((item) => (
                  <div key={item.step} className={`p-4 rounded-xl border bg-card hover:border-white/15 transition-all border-white/8`}>
                    <div className="flex items-center gap-2 mb-2">
                      <TagBadge tag={item.step} color={item.color} />
                      <span className="font-semibold text-sm" style={{ fontFamily: "Syne, sans-serif" }}>{item.name}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Between Section Ad: After Workflow ── */}
            <div className="flex justify-center py-2">
              <AdSlot slot="between-section" className="w-full" />
            </div>

            {/* ── Section 4: AI Tools ── */}
            <section id="tools" className="relative scroll-mt-20">
              <SectionHeader
                number="04"
                title="AI Tool Quick Reference"
                subtitle="The right tool for the right job. Each has a distinct strength — use them together."
                icon={Wrench}
              />
              <div className="overflow-x-auto rounded-xl border border-white/8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/8 bg-white/3">
                      <th className="text-left px-4 py-3 font-semibold text-muted-foreground font-mono text-xs uppercase tracking-wider">Tool</th>
                      <th className="text-left px-4 py-3 font-semibold text-muted-foreground font-mono text-xs uppercase tracking-wider">Type</th>
                      <th className="text-left px-4 py-3 font-semibold text-muted-foreground font-mono text-xs uppercase tracking-wider hidden md:table-cell">Best For</th>
                      <th className="text-left px-4 py-3 font-semibold text-muted-foreground font-mono text-xs uppercase tracking-wider hidden lg:table-cell">Free?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tools.map((tool, i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/3 transition-colors group">
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2">
                            <a
                              href={tool.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-1"
                              style={{ fontFamily: "Syne, sans-serif" }}
                            >
                              {tool.name}
                              <ExternalLink size={11} className="opacity-0 group-hover:opacity-60 transition-opacity" />
                            </a>
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5 lg:hidden">{tool.highlight}</p>
                        </td>
                        <td className="px-4 py-4">
                          <span className="tag-violet px-2 py-0.5 rounded text-xs font-mono">{tool.type}</span>
                        </td>
                        <td className="px-4 py-4 hidden md:table-cell">
                          <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">{tool.highlight}</p>
                        </td>
                        <td className="px-4 py-4 hidden lg:table-cell">
                          <span className={`text-xs font-mono ${tool.free ? "text-green-400" : "text-amber-400"}`}>
                            {tool.free ? "Free tier" : "Paid"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── Between Section Ad: After AI Tools ── */}
            <div className="flex justify-center py-2">
              <AdSlot slot="between-section" className="w-full" />
            </div>

            {/* ── Section 5: Cursor Rules ── */}
            <section id="cursor-rules" className="relative scroll-mt-20">
              <SectionHeader
                number="05"
                title="Cursor Rules Starter Kit"
                subtitle="Ready-to-copy .cursorrules files for common project types. Paste into your project root to shape AI behavior."
                icon={FileCode}
              />
              <div className="space-y-4">
                {cursorRules.map((rule, i) => (
                  <div key={i} className="rounded-xl border border-white/8 bg-card overflow-hidden">
                    <div className="flex items-center">
                      <button
                        className="flex-1 flex items-center justify-between p-5 hover:bg-white/3 transition-colors text-left"
                        onClick={() => setExpandedCursorRule(expandedCursorRule === i ? null : i)}
                      >
                        <div>
                          <h3 className="font-semibold text-foreground" style={{ fontFamily: "Syne, sans-serif" }}>
                            {rule.name}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-0.5">{rule.description}</p>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          {expandedCursorRule === i ? (
                            <ChevronUp size={16} className="text-muted-foreground flex-shrink-0" />
                          ) : (
                            <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />
                          )}
                        </div>
                      </button>
                      <div className="pr-4">
                        <CopyButton text={rule.rule} />
                      </div>
                    </div>
                    {expandedCursorRule === i && (
                      <div className="px-5 pb-5">
                        <div className="prompt-block text-white/80 text-xs">{rule.rule}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 rounded-xl border border-teal-500/20 bg-teal-500/5">
                <p className="text-xs text-teal-300/80 leading-relaxed">
                  <span className="font-semibold text-teal-300">Pro tip:</span> Save your rules as{" "}
                  <code className="font-mono bg-white/5 px-1 rounded">.cursorrules</code> in your project root (Cursor v0.43+) or{" "}
                  <code className="font-mono bg-white/5 px-1 rounded">.cursor/rules/*.mdc</code> for modular rules. Find more community rules at{" "}
                  <a href="https://cursor.directory" target="_blank" rel="noopener noreferrer" className="underline hover:text-teal-200">
                    cursor.directory
                  </a>.
                </p>
              </div>
            </section>

            {/* ── Between Section Ad: After Cursor Rules ── */}
            <div className="flex justify-center py-2">
              <AdSlot slot="between-section" className="w-full" />
            </div>

            {/* ── Section 6: Common Mistakes ── */}
            <section id="mistakes" className="relative scroll-mt-20">
              <SectionHeader
                number="06"
                title="Common Mistakes & Fixes"
                subtitle="The patterns that trap vibe coders in the doom loop — and exactly how to escape them."
                icon={AlertTriangle}
              />
              <div className="overflow-x-auto rounded-xl border border-white/8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/8 bg-white/3">
                      <th className="text-left px-4 py-3 font-semibold text-muted-foreground font-mono text-xs uppercase tracking-wider w-1/2">
                        ✗ Don't Do This
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-muted-foreground font-mono text-xs uppercase tracking-wider w-1/2">
                        ✓ Do This Instead
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {mistakes.map((item, i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                        <td className="px-4 py-3.5 text-red-400/80 text-xs leading-relaxed align-top">
                          {item.mistake}
                        </td>
                        <td className="px-4 py-3.5 text-green-400/80 text-xs leading-relaxed align-top">
                          {item.fix}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── Between Section Ad: After Common Mistakes ── */}
            <div className="flex justify-center py-2">
              <AdSlot slot="between-section" className="w-full" />
            </div>

            {/* ── Section 7: Rescue Kit ── */}
            <section id="rescue" className="relative scroll-mt-20">
              <SectionHeader
                number="07"
                title="Prompt Rescue Kit"
                subtitle="What to say when the AI goes off the rails. Copy these prompts and use them immediately."
                icon={Code2}
              />
              <div className="space-y-4">
                {rescuePrompts.map((item, i) => (
                  <div key={i} className="rounded-xl border border-white/8 bg-card p-5 hover:border-white/15 transition-all">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-6 h-6 rounded-full bg-amber-500/15 border border-amber-500/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <AlertTriangle size={11} className="text-amber-400" />
                      </div>
                      <p className="text-sm font-medium text-amber-300/90">{item.situation}</p>
                    </div>
                    <div className="relative">
                      <div className="prompt-block text-white/80">{item.prompt}</div>
                      <div className="absolute top-2 right-2">
                        <CopyButton text={item.prompt} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Between Section Ad: After Rescue Kit ── */}
            <div className="flex justify-center py-2">
              <AdSlot slot="between-section" className="w-full" />
            </div>

            {/* ── Section 8: Model Guide ── */}
            <section id="models" className="relative scroll-mt-20">
              <SectionHeader
                number="08"
                title="Model Selection Guide"
                subtitle="Which AI model to use for which task. Stop guessing, start picking intentionally."
                icon={Cpu}
              />
              <div className="grid sm:grid-cols-2 gap-4">
                {models.map((model, i) => (
                  <div key={i} className="p-5 rounded-xl border border-white/8 bg-card hover:border-primary/25 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-foreground" style={{ fontFamily: "Syne, sans-serif" }}>
                        {model.model}
                      </h3>
                      <span className="text-xs font-mono text-muted-foreground">{model.provider}</span>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <span className="text-xs font-mono text-green-400/70 uppercase tracking-wider">Best for</span>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{model.bestFor}</p>
                      </div>
                      <div>
                        <span className="text-xs font-mono text-red-400/70 uppercase tracking-wider">Avoid when</span>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{model.avoid}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Between Section Ad: After Model Guide ── */}
            <div className="flex justify-center py-2">
              <AdSlot slot="between-section" className="w-full" />
            </div>

            {/* ── Section 9: Shortcuts ── */}
            <section id="shortcuts" className="relative scroll-mt-20">
              <SectionHeader
                number="09"
                title="Keyboard Shortcuts"
                subtitle="The shortcuts that matter most for AI-assisted coding. Learn these and you'll move significantly faster."
                icon={Keyboard}
              />
              <div className="space-y-6">
                {shortcuts.map((group, i) => (
                  <div key={i} className="rounded-xl border border-white/8 overflow-hidden">
                    <div className="px-4 py-3 bg-white/3 border-b border-white/8">
                      <h3 className="font-semibold text-sm" style={{ fontFamily: "Syne, sans-serif" }}>
                        {group.tool}
                      </h3>
                    </div>
                    <div className="divide-y divide-white/5">
                      {group.items.map((item, j) => (
                        <div key={j} className="flex items-center justify-between px-4 py-2.5 hover:bg-white/2 transition-colors">
                          <span className="text-sm text-muted-foreground">{item.action}</span>
                          <kbd className="font-mono text-xs bg-white/8 border border-white/12 px-2 py-0.5 rounded text-foreground">
                            {item.shortcut}
                          </kbd>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Between Section Ad: After Shortcuts ── */}
            <div className="flex justify-center py-2">
              <AdSlot slot="between-section" className="w-full" />
            </div>

            {/* ── Section 10: Resources ── */}
            <section id="resources" className="relative scroll-mt-20">
              <SectionHeader
                number="10"
                title="Resources & Tools"
                subtitle="The best communities, learning resources, and tools in the vibe coding ecosystem."
                icon={Link2}
              />
              <div className="grid sm:grid-cols-3 gap-6">
                {resources.map((group, i) => (
                  <div key={i}>
                    <h3
                      className="text-xs font-mono text-primary/70 uppercase tracking-widest mb-4"
                    >
                      {group.category}
                    </h3>
                    <div className="space-y-2">
                      {group.items.map((item, j) => (
                        <a
                          key={j}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-2 p-3 rounded-lg border border-white/8 hover:border-primary/30 hover:bg-primary/5 transition-all group"
                        >
                          <ExternalLink size={13} className="text-muted-foreground group-hover:text-primary transition-colors mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                              {item.name}
                            </p>
                            <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </main>

          {/* ── Sidebar (Desktop) ── */}
          <aside className="hidden xl:flex flex-col gap-6 w-[300px] flex-shrink-0">
            <div className="sticky top-20 space-y-6">
              {/* Ad Slot 1 */}
              <AdSlot slot="sidebar-top" className="w-full" />

              {/* Quick Nav */}
              <div className="rounded-xl border border-white/8 bg-card p-4">
                <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
                  Quick Jump
                </h3>
                <nav className="space-y-0.5">
                  {navSections.map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      onClick={() => scrollTo(id)}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all text-left ${
                        activeSection === id
                          ? "bg-primary/12 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                      }`}
                    >
                      <Icon size={13} className="flex-shrink-0" />
                      {label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Ad Slot 2 */}
              <AdSlot slot="sidebar-bottom" className="w-full" />

              {/* Update note */}
              <div className="p-4 rounded-xl border border-violet-500/20 bg-violet-500/5 text-xs text-violet-300/70 leading-relaxed">
                <p className="font-semibold text-violet-300 mb-1">Stay Current</p>
                <p>This codex is updated monthly with new patterns, tools, and community insights. Bookmark it and check back.</p>
              </div>
            </div>
          </aside>
        </div>

        {/* ── Footer Ad ── */}
        <div className="mt-16 flex justify-center">
          <AdSlot slot="footer" />
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="border-t border-white/8 mt-8">
        <div className="container py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xs" style={{ fontFamily: "Syne, sans-serif" }}>VC</span>
              </div>
              <span className="text-sm font-semibold" style={{ fontFamily: "Syne, sans-serif" }}>The Vibe Codex</span>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              thevibecodex.com · A free reference for AI-assisted developers · Updated monthly
            </p>
            <p className="text-xs text-muted-foreground font-mono">v1.0.0</p>
          </div>
          <div className="border-t border-white/5 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <Link href="/privacy">
                <span className="hover:text-foreground transition-colors cursor-pointer">Privacy Policy</span>
              </Link>
              <Link href="/terms">
                <span className="hover:text-foreground transition-colors cursor-pointer">Terms of Service</span>
              </Link>
              <a href="mailto:support@thevibecodex.com" className="hover:text-foreground transition-colors">
                support@thevibecodex.com
              </a>
            </div>
            <p className="text-xs text-muted-foreground/50">
              © {new Date().getFullYear()} The Vibe Codex. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
