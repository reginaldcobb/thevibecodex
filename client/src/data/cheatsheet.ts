// The Vibe Codex — Cheat Sheet Content Data
// Update this file to keep the cheat sheet fresh. Each section is self-contained.
// Last updated: April 2026

export interface PromptPattern {
  name: string;
  tag: string;
  tagColor: string;
  prompt: string;
  description: string;
}

export interface ToolEntry {
  name: string;
  bestFor: string;
  type: string;
  free: boolean;
  url: string;
  highlight: string;
}

export interface MistakeEntry {
  mistake: string;
  fix: string;
}

export interface RescuePrompt {
  situation: string;
  prompt: string;
}

export interface ModelEntry {
  model: string;
  provider: string;
  bestFor: string;
  avoid: string;
}

export interface ShortcutEntry {
  tool: string;
  action: string;
  shortcut: string;
}

export interface CursorRule {
  name: string;
  description: string;
  rule: string;
}

export const goldenRules = [
  {
    number: "01",
    title: "Plan Before You Prompt",
    description: "Write a one-paragraph description of what you want to build before opening your AI tool. The clearer your intent, the better the output.",
  },
  {
    number: "02",
    title: "One Feature at a Time",
    description: "Never ask the AI to build multiple features in a single prompt. Break work into the smallest possible units. Ship each one before moving on.",
  },
  {
    number: "03",
    title: "Always Review the Output",
    description: "Read every line of generated code before accepting it. AI makes confident mistakes. You are the last line of defense.",
  },
  {
    number: "04",
    title: "Commit Early, Commit Often",
    description: "Use Git religiously. Commit after every working feature. If the AI breaks something, you can always roll back to a known good state.",
  },
  {
    number: "05",
    title: "Give Context, Get Quality",
    description: "Paste relevant code, file names, and error messages into your prompt. The more context the AI has, the fewer hallucinations you get.",
  },
  {
    number: "06",
    title: "Name Your Constraints",
    description: "Always specify your stack, framework version, and any constraints upfront. 'Use React 19 with TypeScript, no class components' beats 'build a React app'.",
  },
  {
    number: "07",
    title: "Test Before You Trust",
    description: "Run the code. Click every button. Check every edge case. Working code in the AI's mind and working code in your browser are two different things.",
  },
];

export const promptPatterns: PromptPattern[] = [
  {
    name: "Plan First",
    tag: "Planning",
    tagColor: "violet",
    description: "Get the AI to outline its approach before writing a single line of code.",
    prompt: "Before writing any code, explain your approach to [task]. List the files you'll create or modify, the key decisions you'll make, and any tradeoffs. Wait for my approval before proceeding.",
  },
  {
    name: "One Feature at a Time",
    tag: "Scoping",
    tagColor: "teal",
    description: "Prevent scope creep by locking the AI to a single, well-defined task.",
    prompt: "Implement only [specific feature]. Do not refactor other code, add extra features, or change anything outside of [file/component]. When done, stop and summarize what you changed.",
  },
  {
    name: "Fix, Don't Rewrite",
    tag: "Debugging",
    tagColor: "amber",
    description: "Stop the AI from nuking working code to fix a small bug.",
    prompt: "Fix the bug in [file/function] where [describe bug]. Do not rewrite the entire file or change the overall structure. Make the minimal change needed to resolve the issue.",
  },
  {
    name: "Explain Then Build",
    tag: "Learning",
    tagColor: "violet",
    description: "Understand what you're building before it's built.",
    prompt: "Explain what [concept/pattern/library] is and why it's the right choice for [use case]. Then implement it in [context]. Use comments to explain non-obvious parts.",
  },
  {
    name: "Rubber Duck Debug",
    tag: "Debugging",
    tagColor: "amber",
    description: "Use the AI to reason through a problem before jumping to a fix.",
    prompt: "I have a bug: [describe behavior]. Here is the relevant code: [paste code]. Walk me through what this code is doing step by step. Don't suggest a fix yet — just help me understand what's happening.",
  },
  {
    name: "Code Review Mode",
    tag: "Quality",
    tagColor: "teal",
    description: "Get a critical review before shipping.",
    prompt: "Review this code as a senior engineer would: [paste code]. Look for bugs, security issues, performance problems, and anything that violates best practices for [stack]. Be specific and direct.",
  },
  {
    name: "Test First",
    tag: "Testing",
    tagColor: "green",
    description: "Write tests before implementation to anchor the AI's output.",
    prompt: "Write unit tests for [feature/function] before implementing it. Use [testing framework]. Tests should cover the happy path, edge cases, and error states. Once tests are written, implement the code to make them pass.",
  },
  {
    name: "Incremental Refactor",
    tag: "Refactoring",
    tagColor: "violet",
    description: "Safely improve code without breaking what works.",
    prompt: "Refactor [file/function] to [goal: improve readability / reduce duplication / improve performance]. Make changes incrementally — one concern at a time. After each change, confirm the behavior is identical to before.",
  },
];

