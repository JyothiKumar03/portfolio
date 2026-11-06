// Card-level metadata for projects: what kind of thing it is, a one-line
// description, and its editorial cover (a tone + a short serif phrase + the
// two or three words drawn as quiet chips on the cover).
export type CoverTone = "sage" | "clay" | "slate" | "ink" | "stone"

export type Cover = {
  tone: CoverTone
  phrase: string
  chips: string[]
}

export type ProjectCard = {
  kind: string
  line: string
  year?: string
  cover?: Cover
}

export const projectCards: Record<string, ProjectCard> = {
  "just-jev-it": {
    kind: "Claude Code skill",
    line: "Finds LLM calls that only decide, and moves them to Jev.",
    year: "2026",
    cover: { tone: "sage", phrase: "Decide, don’t generate.", chips: ["noul", "choice", "score"] },
  },
  "agent-bridge": {
    kind: "MCP server",
    line: "Hands routine work from your main agent to cheaper workers.",
    year: "2026",
    cover: { tone: "ink", phrase: "One lead, many hands.", chips: ["opencode", "claude", "codex"] },
  },
  "agent-receipts": {
    kind: "CLI + dashboard",
    line: "Shows where your coding agents spent their tokens.",
    year: "2026",
    cover: { tone: "clay", phrase: "Where did the tokens go?", chips: ["tokens", "tools", "misses"] },
  },
  "live-slides": {
    kind: "Voice agent",
    line: "Presents a deck from your script and takes questions mid-talk.",
    year: "2026",
    cover: { tone: "slate", phrase: "The deck presents itself.", chips: ["script", "beats", "export"] },
  },
  "speech-ai-agent": {
    kind: "Voice agent",
    line: "Teaches Spanish through spoken conversation in five modes.",
    year: "2026",
    cover: { tone: "clay", phrase: "Hola, in real time.", chips: ["STT", "LLM", "TTS"] },
  },
  "aarogya-medical-support": {
    kind: "Support agent",
    line: "Answers insurance questions and escalates the rest to tickets.",
    year: "2026",
    cover: { tone: "sage", phrase: "Answer, or escalate.", chips: ["KB", "judge", "ticket"] },
  },
  "merchant-underwriting-agent": {
    kind: "Decision workflow",
    line: "Scores merchants and sends credit offers over WhatsApp.",
    year: "2026",
    cover: { tone: "stone", phrase: "The model never touches the number.", chips: ["score", "offer", "WhatsApp"] },
  },
  "research-paper-judge": {
    kind: "Multi-agent pipeline",
    line: "Reviews arXiv papers with six agents in two waves.",
    year: "2026",
    cover: { tone: "slate", phrase: "Six reviewers, two waves.", chips: ["novelty", "facts", "verdict"] },
  },
  "critic-agent": {
    kind: "Evaluation agent",
    line: "Designs a rubric first, then scores your work against it.",
    year: "2026",
    cover: { tone: "ink", phrase: "Rubric first, then the verdict.", chips: ["rubric", "gaps", "next step"] },
  },
  "dev-debugger": { kind: "RAG developer tool", line: "Answers debugging questions over your own codebase.", year: "2026" },
  "unified-llm-wrapper": { kind: "npm package", line: "One interface across LLM providers, with retries and fallbacks." },
  "prescription-ai-webapp": { kind: "Vision web app", line: "Turns handwritten prescriptions into readable text.", year: "2024" },
  "aws-dns-dashboard": { kind: "Cloud dashboard", line: "Monitors and edits AWS DNS records from one dashboard." },
  "ml-projects": { kind: "ML experiments", line: "Sentiment analysis and stock price prediction." },
  "shoe-store-clone": { kind: "Frontend build", line: "A responsive storefront landing page." },
  "samurai-stimulator": { kind: "Browser game", line: "A two-player fighting game in plain JavaScript." },
}

export const featuredSlugs = [
  "just-jev-it",
  "agent-bridge",
  "agent-receipts",
  "live-slides",
  "aarogya-medical-support",
  "merchant-underwriting-agent",
  "research-paper-judge",
  "speech-ai-agent",
  "critic-agent",
] as const

export function getProjectCard(slug: string): ProjectCard {
  return projectCards[slug] ?? { kind: "Project", line: "" }
}
