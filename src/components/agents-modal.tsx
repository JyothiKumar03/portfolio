"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"

const llmsContent = `# Jyothi Kumar Dummala

"Gaslighting LLMs | Translating Business <-> Tech | first principles"

Software Engineer + AI Engineer. Ships production-grade agents that do real work, not demos.

## Contact
- Email: jyothikumardummala@gmail.com
- GitHub: https://github.com/JyothiKumar03
- LinkedIn: https://www.linkedin.com/in/jyothikumard/
- Twitter/X: https://x.com/jyothikumar003
- Location: Hyderabad, India (open to remote or relocation)

## How he thinks
First principles. Traces unexpected system behavior to root cause rather than patching symptoms. Maps business requests back to the actual problem before writing code. Treats LLMs like APIs he doesn't fully control: output contracts matter, failure modes need explicit handling, context quality determines output quality more than any prompt trick.

Bridges both sides: translates business intent into technical architecture, and technical constraints back into product decisions.

## Current — ProdGain (Jun 2024 - Present)
- Long-running agents: 500+ tool calls, 90% accuracy, hours of runtime. Built via structured state, bounded tool contracts, explicit retry/fallback lanes.
- Sales CRM pipeline: 30k+ calls/emails/meetings processed, RAG chat + dashboard for insight delivery.
- 70%+ LLM performance improvement across client builds. Measured via evals, not guessed.
- Multi-LLM systems: OpenAI, Anthropic, DeepSeek, Gemini with project-specific eval frameworks.
- Full ownership: scoping, architecture, client calls, releases.

## Previous
- ADP (Jul-Oct 2023): Node.js backend, SQL automation, internal tooling
- Brainlox (2023): React.js + AWS, remote
- KMIT / Teleparadigm (Sep-Dec 2022): Event-driven drone control on AWS APIGateway, Lambda, DynamoDB, WebSockets

## Education
KMIT, Hyderabad — B.E. Computer Science, GPA 8.98 (2020-2024)

## Projects (real systems, not demos)
- Research Paper Judge: 6-agent concurrent eval system, PASS/FAIL with scored dimensions — github.com/JyothiKumar03/research-paper-judge
- Dev Debugger: RAG on codebases, vector search, AI debugging — github.com/JyothiKumar03/dev-debugger
- AI SEO Agent: Full content pipeline with research + optimization steps
- Critic Agent: Returns strong, direct criticism on learning context. Built because useful feedback is rare.
- AI Session Evaluation: Evaluates coding agent sessions — did it actually help or just sound good?
- Merchant Underwriting Agent: Structured agentic workflow for fintech underwriting decisions
- Mail AI: Agentic layer on email, performs actions not just summaries
- Claim Processor: AI workflow for health insurance claim documents
- Unified LLM Wrapper: 500+ npm downloads, multi-provider with retries/fallbacks

## Stack
AI: OpenAI, Anthropic, Gemini, DeepSeek, RAG, fine-tuning, context engineering, eval frameworks, LangChain, Vercel AI SDK
Backend: Node.js, Express, FastAPI, Python
Frontend: React, Next.js, TypeScript, Tailwind
DB: MongoDB, PostgreSQL, MySQL, Redis
Cloud: AWS, GCP, Azure, Docker, Kubernetes

## Writing
- "Reliability-first LLM systems" — evals, fallbacks, release guardrails for real traffic
- "Context engineering playbook" — structuring inputs before touching prompts
- "Agentic workflows at scale" — surviving 500+ tool calls with trustworthy output

## Looking for
Technical founding engineer or AI engineer. Needs real ownership, not a ticket queue. Interested in Research automation, Sales intelligence, GTM tooling. Works best when he can see the problem, shape the solution, and ship it.`

export function AgentsModal() {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  const handleCopy = () => {
    navigator.clipboard.writeText(llmsContent)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group w-full flex items-center justify-between gap-3 rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 font-mono shadow-[0_0_12px_var(--accent-glow)] transition-all hover:border-primary/60 hover:bg-primary/10 hover:shadow-[0_0_24px_var(--accent-glow)] active:scale-[0.99]"
        aria-label="View agent-readable context about Jyothi"
      >
        <div className="flex items-center gap-2.5">
          <span className="text-primary/70 font-bold text-sm">$</span>
          <span className="size-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_6px_var(--accent-glow)]" />
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-foreground/80 group-hover:text-foreground transition-colors">
            For Agents
          </span>
        </div>
        <span className="text-[0.625rem] text-muted-foreground/50 group-hover:text-primary/60 transition-colors tracking-wider">
          /llms.txt ↗
        </span>
      </button>

      {mounted && open && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
        >
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
          <div className="relative w-full max-w-2xl max-h-[80vh] flex flex-col rounded-xl border border-primary/30 bg-background shadow-[0_0_60px_var(--accent-glow)] overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center justify-between border-b border-border/60 bg-muted/30 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="size-3 rounded-full bg-red-500/70" />
                  <span className="size-3 rounded-full bg-yellow-500/70" />
                  <span className="size-3 rounded-full bg-green-500/70" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">jyothikumar.dev/llms.txt</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="rounded-md border border-border/60 px-2.5 py-1 font-mono text-xs text-muted-foreground transition hover:border-primary/40 hover:text-primary"
                >
                  {copied ? "copied!" : "copy"}
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex size-6 items-center justify-center rounded-md text-muted-foreground transition hover:text-foreground"
                  aria-label="Close"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>
            {/* Content */}
            <div className="overflow-y-auto p-5 font-mono text-xs leading-relaxed text-foreground/80">
              <pre className="whitespace-pre-wrap break-words">{llmsContent}</pre>
            </div>
            <div className="border-t border-border/60 bg-muted/20 px-4 py-2 font-mono text-[10px] text-muted-foreground/60">
              <span className="text-primary/60">$</span> This file is for AI agents, LLMs, and crawlers. Human? Hello anyway.
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