export const tools: ToolEntry[] = [
  {
    name: "Cursor",
    bestFor: "Full-project AI coding with deep codebase context",
    type: "IDE",
    free: false,
    url: "https://cursor.sh",
    highlight: "Best overall for serious vibe coding. Agent mode can handle multi-file tasks autonomously.",
  },
  {
    name: "GitHub Copilot",
    bestFor: "Inline autocomplete and chat inside VS Code",
    type: "IDE Extension",
    free: false,
    url: "https://github.com/features/copilot",
    highlight: "Best if you live in VS Code and want AI woven into your existing workflow.",
  },
  {
    name: "Claude (claude.ai)",
    bestFor: "Long-context reasoning, architecture planning, code review",
    type: "Chat AI",
    free: true,
    url: "https://claude.ai",
    highlight: "Best for thinking through complex problems before writing code. Excellent at explaining tradeoffs.",
  },
  {
    name: "Bolt.new",
    bestFor: "Full-stack app prototyping from a single prompt",
    type: "Browser IDE",
    free: true,
    url: "https://bolt.new",
    highlight: "Best for spinning up a working prototype in minutes. No local setup required.",
  },
  {
    name: "v0 by Vercel",
    bestFor: "UI component generation from text or screenshots",
    type: "UI Generator",
    free: true,
    url: "https://v0.dev",
    highlight: "Best for generating React/Tailwind UI components fast. Output is clean and production-ready.",
  },
  {
    name: "Replit",
    bestFor: "Browser-based coding with AI agent and instant deploy",
    type: "Browser IDE",
    free: true,
    url: "https://replit.com",
    highlight: "Best for beginners or when you want to code and deploy without touching a terminal.",
  },
  {
    name: "Windsurf",
    bestFor: "AI-native IDE with Cascade agent for autonomous tasks",
    type: "IDE",
    free: false,
    url: "https://codeium.com/windsurf",
    highlight: "Strong Cursor alternative. Cascade agent is excellent at multi-step autonomous tasks.",
  },
  {
    name: "ChatGPT (GPT-4.1)",
    bestFor: "General coding help, explanations, boilerplate generation",
    type: "Chat AI",
    free: false,
    url: "https://chatgpt.com",
    highlight: "Best for quick questions, boilerplate, and when you need broad knowledge across many languages.",
  },
];

export const mistakes: MistakeEntry[] = [
  {
    mistake: "Asking for everything in one prompt",
    fix: "Break the request into the smallest possible unit. One feature, one file, one function at a time.",
  },
  {
    mistake: "Accepting code without reading it",
    fix: "Read every line before accepting. Ask the AI to explain anything you don't understand.",
  },
  {
    mistake: "Not using version control",
    fix: "Commit after every working feature. If the AI breaks something, git checkout saves you.",
  },
  {
    mistake: "Letting the AI choose your stack",
    fix: "Always specify your stack upfront. 'Use Next.js 14, TypeScript, and Tailwind' is a complete constraint.",
  },
  {
    mistake: "Ignoring error messages",
    fix: "Paste the full error message and stack trace into your prompt. Never paraphrase — exact text matters.",
  },
  {
    mistake: "Asking the AI to fix a bug without sharing the code",
    fix: "Always paste the relevant code. The AI cannot help what it cannot see.",
  },
  {
    mistake: "Letting the AI rewrite working code",
    fix: "Explicitly say: 'Do not change anything outside of [specific area].' Scope is everything.",
  },
  {
    mistake: "Not testing after each AI change",
    fix: "Run the app after every AI change. Catch regressions immediately, not after 10 more changes.",
  },
  {
    mistake: "Using vague prompts like 'make it better'",
    fix: "Be specific: 'Improve the performance of the fetchUsers function by adding pagination.'",
  },
  {
    mistake: "Skipping the planning phase",
    fix: "Ask the AI to outline its approach first. Approve the plan before it writes a single line.",
  },
];

export const rescuePrompts: RescuePrompt[] = [
  {
    situation: "AI is going in circles and not fixing the bug",
    prompt: "Stop. Let's reset. Explain what you think the root cause of this bug is in plain English. Don't write any code yet.",
  },
  {
    situation: "AI rewrote code that was working",
    prompt: "You changed code outside the scope of my request. Revert everything you changed except [specific thing]. Here is the original code: [paste original].",
  },
  {
    situation: "AI is hallucinating a library or API that doesn't exist",
    prompt: "The function/method [name] does not exist in [library]. Do not use it. Solve this problem using only the documented API from [library]. Here is the relevant documentation: [paste docs].",
  },
  {
    situation: "AI keeps adding features you didn't ask for",
    prompt: "You are adding features I did not request. Remove everything you added except [specific feature]. Follow my original requirements exactly: [restate requirements].",
  },
  {
    situation: "AI output is too complex and hard to understand",
    prompt: "Rewrite this in the simplest way possible. Prioritize readability over cleverness. Use clear variable names, add comments for non-obvious logic, and avoid abstractions I don't need yet.",
  },
  {
    situation: "AI broke something that was working",
    prompt: "Something that was working before is now broken: [describe what broke]. Here is the diff of what you changed: [paste diff]. Identify which change caused the regression and revert only that change.",
  },
];

export const models: ModelEntry[] = [
  {
    model: "Claude Sonnet 4",
    provider: "Anthropic",
    bestFor: "Complex reasoning, long codebases, architecture decisions, code review",
    avoid: "Simple one-liners or tasks where speed matters more than depth",
  },
  {
    model: "GPT-4.1",
    provider: "OpenAI",
    bestFor: "Broad language support, boilerplate, general coding questions",
    avoid: "Very long context windows — can lose track in large files",
  },
  {
    model: "Gemini 2.5 Pro",
    provider: "Google",
    bestFor: "Massive context windows (1M tokens), analyzing large codebases",
    avoid: "Tasks requiring very precise instruction following",
  },
  {
    model: "GPT-4o",
    provider: "OpenAI",
    bestFor: "Fast responses, multimodal tasks (screenshot to code), everyday coding",
    avoid: "Deep architectural reasoning — use Claude for that",
  },
  {
    model: "Claude Haiku",
    provider: "Anthropic",
    bestFor: "Fast, cheap tasks: autocomplete, simple refactors, quick answers",
    avoid: "Complex multi-step reasoning or large codebase analysis",
  },
  {
    model: "Llama 3.3 (local)",
    provider: "Meta / Ollama",
    bestFor: "Private/offline coding, sensitive codebases, no API cost",
    avoid: "Tasks requiring the latest knowledge or very large context",
  },
];

export const shortcuts = [
  {
    tool: "Cursor",
    items: [
      { action: "Open AI Chat", shortcut: "Cmd/Ctrl + L" },
      { action: "Inline Edit (Cmd+K)", shortcut: "Cmd/Ctrl + K" },
      { action: "Accept AI suggestion", shortcut: "Tab" },
      { action: "Reject AI suggestion", shortcut: "Esc" },
      { action: "Open Composer (Agent)", shortcut: "Cmd/Ctrl + I" },
      { action: "Toggle AI panel", shortcut: "Cmd/Ctrl + Shift + L" },
    ],
  },
  {
    tool: "GitHub Copilot",
    items: [
      { action: "Accept suggestion", shortcut: "Tab" },
      { action: "Reject suggestion", shortcut: "Esc" },
      { action: "Next suggestion", shortcut: "Alt + ]" },
      { action: "Previous suggestion", shortcut: "Alt + [" },
      { action: "Open Copilot Chat", shortcut: "Cmd/Ctrl + Shift + I" },
      { action: "Inline chat", shortcut: "Cmd/Ctrl + I" },
    ],
  },
  {
    tool: "VS Code (General)",
    items: [
      { action: "Command palette", shortcut: "Cmd/Ctrl + Shift + P" },
      { action: "Quick file open", shortcut: "Cmd/Ctrl + P" },
      { action: "Toggle terminal", shortcut: "Cmd/Ctrl + `" },
      { action: "Find in files", shortcut: "Cmd/Ctrl + Shift + F" },
      { action: "Multi-cursor select", shortcut: "Cmd/Ctrl + D" },
      { action: "Move line up/down", shortcut: "Alt + ↑/↓" },
    ],
  },
];

export const cursorRules: CursorRule[] = [
  {
    name: "React + TypeScript App",
    description: "Solid baseline for any React/TypeScript project",
    rule: `You are an expert React and TypeScript developer.

- Use functional components with TypeScript interfaces, never class components
- Use React hooks (useState, useEffect, useCallback, useMemo) appropriately
- Prefer named exports over default exports
- Use Tailwind CSS for styling — no inline styles or CSS modules
- Write self-documenting code with clear variable names
- Add JSDoc comments for complex functions
- Never use 'any' type — use proper TypeScript types
- Handle loading and error states in every async operation
- Ask before installing new dependencies`,
  },
  {
    name: "REST API (Node/Express)",
    description: "Clean backend API development rules",
    rule: `You are an expert Node.js and Express developer.

- Use async/await, never callbacks
- Always validate request inputs with Zod or similar
- Return consistent JSON response shapes: { data, error, status }
- Use proper HTTP status codes
- Never expose internal error messages to clients
- Use environment variables for all secrets and config
- Add error handling middleware — never let unhandled errors crash the server
- Write middleware for repeated logic (auth, logging, validation)
- Ask before adding new npm packages`,
  },
  {
    name: "General Vibe Coding",
    description: "Universal rules for any AI-assisted project",
    rule: `You are a senior software engineer helping me build [project name].

- Always ask clarifying questions before starting a complex task
- Plan your approach before writing code — explain what you'll do first
- Make the smallest change that solves the problem
- Never rewrite working code unless explicitly asked
- Commit-worthy changes only — no half-finished implementations
- Flag any security concerns immediately
- Prefer readability over cleverness
- When in doubt, ask — don't assume`,
  },
];

export const resources = [
  {
    category: "Communities",
    items: [
      { name: "r/vibecoding", url: "https://reddit.com/r/vibecoding", description: "The main vibe coding subreddit" },
      { name: "r/cursor", url: "https://reddit.com/r/cursor", description: "Cursor IDE tips and community" },
      { name: "r/ChatGPTCoding", url: "https://reddit.com/r/ChatGPTCoding", description: "AI-assisted coding discussions" },
      { name: "Cursor Discord", url: "https://discord.gg/cursor", description: "Official Cursor community server" },
    ],
  },
  {
    category: "Learning",
    items: [
      { name: "Cursor Docs", url: "https://docs.cursor.com", description: "Official Cursor documentation" },
      { name: "Anthropic Prompt Library", url: "https://docs.anthropic.com/en/prompt-library", description: "Curated prompts from Anthropic" },
      { name: "OpenAI Prompt Engineering Guide", url: "https://platform.openai.com/docs/guides/prompt-engineering", description: "Official prompting best practices" },
      { name: "cursor.directory", url: "https://cursor.directory", description: "Community-submitted cursor rules" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Cursor", url: "https://cursor.sh", description: "The leading AI-native IDE" },
      { name: "Bolt.new", url: "https://bolt.new", description: "Browser-based full-stack vibe coding" },
      { name: "v0 by Vercel", url: "https://v0.dev", description: "AI-generated React UI components" },
      { name: "Windsurf", url: "https://codeium.com/windsurf", description: "AI IDE with Cascade agent" },
    ],
  },
];
