export const site = {
  name: "Jyothi Kumar Dummala",
  title: "Software Engineer / AI Engineer",
  description:
    `I build production-grade GenAI products end-to-end - provider orchestration, prompting + context engineering, RAG, fine-tuning, agentic workflows, and evaluation frameworks. \n I love to understand the domain, map the problem to a reliable solution and scale it!`,
  interest:`I have experience in shipping agents to sales, market research and GTM domains. Where I map the problems, ship agents (diff architecture agents) and then deliver the solution!`,
  focus: "Ownership, collaboration, and measurable business outcomes.",
  tagline: "Building agents that close deals. Shipping in Research, Sales, GTM domains.",
  email: "jyothikumardummala@gmail.com",
  location: "Hyderabad, India",
  social: {
    linkedin: "https://www.linkedin.com/in/jyothikumard/",
    github: "https://github.com/JyothiKumar03",
    twitter: "https://x.com/jyothikumar003",
  },
} as const;

export const highlights = [
  {
    title: "Multi-LLM integrations",
    description:
      "OpenAI, Anthropic, DeepSeek, Gemini with project-specific evaluation frameworks.",
  },
  {
    title: "90%+ accuracy lift",
    description:
      "Advanced prompting, context management, RAG, and fine-tuning strategies.",
  },
  {
    title: "Long-running agents",
    description:
      "500+ tool calls with 90% accuracy via rigorous context engineering.",
  },
  {
    title: "Unified LLM Wrapper",
    description: "Agentic wrapper with retries/fallbacks and 500+ downloads.",
  },
  {
    title: "Voice-first AI tutor",
    description:
      "Hands-free Spanish tutor with real-time STT → LLM → TTS pipeline and 5 teaching modes.",
  },
];

export const capabilities = [
  "Product roadmaps",
  "Design reviews",
  "Full-stack shipping",
  "AI systems",
  "Eval + QA loops",
];

export const experience = [
  {
    company: "InspireLabs",
    role: "AI Solutions",
    location: "",
    dates: "Present",
    points: ["Driving AI solutions at InspireLabs."],
  },
  {
    company: "ProdGain",
    role: "Software Engineer (AI / Full-stack)",
    location: "Hyderabad",
    dates: "Jun 2024 - Feb 2026",
    points: [
      "Shipped AI agents on OpenAI, Anthropic, DeepSeek and Gemini inside full-stack MERN apps, each with its own eval framework.",
      "Built a sales CRM pipeline that processes 30k+ calls, emails and meetings and delivers insights through chat and a dashboard (RAG, ETL, background jobs).",
      "Deployed long-running agents that work for hours and make 500+ tool calls, with 90% accuracy in deliverables, through context engineering.",
      "Improved LLM performance and accuracy by 70%+ with prompting, context management, RAG and fine-tuning.",
      "Set up CI/CD, AI observability pipelines, alerting, and training and self-training loops for agent-specific use cases.",
      "Mapped gaps in each idea to client needs and owned the build end to end, from AI engineering to full-stack delivery.",
    ],
  },
  {
    company: "ADP",
    role: "Software Developer Intern",
    location: "Hyderabad",
    dates: "Jul 2023 - Oct 2023",
    points: [
      "Built backend CRUD routes in Node.js.",
      "Automated SQL queries and API calls; improved code structure with JS, jQuery, SQL, HTML, CSS.",
      "Collaborated with QA and product to deliver internal tooling updates.",
      "Refactored legacy modules for maintainability and clearer data flow.",
    ],
  },
  {
    company: "Brainlox",
    role: "Full Stack Engineer (Remote)",
    location: "Remote",
    dates: "Feb 2023 - Mar 2023",
    points: [
      "Developed React.js UI pages and integrated with AWS services.",
      "Translated design requirements into responsive UI components.",
      "Shipped features with cloud integrations and clean release notes.",
    ],
  },
  {
    company: "KMIT - Teleparadigm Networks",
    role: "R&D Intern",
    location: "Hyderabad",
    dates: "Sep 2022 - Dec 2022",
    points: [
      "Built an event-driven drone control app on AWS API Gateway, Lambda, DynamoDB and WebSockets.",
      "Prototyped event flows, telemetry, and interactive demos.",
      "Documented architecture and findings for research review.",
    ],
  },
] as const;

export type Project = {
  slug: string;
  name: string;
  summary: string;
  highlights: string[];
  problem: string;
  approach: string;
  value: string;
  snapshot: string;
  stack: string[];
  role: string[];
  outcomes: string[];
  buildNotes: string[];
  roadmap: string[];
  link: string;
};

export const projects: Project[] = [
  {
    slug: "aarogya-medical-support",
    name: "Aarogya — Medical Customer Support",
    summary:
      "AI chatbot for a health insurance company with a custom knowledge-base, end-to-end ticket handling with real-time email notifications, and web-search grounded to admin-curated domains.",
    highlights: [
      "Custom KB + pgvector two-stage retrieval",
      "Full ticket lifecycle with Resend emails",
      "Domain-grounded web search via Tavily",
      "Self-improving KB from resolved tickets",
    ],
    problem:
      "Health insurance support teams drown in repetitive queries — agents waste time on FAQs while complex issues get delayed and customers never hear back reliably.",
    approach:
      "Built an AI agent (Claude Haiku 4.5) with a single `smart_search` tool that first hits a pgvector knowledge-base (with an LLM judge to verify ≥60% relevance), falls back to Tavily web search scoped to admin-approved domains, and escalates to a ticket flow that sends confirmation + resolution emails via Resend. Resolved tickets feed back into the KB.",
    value:
      "Customers get instant, accurate answers for known topics; complex issues are escalated with a full audit trail; every resolved ticket makes the system smarter over time.",
    snapshot:
      "Chat interface powered by Claude Haiku with two-stage retrieval: pgvector semantic match → LLM confidence judge → guardrailed web fallback → ticket escalation with email lifecycle. Admin dashboard to manage KB, domains, and tickets.",
    stack: [
      "Bun + Express + TypeScript (backend)",
      "Next.js 16 App Router (frontend)",
      "Claude Haiku 4.5",
      "OpenAI text-embedding-3-small",
      "PostgreSQL + pgvector",
      "Prisma ORM",
      "Resend (email)",
      "Tavily (web search)",
      "shadcn/ui",
    ],
    role: [
      "Agentic system design",
      "Two-stage RAG pipeline",
      "Ticket + email workflow",
      "Admin dashboard",
      "Full-stack build",
    ],
    outcomes: [
      "Instant answers for KB-covered queries",
      "End-to-end ticket lifecycle with email confirmation + resolution",
      "Domain-grounded web fallback with source transparency",
      "Self-improving knowledge-base from resolved tickets",
      "Audit trail on every search and escalation",
    ],
    buildNotes: [
      "One-tool design (`smart_search` only) keeps agent behavior predictable and testable.",
      "pgvector semantic search → LLM judge (≥60% confidence threshold) before returning KB answers.",
      "Admin-curated domain list auto-binds to Tavily at request time — no redeployment needed.",
      "Resend handles ticket confirmation email immediately on creation, resolution email on close.",
      "Resolved ticket summaries are admin-reviewed before being added to the KB to prevent drift.",
    ],
    roadmap: [
      "Multi-language support for regional insurance markets.",
      "SLA tracking and escalation alerts for overdue tickets.",
      "Analytics dashboard for query patterns and KB coverage gaps.",
    ],
    link: "https://github.com/JyothiKumar03/Aarogya---Medical-customer-support",
  },
  {
    slug: "research-paper-judge",
    name: "Research Paper Judge",
    summary:
      "Multi-agent AI system that evaluates arXiv research papers and generates peer-review-style reports with PASS/FAIL verdicts and scored dimensions.",
    highlights: [
      "6 specialized evaluation agents",
      "Wave-based concurrent execution",
      "Weighted scoring: Consistency 30%, Novelty 20%",
      "FastAPI + Streamlit + PostgreSQL",
    ],
    problem:
      "Manual peer review is slow, inconsistent, and doesn't scale — reviewers apply different rubrics, miss key dimensions, and create bottlenecks.",
    approach:
      "Built a multi-agent pipeline with two sequential waves: Wave 1 runs Grammar, Novelty (with live Google Search), and Fact-Check agents concurrently; Wave 2 runs Consistency and Authenticity agents in parallel; a final Evaluator agent applies weighted scoring to produce a PASS/FAIL verdict.",
    value:
      "Structured, explainable peer-review reports in seconds — traceable per-dimension scores with rationale, not just a verdict.",
    snapshot:
      "Accepts an arXiv URL, retrieves paper metadata, extracts PDF content page-by-page, deploys six specialized AI agents across two waves, and outputs a scored review report with verdict.",
    stack: ["Python", "FastAPI", "PostgreSQL (NeonDB)", "Streamlit", "OpenRouter", "Gemini", "pymupdf4llm"],
    role: ["Multi-agent system design", "LLM orchestration", "Evaluation pipeline", "Full-stack build"],
    outcomes: [
      "PASS/FAIL verdicts with per-dimension scores",
      "Six specialized agents covering grammar, novelty, fact-checking, consistency, authenticity",
      "Wave-based concurrency for faster evaluation",
      "Traceable scoring rationale per dimension",
    ],
    buildNotes: [
      "Wave 1 agents run concurrently — Grammar, Novelty (Gemini + Google Search), Fact-Check.",
      "Wave 2 agents run after Wave 1 completes — Consistency and Authenticity in parallel.",
      "Final Evaluator agent applies weighted scoring: Consistency 30%, Authenticity 25%, Novelty 20%, Fact-Check 15%, Grammar 10%.",
      "pymupdf4llm for page-level PDF extraction with structured metadata.",
      "NeonDB (PostgreSQL) for storing paper metadata and evaluation results.",
    ],
    roadmap: [
      "Multi-paper batch processing and comparison.",
      "Fine-tuned judge model on domain-specific data.",
      "Export to structured review formats.",
    ],
    link: "https://github.com/JyothiKumar03/research-paper-judge",
  },
  {
    slug: "dev-debugger",
    name: "Dev Debugger",
    summary:
      "Full-stack RAG-powered developer tool that ingests codebases, runs vector search, and answers debugging queries with AI — built on MERN with a dockerized backend.",
    highlights: [
      "RAG endpoint with vector search",
      "Codebase ingestion pipeline",
      "Dockerized Node.js + Express API",
      "Next.js + TypeScript frontend",
    ],
    problem:
      "Debugging across large codebases is slow — devs context-switch between docs, search, and code without a unified interface that understands the project.",
    approach:
      "Built a full MERN stack tool with an ingestion pipeline (POST /ingest) that indexes codebases into a vector store, a search layer (GET /search) with filters by username, project, and producer, and a RAG endpoint (POST /ai) that runs tool-call to vector search and returns an AI-generated answer.",
    value:
      "A project-aware debugging assistant that answers questions grounded in the actual codebase — not generic docs.",
    snapshot:
      "Ingest a codebase once, then query it: vector search returns relevant chunks, the RAG endpoint grounds the AI response in real code context.",
    stack: ["Next.js", "TypeScript", "Node.js", "Express", "Docker", "Vector Search", "RAG", "Tailwind CSS"],
    role: ["Product design", "RAG pipeline", "API design", "Full-stack build", "Docker setup"],
    outcomes: [
      "Codebase-aware AI responses via RAG",
      "Vector search with multi-field filtering",
      "Dockerized backend for easy deployment",
      "Clean REST API: /ingest, /search, /ai",
    ],
    buildNotes: [
      "POST /ingest accepts a JSON file or directory and indexes it into the vector store.",
      "GET /search supports filters: query, username, projectName, producer — returns ranked chunks.",
      "POST /ai runs a tool-call to vector search, then generates a grounded AI response.",
      "Docker Compose setup for backend — npm run dev for local dev across frontend and backend.",
      "shadcn-style component system on the frontend for clean DX.",
    ],
    roadmap: [
      "IDE plugin integration for in-editor querying.",
      "Multi-repo cross-project search.",
      "Error pattern library and replay mode.",
    ],
    link: "https://github.com/JyothiKumar03/dev-debugger",
  },
  {
    slug: "unified-llm-wrapper",
    name: "Unified LLM Wrapper",
    summary:
      "A developer-friendly agentic wrapper across providers with reasoning, retries, and fallbacks.",
    highlights: [
      "500+ downloads",
      "Multi-provider: OpenAI, Anthropic, Gemini",
      "Reliability patterns for production GenAI",
    ],
    problem:
      "GenAI apps break when providers fail, outputs drift, and retries aren't standardized.",
    approach:
      "Designed a unified interface with routing, retries, and fallbacks built-in.",
    value:
      "Faster experimentation, less integration glue, and more reliable production behavior.",
    snapshot:
      "A reliability-first wrapper that standardizes provider calls, retries, and fallbacks so teams can ship without glue code.",
    stack: ["TypeScript", "Node.js", "LLM APIs", "SDK design"],
    role: ["Product design", "API design", "Reliability", "Evaluation"],
    outcomes: [
      "500+ downloads",
      "Faster provider switching",
      "Fewer runtime failures",
    ],
    buildNotes: [
      "Unified request/response contract across providers.",
      "Retry + fallback policies tuned per provider.",
      "Evaluation hooks to compare outputs across models.",
      "Usage-focused docs and examples for fast adoption.",
    ],
    roadmap: [
      "Streaming + tool-calling plugins.",
      "Smarter cost/latency routing policies.",
      "Packaged eval suites and templates.",
    ],
    link: "",
  },
  {
    slug: "prescription-ai-webapp",
    name: "Prescription AI Webapp",
    summary:
      "Decodes handwritten prescriptions into clear text using a vision model + MERN stack.",
    highlights: [
      "Vision model extraction",
      "Readable post-processing",
      "User-friendly workflow",
    ],
    problem: "Handwritten prescriptions are hard to read and error-prone.",
    approach:
      "Used a vision-capable model with a web workflow for clean, readable output.",
    value: "Improves clarity and reduces errors for patients and pharmacies.",
    snapshot:
      "An end-to-end workflow that turns scanned prescriptions into clean, readable summaries with verification steps.",
    stack: ["MERN", "Gemini Vision", "Post-processing"],
    role: ["Full-stack build", "Model integration", "UX flow"],
    outcomes: ["Readable output", "Lower error risk", "End-to-end workflow"],
    buildNotes: [
      "Vision extraction with a validation layer.",
      "Post-processing rules to normalize medicine names.",
      "Review UI for fast approval and export.",
    ],
    roadmap: [
      "Confidence scoring per line item.",
      "Pharmacy-ready export formats.",
      "Multi-language support.",
    ],
    link: "",
  },
  {
    slug: "aws-dns-dashboard",
    name: "AWS DNS Dashboard",
    summary:
      "DNS monitoring dashboard using MERN + AWS SDK with CRUD operations.",
    highlights: [
      "Centralized DNS monitoring",
      "AWS SDK integration",
      "Clean CRUD workflows",
    ],
    problem: "DNS visibility and updates were fragmented across tools.",
    approach: "Built a single dashboard with MERN and AWS SDK integrations.",
    value: "Gives teams a clear, centralized view of DNS state.",
    snapshot:
      "A single-pane dashboard for DNS records with fast CRUD and visibility.",
    stack: ["MERN", "AWS SDK", "Monitoring"],
    role: ["Dashboard UX", "Cloud integration", "CRUD flows"],
    outcomes: ["Centralized ops view", "Faster updates", "Cleaner audit trail"],
    buildNotes: [
      "AWS SDK integration with clean service boundaries.",
      "Audit-friendly change tracking.",
      "Latency-aware refresh cycle.",
    ],
    roadmap: [
      "Alerts and anomaly detection.",
      "Role-based access control.",
      "Multi-account support.",
    ],
    link: "",
  },
  {
    slug: "shoe-store-clone",
    name: "Shoe Store Clone",
    summary:
      "Responsive landing page built with Tailwind CSS, React, and TypeScript.",
    highlights: ["Modern UI", "Mobile-first layout", "Fast iteration"],
    problem: "Needed a clean retail UI baseline.",
    approach: "Built a responsive landing page with Tailwind and React.",
    value: "Strong baseline for retail product presentation.",
    snapshot:
      "A clean, conversion-focused landing page built for fast iteration.",
    stack: ["React", "Tailwind CSS", "TypeScript"],
    role: ["UI design", "Responsive layout", "Component polish"],
    outcomes: ["Reusable UI baseline", "Mobile-first UX"],
    buildNotes: [
      "Componentized hero, grid, and CTA blocks.",
      "Responsive breakpoints for all key screens.",
      "Performance-friendly assets.",
    ],
    roadmap: ["Cart flow", "Product detail page", "Motion polish"],
    link: "",
  },
  {
    slug: "ml-projects",
    name: "ML Projects",
    summary: "Sentiment analysis + stock price prediction with Python tooling.",
    highlights: [
      "Flask + Python",
      "Twitter-scraped sentiment data",
      "Live data pipelines",
    ],
    problem: "Needed model-driven insights from noisy real-world data.",
    approach: "Built pipelines and models for sentiment and stock prediction.",
    value: "Demonstrated end-to-end ML modeling and evaluation skills.",
    snapshot:
      "Two applied ML builds from data ingestion to evaluation, focused on real-world signals.",
    stack: ["Python", "Flask", "Pandas", "Numpy"],
    role: ["Data pipelines", "Modeling", "Evaluation"],
    outcomes: ["Sentiment insights", "Stock prediction experiments"],
    buildNotes: [
      "Twitter sentiment pipeline and dataset hygiene.",
      "Flask inference endpoints for quick demos.",
      "Feature engineering + evaluation metrics.",
    ],
    roadmap: [
      "Model monitoring",
      "Better data labeling",
      "Realtime dashboards",
    ],
    link: "",
  },
  {
    slug: "samurai-stimulator",
    name: "Samurai Stimulator",
    summary: "Dual-player browser game built with JavaScript, HTML, CSS.",
    highlights: [
      "Two-player gameplay",
      "Fast feedback loop",
      "Classic web stack",
    ],
    problem: "Explored event-driven UI and gameplay mechanics.",
    approach: "Built a lightweight game with vanilla JS and DOM updates.",
    value: "Showcases interaction design and performance on the web.",
    snapshot:
      "A two-player game to explore event loops, feedback, and responsive UI.",
    stack: ["JavaScript", "HTML", "CSS"],
    role: ["Gameplay logic", "Performance", "UI polish"],
    outcomes: ["Interactive gameplay", "Fast iteration loop"],
    buildNotes: [
      "Keyboard controls with smooth input handling.",
      "Hit detection, scoring, and animation loop.",
      "Lean DOM updates for performance.",
    ],
    roadmap: ["Sound effects", "Mobile controls", "Leaderboard"],
    link: "",
  },
  {
    slug: "speech-ai-agent",
    name: "Voice Tutor — Spanish",
    summary:
      "Voice-first AI agent for learning Spanish through natural conversation — real-time STT, LLM orchestration, TTS, 5 teaching modes, and persistent sessions.",
    highlights: [
      "Voice-first — no typing, just talk",
      "5 modes: lesson, quiz, roleplay, chat, doubt resolution",
      "Real-time STT → LLM → TTS pipeline",
      "Admin CRUD UI for lessons and quizzes",
      "Per-turn observability (STT, LLM, TTS, e2e latency)",
    ],
    problem:
      "Language apps rely on tapping buttons and filling blanks — learners never actually speak, so they can't build real conversation skills.",
    approach:
      "Built a voice-first agent with Deepgram STT → GPT-4o tool dispatch → Cartesia TTS, running over LiveKit WebRTC. The agent switches between 5 modes (casual chat, structured lessons, quizzes, roleplay conversation, doubt resolution), semantically grades answers via LLM, persists sessions to Neon Postgres, and logs per-turn latency metrics.",
    value:
      "Learners practice real spoken conversation, not screen-tapping. Every turn feels like talking to a real tutor — and the system gets smarter about each learner's progress.",
    snapshot:
      "User speaks → Deepgram STT → GPT-4o picks a tool (lesson, quiz, roleplay, etc.) → Cartesia TTS talks back — all over LiveKit WebRTC with barge-in support, persistent sessions, and an admin UI for CRUD on lessons, quizzes, and questions.",
    stack: [
      "Python (FastAPI)",
      "Next.js + TypeScript",
      "LiveKit Cloud (WebRTC)",
      "Deepgram (STT)",
      "Cartesia (TTS)",
      "OpenAI GPT-4o",
      "Neon Postgres",
    ],
    role: [
      "Agentic system design",
      "Voice pipeline (STT → LLM → TTS)",
      "Full-stack build",
      "Admin CRUD UI",
      "Per-turn observability",
    ],
    outcomes: [
      "Hands-free spoken conversation practice",
      "5 teaching modes with smart LLM grading",
      "Persistent sessions with resume capability",
      "Admin CRUD interface for content management",
      "Per-turn latency metrics (STT, LLM TTFT, TTS TTFB, e2e)",
    ],
    buildNotes: [
      "Deepgram nova-3 for STT, Cartesia aura-2 for TTS — both chosen for speed.",
      "GPT-4o orchestrates 9 tools: start lesson/quiz, submit answer, track mistakes, score progress, etc.",
      "Answers semantically graded via LLM — not keyword-matched.",
      "Session summaries feed personalization; pick up where you left off.",
      "Barge-in cuts off TTS and agent listens again immediately.",
      "Every turn logs STT text, LLM TTFT, TTS TTFB, and e2e latency with P50/P95 at session end.",
    ],
    roadmap: [
      "Multi-language support (beyond Spanish).",
      "Pronunciation scoring and feedback.",
      "Adaptive difficulty based on learner performance.",
    ],
    link: "https://github.com/JyothiKumar03/speech-ai-agent",
  },
  {
    slug: "just-jev-it",
    name: "just-jev-it",
    summary:
      "A Claude Code skill that audits an existing agent or codebase for LLM calls that only make a decision, and moves them to TypeSafe AI's Jev typed-decision model.",
    highlights: [
      "Audit → Plan → Execute → Validate",
      "Approval gate before any edit",
      "needs_review option on every choice",
      "Real vs simulated validation, always labelled",
    ],
    problem:
      "Most agent codebases call a frontier LLM for jobs that are really classification — route this ticket, is this phishing, how severe is this — then re-parse free text back into an enum. That is slow, expensive, and fails on malformed output.",
    approach:
      "The skill greps for LLM call sites and the if/switch branches that consume them, scores each one against a fit test (decides vs creates, closed answer space, one focused judgment, fits in state), writes before/after migrations to Jev's noul / choice / score primitives, stops for approval, applies only the approved edits, then validates with a case file against the real API or a clearly labelled simulated run.",
    value:
      "Decision points move from seconds-long generative calls to typed answers with probabilities, while prose and reasoning stay on the LLM. Nothing changes without a reviewed plan.",
    snapshot:
      "Installed as a Claude Code plugin from the jk-skills marketplace. Ships SKILL.md, three references (Jev overview, fit heuristics, integration patterns for Python SDK, LangChain and raw REST) and a Python validator that reports real, simulated or mixed mode per case.",
    stack: ["Claude Code skill", "Python validator", "TypeSafe Jev API", "Python SDK / LangChain / REST patterns"],
    role: ["Skill design", "Fit heuristics", "Validation tooling", "Documentation"],
    outcomes: [
      "Findings table with a specific reason per call site",
      "Before/after plan with the accessor convention per SDK",
      "Validator that never presents a simulated run as measured",
      "One-command install: /plugin install just-jev-it@jk-skills",
    ],
    buildNotes: [
      "Every choice question gets a needs_review option, because Jev cannot abstain on a forced choice.",
      "The confidence check stays after migration: the schema guarantees shape, not correctness.",
      "Disguised cases (an enum later interpolated into another prompt) are flagged as ambiguous, not forced into a verdict.",
      "Benchmarks in the references carry their caveats; the 193x headline is never quoted as typical.",
    ],
    roadmap: ["Run the validator against live Jev on labelled sets.", "Shadow-mode diff report: LLM vs Jev decisions side by side."],
    link: "https://github.com/JyothiKumar03/just-jev-it",
  },
  {
    slug: "agent-receipts",
    name: "trace-ur-token",
    summary:
      "A local-first CLI and dashboard that reads Claude Code, Codex and OpenCode transcripts and shows where tokens went, which tools and skills ran, and where instructions were probably missed.",
    highlights: ["Claude Code + Codex + OpenCode", "Runs fully local", "Token burn by model", "Instruction-miss signals"],
    problem:
      "Coding-agent transcripts hold an exact record of cost and behaviour, but each provider stores it differently and none gives a cross-agent view. Builders using two or three agents can't see what they are paying for.",
    approach:
      "One dependency-free command scans the provider-owned transcript folders, runs each through a defensive source adapter, normalises models, tokens, tool and skill calls into a portable trace-token-report.json, and opens a dashboard built around four questions: who used the tokens, what did they do, when do they work best, and where did they miss explicit instructions.",
    value:
      "Waste becomes visible without uploading a single prompt or line of source. Heuristics are labelled as signals, not scores, so the report stays honest.",
    snapshot: "Claude Code JSONL, Codex JSONL and OpenCode JSON → adapters → normaliser → heuristic analyser → report JSON → dashboard.",
    stack: ["TypeScript", "Node CLI (zero dependencies)", "JSON/JSONL adapters", "Single-page dashboard"],
    role: ["Product brief", "Adapter + normaliser design", "Heuristics", "Dashboard build"],
    outcomes: [
      "Total, input and output tokens by model",
      "Tool and skill call counts per session",
      "Suspected instruction misses with the evidence shown",
      "Detours and repeated tool use as cost-recovery signals",
    ],
    buildNotes: [
      "Adapters only read known transcript roots and parse defensively.",
      "A miss is flagged only when constraint language and a dismissal signal appear together.",
      "No raw source, prompts or transcripts leave the machine.",
    ],
    roadmap: ["Hydrate the dashboard from an imported report.", "Local SQLite history for trends.", "Opt-in, redacted team aggregate."],
    link: "https://github.com/JyothiKumar03/agent-receipts",
  },
  {
    slug: "live-slides",
    name: "LiveSlides",
    summary:
      "A voice presenter agent: give it an approved script and it plans the deck, narrates it beat by beat, calls slide tools on cue, takes audience questions and resumes from the exact checkpoint.",
    highlights: ["Script → beats → slides", "Pause for questions, resume on the beat", "Export to PPTX, PDF, HTML", "Postgres or JSON persistence"],
    problem:
      "Slide decks are static while the talk around them isn't. Presenters lose their place on questions, and AI slide tools invent content the speaker never approved.",
    approach:
      "A planner turns the script into faithful beats, each with narration and a full slide spec (charts only from numbers the script states). The presenter agent calls show_slide per beat; narration-done advances exactly one beat, so speech speed sets the pace. A spoken or typed question pauses progression, the answer is grounded in the script, current beat and a running context summary, then the agent resumes the saved beat.",
    value:
      "A deck that presents itself without drifting from the approved script, and leaves behind an editable PowerPoint with narration as speaker notes.",
    snapshot: "Next.js presenter UI + Express agent runtime over WebSockets, shared Zod schemas, prompts loaded from files, and an offline deterministic planner when no model key is set.",
    stack: ["Next.js", "Express", "TypeScript", "WebSockets", "Zod", "OpenAI", "Neon Postgres", "Resend / SMTP"],
    role: ["Agent runtime", "Tool design", "Presenter UI", "Export pipeline"],
    outcomes: [
      "Beat-accurate narration with barge-in",
      "Voice-approved slide amendments with before/after preview",
      "Allowlisted email sending with UI confirmation",
      "PPTX, PDF, self-contained HTML and JSON export",
    ],
    buildNotes: [
      "The slide stage stays hidden until the agent calls show_slide.",
      "Without a model key, planning stays deterministic: one beat per paragraph, nothing invented.",
      "Sessions, tool calls, summaries and deck snapshots are persisted independently.",
    ],
    roadmap: ["Audience devices that send questions.", "Shareable live sessions."],
    link: "https://github.com/JyothiKumar03/live-slides",
  },
  {
    slug: "agent-bridge",
    name: "agent-spawnkit",
    summary:
      "An MCP server that lets a premium coding agent hand routine work to cheaper agents on other providers — stateful sessions, parallel workers, optional git worktrees.",
    highlights: ["Works in any MCP client", "Stateful worker sessions", "Parallel workers in worktrees", "One-line install"],
    problem:
      "Paying top-tier rates for boilerplate, renames and 'read these 20 files' burns the orchestrator's tokens and fills its context with noise.",
    approach:
      "spawn_open_session starts a worker (OpenCode, Claude or Codex), spawn_send hands it a task and returns a short result, and follow-ups to the same task_id keep full context. Workers run headless, in parallel, each optionally isolated in its own git worktree; a shared plan records each agent's responsibility.",
    value:
      "The expensive agent stays on the work that needs it, the heavy context stays in the worker, and only a distilled summary comes back.",
    snapshot: "Your agent → MCP → agent-spawnkit → opencode serve over HTTP, or claude -p / codex exec as subprocesses. Ten spawn_* tools, self-documenting.",
    stack: ["TypeScript", "MCP", "OpenCode / Claude / Codex", "git worktrees", "npx"],
    role: ["Protocol design", "Session lifecycle", "Worktree isolation", "CLI installer"],
    outcomes: [
      "claude mcp add agent-spawnkit -- npx -y agent-spawnkit",
      "Sync calls return in up to 60s; longer work runs async with a desktop ping",
      "Sessions survive restarts",
      "Self-heals when the worker binary auto-updates",
    ],
    buildNotes: [
      "Any-to-any: the orchestrator and worker can be different engines.",
      "Zero repo pollution: no config written into the project.",
      "Worktrees are opt-in, only for workers editing the same files.",
    ],
    roadmap: ["Cost reporting per worker.", "More worker engines."],
    link: "https://github.com/JyothiKumar03/agent-bridge",
  },
  {
    slug: "critic-agent",
    name: "Critic Agent",
    summary:
      "Evaluates a learner's code, brief or draft against a rubric it designs first, then returns scores, the top three gaps and one next best step.",
    highlights: ["Rubric planned before scoring", "Per-dimension evidence", "Score consistency flag", "Bun + Next.js + Neon"],
    problem:
      "Single-call AI feedback is vague and drifts toward whatever score the model already wants to give.",
    approach:
      "Two calls. A planner designs the rubric for the artifact type — dimensions, weights and guardrails against over- and under-scoring — without seeing the artifact. A scorer then applies that fixed rubric and returns structured scores with evidence. A consistency check flags a reported score that disagrees with the weighted average.",
    value: "Feedback a learner can act on in the next revision, and a scorer that can't quietly move the goalposts.",
    snapshot: "Pick an artifact type, paste it, add context, and get an overall 1–5 score with confidence, per-dimension gaps and one precise next step.",
    stack: ["Bun", "Express + TypeScript", "Next.js 14", "Vercel AI SDK", "gpt-4.1-mini", "Neon Postgres"],
    role: ["Agent design", "Rubric prompting", "API + UI build"],
    outcomes: ["Overall score with confidence", "Top-3 gaps ordered by impact", "One next best step", "Consistency flag on drift"],
    buildNotes: ["Planner and scorer are separate calls on purpose.", "Artifacts are 50–8,000 characters; context up to 500."],
    roadmap: ["Progress tracking across revisions.", "Personalised learning plans."],
    link: "https://github.com/JyothiKumar03/critic-agent",
  },
  {
    slug: "merchant-underwriting-agent",
    name: "Merchant Underwriting Agent",
    summary:
      "Scores merchants on their own platform data, computes credit and insurance offers, and sends them over WhatsApp — the model writes the explanation, never the number.",
    highlights: ["Deterministic 5-part score", "Credit + insurance offers", "WhatsApp ACCEPT / REJECT flow", "Template fallback if the model fails"],
    problem:
      "Which merchants deserve a credit line or an insurance product, and how do you tell them without sounding like a bank rejection letter?",
    approach:
      "Hard gates first (tenure ≥ 6 months, avg GMV ≥ Rs.50,000, refunds < 10%). Then five weighted sub-scores — GMV growth 25%, stability 20%, loyalty 20%, quality 20%, engagement 15% — map to a tier and an offer. One model call writes a merchant-friendly WhatsApp message and an analyst note, schema-checked with Zod. Twilio delivers it; a webhook handles the reply and issues a NACH mandate reference.",
    value: "Every decision is reproducible from the numbers, and the offer still goes out with a templated rationale if both model providers are down.",
    snapshot: "Merchant cards move one way: not underwritten → underwritten → offer sent → mandate active. The UI only shows the next valid action.",
    stack: ["Bun", "TypeScript", "PostgreSQL (Neon)", "Twilio WhatsApp", "OpenAI + Anthropic fallback", "Zod"],
    role: ["Scoring engine", "Offer logic", "Messaging workflow", "Dashboard"],
    outcomes: ["Tiered credit limits and rates", "Category-priced insurance premiums", "Full WhatsApp audit log", "Mandate generated on ACCEPT"],
    buildNotes: ["The AI never touches a number.", "One JSONB row holds the score breakdown, offers and both rationales."],
    roadmap: ["Evaluation traces.", "Human review loop for tier-3 offers."],
    link: "https://github.com/JyothiKumar03/merchant-underwriting-agent",
  },
] as const;

export const projectSlugs = projects.map((project) => project.slug);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const skills = [
  {
    category: "AI",
    items: ["LLMs", "OpenAI", "Anthropic", "Context engineering", "Prompt engineering", "Fine-tuning", "Agents", "RAG", "LangChain", "Vercel AI SDK", "LiveKit"],
  },
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "C/C++", "SQL", "HTML", "CSS", "Data structures and algorithms"],
  },
  {
    category: "Web",
    items: ["Node.js", "React.js", "Express.js", "Next.js", "FastAPI"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "DBMS"],
  },
  {
    category: "Cloud and DevOps",
    items: ["AWS", "Bedrock", "GCP", "Microsoft Azure", "Docker", "Kubernetes", "Jenkins", "Git", "GitHub"],
  },
] as const;

export const education = {
  school: "Keshav Memorial Institute of Technology (KMIT)",
  place: "Hyderabad, India",
  degree: "Bachelor's in Computer Engineering",
  gpa: "8.98",
  dates: "Dec 2020 - Jun 2024",
} as const;

// Figures from the résumé, worded once and reused as-is.
export const proof = [
  { figure: "30k+", text: "calls, emails and meetings processed by a sales CRM pipeline" },
  { figure: "500+", text: "tool calls in one agent run, with 90% accurate deliverables" },
  { figure: "70%+", text: "better LLM accuracy from prompting, context, RAG and fine-tuning" },
] as const;

export type Post = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  readTime: string;
  status: string;
  body: string;
};

export const posts: Post[] = [
  {
    slug: "just-jev-it",
    title: "Just Jev it: moving agent decisions off the LLM",
    summary:
      "Why I built a Claude Code skill that finds the LLM calls in your agent that only make a decision, and moves them to Jev's typed answers — with an approval gate and honest validation.",
    publishedAt: "November 6, 2026",
    readTime: "6 min read",
    status: "Published",
    body: `Open almost any agent codebase and you'll find the same shape over and over. A frontier model gets called with a prompt that ends in "respond with exactly one of: low, medium, high". The reply comes back as free text. Then there's a line that lowercases it, strips it, checks it against a set, and a fallback branch for when the model decided to answer "Medium priority." instead.

That call isn't generating anything. It's making a decision, and we're paying generation prices, waiting generation latency, and writing defensive parsing code because the tool we picked can return any string at all.

I built **just-jev-it** to find those calls and move them to a model that was built for decisions.

## What Jev is, in one paragraph

Jev is TypeSafe AI's first "System One" model. You send it a \`state\` (the thing being judged, as text or JSON) and a map of named questions. Each question is one of three types: \`noul\` (a yes/no probability), \`choice\` (pick one of up to 255 named options) or \`score\` (an ordered scale of 2 to 10 levels). It returns typed answers with probabilities and a confidence value, all questions computed in parallel in one request. It never writes prose, code or explanations. The mental model I use: **the AI decides, software controls.**

## What "can't hallucinate" actually means

This is the part that gets oversold. Jev can't return a value outside the schema you declared. That is a guarantee about *shape*. It is not a guarantee about *correctness*. Jev can confidently return a completely wrong, perfectly valid option.

So two things don't go away after a migration:

- **The confidence check stays.** High confidence means "concentrated distribution", not "right". You still threshold on it and route the uncertain middle to a human or a fallback model.
- **An abstain path has to exist in the schema.** Jev can't abstain on a forced choice. If the options are \`billing\`, \`shipping\`, \`refund\`, a ticket about a data breach will land in one of them. Every \`choice\` question gets a \`needs_review\` option, always — even when the old code had a safe default you're tempted to delete.

## Why an audit skill and not a build skill

TypeSafe already ships a Claude Code skill for building new things with Jev. That's the greenfield case. But most of the value sits in code that already exists: the router someone wrote last year, the moderation step in a support bot, the "is this lead qualified" check inside a sales agent. Nobody is going to rewrite those from scratch. They need someone to walk the code, find the decision points, and propose a careful swap.

That's what just-jev-it does. It refuses to scaffold from a blank slate; it only audits.

## The fit test

A call site is a candidate only when **all** of these hold:

1. The model *decides* rather than *creates*.
2. The answer space is fixed in advance.
3. It's one focused judgment, not five tangled together.
4. Everything needed to decide fits in the state you send.
5. An expert could judge it quickly from that same state.
6. Software consumes the answer — it branches on it or stores it — instead of showing it to a person as prose.

The strongest code signal is the defensive re-parse: \`if reply.strip().lower() not in {...}\`. That fallback branch exists only because an LLM can't guarantee the output shape. It's proof the call was always meant to return an enum.

The poor fits are just as clear: drafting a reply, summarising a thread, writing code, anything with arithmetic or date comparisons (keep those in code), anything that needs a written reasoning trace for an audit.

There's one disguise worth calling out. Sometimes an LLM output is parsed into an enum, and that enum is then pasted back into *another* prompt as narrative context. It looks like a classification, but its consumer is a language model, not software. The skill flags those as ambiguous instead of forcing a verdict.

## Four phases, one hard stop

1. **Audit.** Grep for SDK calls (\`.chat(\`, \`.invoke(\`, \`.generate(\`) and LLM imports, then for the \`if\`/\`switch\` branches near them. Read each call in its full function. Produce a table: file and line, snippet, verdict, and a one-line reason that cites the actual signal.
2. **Plan.** For each good fit, write the before and the after using the right shape for the codebase — Python SDK, LangChain, or raw REST — with the right accessor convention (Python's SDK uses \`.choices["key"]\`, the JS SDK and raw HTTP use \`.answers.key\`; mixing them is a classic bug).
3. **Stop.** Nothing is edited until the plan is approved. If only some findings are approved, only those move.
4. **Execute and validate.** Apply exactly the approved edits, then run the migrated decisions against a case file.

Here's the kind of change the plan proposes, in TypeScript:

\`\`\`ts
// before: generation + defensive parse
const reply = await llm.chat(\`Classify priority as low, medium or high:\\n\${ticket}\`)
const priority = ["low", "medium", "high"].includes(reply.trim().toLowerCase())
  ? reply.trim().toLowerCase()
  : "medium" // silent guess when the model rambles

// after: a typed decision with an explicit abstain option (raw REST)
const res = await fetch("https://api.typesafe.ai/v1/systemone", {
  method: "POST",
  headers: {
    Authorization: \`Bearer \${process.env.TYPESAFE_API_KEY}\`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "jev-1.13.0",
    state: { subject: ticket.subject, body: ticket.body },
    questions: {
      priority: {
        type: "choice",
        instructions: "How urgently does support need to act on this ticket?",
        criteria: {
          low: "Question or request with no deadline or impact",
          medium: "Something is broken for this customer but has a workaround",
          high: "Outage, data loss, payment failure or a security issue",
          needs_review: "Not enough information, or none of the above",
        },
      },
    },
  }),
}).then((r) => r.json())
const { choice, confidence } = res.answers.priority
const priority = confidence >= 0.9 && choice !== "needs_review" ? choice : "needs_review"
\`\`\`

The silent \`"medium"\` guess is gone. The confidence gate stays. The model version is pinned, not \`jev-latest\`.

## Honest validation

The validator runs each case against Jev when \`TYPESAFE_API_KEY\` is set. Without a key, it falls back to a **simulated** mode that just echoes the expected answer — useful for checking that the case file is well-formed, useless as evidence. Every result, and the run as a whole, is labelled \`real\`, \`simulated\` or \`mixed\`. The skill is told never to present a simulated run as measured behaviour.

I'd rather ship a tool that says "this wasn't tested against the real API" than one that quietly implies it was.

## The numbers, with their caveats

TypeSafe's headline is 193.6x faster and 444.6x cheaper. TypeSafe itself calls that the high end, and it was measured against a reference that averaged two other models, not against ground truth. I don't quote it as typical.

The independent results are more useful, and more mixed:

- A phishing-detection study found one Jev question underperformed Claude Haiku (62.6% vs 81.3%), but **five decomposed questions** reached 95.0% vs 93.2% at roughly 12–27x lower cost.
- Langfuse ran 6,003 LLM-as-judge checks: 91.5% agreement with a frontier judge, at about $160 per million graded answers versus $33,000.
- A classification eval found Jev never clearly beat a strong frontier model on raw accuracy, but latency stayed flat around 0.2 seconds from 2 to 151 options.

My read: it's fast and cheap in every measured case. Accuracy parity is real but task-dependent, and usually comes from splitting one vague question into several sharp ones. That's exactly why the skill writes plans for a human to review instead of migrating on its own.

## Try it

\`\`\`
/plugin marketplace add JyothiKumar03/just-jev-it
/plugin install just-jev-it@jk-skills
\`\`\`

Then point Claude Code at a repo and say "just jev it". You'll get a findings table first, and nothing changes until you say yes.`,
  },
  {
    slug: "one-agent-skills-niche-agents",
    title: "One agent, many skills, a few niche agents: the harness I'd bet on",
    summary:
      "Why a single orchestrating agent with on-demand skills, narrow worker agents and typed decision calls beats both the giant prompt and the agent swarm — and why it keeps working as models improve.",
    publishedAt: "November 6, 2026",
    readTime: "6 min read",
    status: "Published",
    body: `Every few months someone shows me a new agent architecture. Usually it's one of two things.

The first is **one giant agent**: a single model with a 6,000-word system prompt, forty tools, and every rule anyone ever thought of. It works in the demo. Then the prompt grows, the context fills with tool output, and the model starts forgetting the instruction on line 212.

The second is **a swarm**: a planner agent, a researcher agent, a coder agent, a reviewer agent, a manager agent supervising them, all passing messages. It looks great on a whiteboard. In practice, every handoff is a lossy summary, nobody owns the user's actual intent, and the bill multiplies with each hop.

After shipping agents for research, sales and GTM work, and after building my own tools around Claude Code, I've landed on a third shape. I think it's the right default, and I want to explain why it should keep working.

## The shape

**One orchestrating agent, a library of skills, and a few narrow agents it can call.**

- **The orchestrator** owns the conversation, the user's intent and the final answer. There is exactly one of it.
- **Skills** are packaged procedures: a folder with a \`SKILL.md\`, some references, maybe a script. Only the skill's name and one-line description sit in context. The full instructions load only when the task needs them.
- **Niche agents** are workers with their own context window and a narrow job: read twenty files and summarise them, run the boring refactor on a cheaper model, judge one thing.
- **Decision models** like Jev sit underneath as typed, cheap calls for the yes/no, pick-one or score-it judgments inside a workflow.

That's it. One brain, a shelf of playbooks, and a few specialists you call by name.

## Why it works

### 1. One owner of intent

The biggest failure in multi-agent systems isn't capability, it's drift. When a planner hands a task to a researcher who hands findings to a writer, each step compresses what the user actually wanted. By the third hop, the constraint "don't touch the billing module" is gone.

With one orchestrator, the user's words never leave the context that makes the final call. Workers get scoped tasks; they don't get to reinterpret the mission.

### 2. Skills cost almost nothing until they're used

This is the part people underrate. A skill is progressive disclosure for instructions. Fifty skills cost fifty short descriptions in context, not fifty manuals. When the task matches, the agent loads that one skill in full and follows it.

So you can keep adding capability without making the base prompt worse. The giant-prompt agent can't do that: every rule you add competes with every other rule, all the time.

I've seen this from both sides. I wrote **just-jev-it** as a skill: a four-phase audit with a hard approval gate, three reference files and a validator. It sits dormant until someone says "where could I use Jev here". Then the agent follows it step by step. And this portfolio was redesigned by an agent following someone else's design skill — the rules travelled as text, and the agent picked them up on demand.

### 3. Workers keep the orchestrator's context clean

Some jobs are context-heavy and summary-friendly: "go read these twenty files and tell me where auth happens". If the orchestrator does that itself, its window fills with file contents it will never need again.

A niche agent does the reading in its own context and hands back a paragraph. That's the reason I built **agent-spawnkit**: an MCP server that lets a premium coding agent open a worker session on OpenCode, Claude or Codex, send it a task, and get back a short result. Follow-ups to the same session keep the worker's context, so you never re-send history. Several workers can run in parallel, each in its own git worktree if they touch the same files.

### 4. You pay frontier prices only for frontier work

In a single-agent setup, the expensive model does everything, including the renames. In a swarm, you often pay frontier prices several times over for the same task.

In this harness, you route by job. Reasoning and judgment about the user's goal stay on the best model. Boilerplate goes to a cheaper worker. Narrow typed decisions — route this, flag that, score this from 1 to 5 — go to a decision model. Published results for Jev, for example, show LLM-as-judge checks at around $160 per million against $33,000 for a frontier judge, with 91.5% agreement. You don't get that by making the orchestrator smarter. You get it by not asking the orchestrator.

### 5. Every part can be tested and reviewed on its own

A skill is a file. You can diff it, version it, review it in a pull request, and test whether it triggers. A niche agent has a narrow contract: input, scope, output. A Jev question has a fixed schema. When something goes wrong, you know which piece to open.

A swarm's behaviour emerges from the conversation between agents, which is much harder to pin down. A giant prompt's behaviour emerges from the interaction of hundreds of rules, which is harder still.

### 6. It's how good teams already work

A strong tech lead doesn't do everything personally, and doesn't run a committee either. They own the outcome, follow the team's playbooks, and hand well-scoped tasks to specialists. The harness copies that structure, and it inherits the reasons that structure works.

## Skill, agent, decision model or plain code?

The rule I use when adding something new:

| The job | Put it in |
|---|---|
| A repeatable procedure the main agent should follow | A **skill** |
| Lots of reading or trial and error, where only the conclusion matters | A **niche agent** |
| Routine edits that don't need the best model | A **niche agent** on a cheaper engine |
| A yes/no, a pick-one, or a score, consumed by software | A **decision model** (Jev) |
| Arithmetic, dates, counts, fixed business rules | **Plain code** — never a model |
| Understanding what the user wants and making the final call | The **orchestrator**, always |

That last row is the whole design. Everything else exists to keep the orchestrator's attention on it.

## Where it breaks, honestly

- **Skill descriptions are the trigger.** A vague description means the skill never loads, or loads at the wrong time. Writing a good one-line description is real work.
- **Summaries lose detail.** A worker's paragraph can drop the one fact that mattered. Ask workers for evidence — file paths, line numbers — not just conclusions.
- **Workers can't interrupt.** In spawnkit, a long async task can't wake the orchestrator when it finishes; MCP has no way to push a new turn. You get a desktop notification and ask for the result.
- **You need to see what happened.** Once work is spread across a main agent and workers, you need traces. That's why I built **trace-ur-token**, a local tool that reads Claude Code, Codex and OpenCode transcripts and shows token burn by model, tool and skill calls, and likely instruction misses.

None of these are reasons to go back to one giant prompt or a swarm. They're the known edges of a design that's mostly right.

## Why it should keep working

The usual worry with any architecture is that the next model release makes it pointless. This one gets better as models improve:

- A stronger orchestrator follows skills more faithfully and delegates more sensibly.
- Skills are plain text, so they move between models and vendors with no rewrite.
- Worker models get cheaper every quarter, which makes delegation pay off on more jobs.
- Decision models like Jev are a new category getting faster and cheaper on their own track.

The pieces improve independently, and the structure doesn't need to change. That's what I want from a harness: something I can keep adding to without rebuilding it.

So my default for a new agent today is simple. One agent that owns the job. A shelf of skills it reads when it needs them. A few narrow agents for the heavy lifting. Typed decision calls for the small judgments. And plain code for everything that should never have been a model call in the first place.`,
  },
  {
    slug: "reliability-first-llm-systems",
    title: "Reliability-first LLM systems: what actually works in production",
    summary:
      "How I design evals, fallbacks, and release guardrails for systems that survive real traffic.",
    publishedAt: "February 14, 2026",
    readTime: "8 min read",
    status: "Published",
    body: `Here's something that surprised me early on: most GenAI systems don't fail because the model is bad. They fail because real production traffic is messy. A provider slows down, one prompt edit shifts the output shape, a tool returns partial data, and suddenly your UI is showing answers that look confident but are completely wrong.

After hitting this wall a few times, I stopped optimizing for demo quality. That's the wrong target. I started optimizing for what happens when things go sideways.

## What actually changed in how I build

I treat every model call the way I'd treat an external API I don't own or control.

- Output has to match a strict schema.
- If it doesn't, fail fast. Don't guess.
- Every failure path needs to be explicit, not tucked away in a catch block.

If output parsing fails, that's not a minor warning you log and move on from. That's a failed request. Full stop.

## Tool calls are where reliability actually breaks down

Once tools enter the picture, everything gets harder. The serious incidents I've seen in production almost never came from prompt wording. They came from tool behavior that nobody fully thought through.

My baseline rules for every tool:

- Typed input, typed output. No loose objects.
- Timeouts and bounded retries are non-negotiable.
- Partial data gets labeled as unknown, not interpreted as truth.
- The model can't silently continue after a tool failure.

That last rule alone removes a surprising number of invisible bugs. Unknown never gets treated as known.

## Three runtime paths I actually route through

For every request, I force one of these three paths explicitly:

1. **Pass** when the schema is valid, evidence is sufficient, and tool results are complete enough to act on.

2. **Retry** when context is too narrow or constraints are too loose. Retry once or twice with tighter parameters, then stop. No infinite loops.

3. **Fallback** when retrying isn't enough. Switch to a safer model, ask a clarifying question, or escalate to a human for anything high-stakes.

The goal isn't to avoid failure. It's to fail in a way you planned for.

## You can't trust a system you can't trace

When something goes wrong, I need to figure out why in a few minutes, not a few hours. So every user-visible answer in my systems gets tied to:

- which prompt version ran
- which model version ran
- which context chunks were retrieved
- what the tools actually returned
- what the validation result was
- which decision path was taken

If I can't reconstruct an answer quickly, I don't trust the system. And neither should you.

## What I check before shipping any change

Before touching prompts, models, or tool behavior:

1. Run offline evals on the cases I know are hard.
2. Run shadow traffic with zero user exposure.
3. Roll out to a small canary slice first.
4. Keep kill switches ready at the model and tool level.
5. Make rollback immediate and versioned.

None of this is glamorous. It's just what keeps systems stable while you're still shipping at a real pace.

## The thing most people miss

Reliability isn't something you bolt on after the demo goes well. It's part of product design from day one. Clear contracts, strict tool discipline, and traceable decisions aren't slowdowns. They're what lets you move fast without burning user trust every other week.`,
  },
  {
    slug: "context-engineering-playbook",
    title: "Context engineering playbook I use before touching prompts",
    summary:
      "The practical method I follow to shape inputs, retrieval, and constraints so outputs stay stable.",
    publishedAt: "February 14, 2026",
    readTime: "7 min read",
    status: "Published",
    body: `Almost every prompt quality problem I've run into is actually a context quality problem in disguise.

When a model output feels weak or unpredictable, my first instinct isn't to rewrite the prompt. It's to look at what the model is actually seeing. In my experience, output quality is mostly decided before the model even starts generating. It comes down to what you send, how you organize it, and how clearly you signal what should be trusted.

Context is an interface. Treat it like one.

## How I structure what the model sees

I split the context payload into distinct blocks, always in this order:

1. instructions
2. hard constraints
3. user state
4. retrieved evidence
5. tool outputs

This makes debugging way more practical. If something's wrong, I can isolate which block is the problem instead of staring at one giant prompt and guessing.

## Not all data should carry equal weight

This one took me a while to really internalize. I use a simple four-tier hierarchy:

- **Tier A:** system-of-record outputs and approved policies
- **Tier B:** retrieved documents that might be stale
- **Tier C:** user-provided data
- **Tier D:** model assumptions

The rules that flow from this are strict. Tier A wins any conflict. Tier B has to be attributable. Tier C is input, not verified fact. Tier D is never treated as evidence for anything.

Without something like this, models blend everything into one confident-sounding answer where you can't tell what was real and what was assumed.

## Wide retrieval usually isn't the answer

There's a temptation to retrieve as much as possible and let the model sort it out. In my experience, that just adds noise. I default to narrow, precise retrieval and only open it up when the task genuinely needs breadth.

The specifics: intent-aware queries, metadata and recency filters, controlled chunk sizes, no duplicate chunks, and k that's tuned to the actual task. For decision-heavy flows, I'll always pick precision over recall. For synthesis tasks, I'll allow more breadth but I still require source-grounded output.

## "Be concise" is not a constraint

Soft instruction sentences don't give you stable behavior. A strict output schema does.

I put constraints right next to output contracts, and I make them explicit:

- allowed categories
- required fields
- refusal conditions
- evidence references that have to be present

When constraints are machine-readable, wording matters less. Behavior becomes predictable.

## Freshness isn't one-size-fits-all

Different tasks have genuinely different tolerance for stale data. Product copy can usually run on older context just fine. Anything policy-related basically can't.

So I define freshness policies at the task level: TTL by source type, refresh triggers, markers for stale data, and a safe fallback for when freshness is unknown. One global freshness rule is almost always the reason an assistant starts feeling randomly wrong over time.

## When behavior drifts, I run this loop

1. Replay the failed examples.
2. Diff the payload blocks against a known good run.
3. Freeze the model version so I'm not chasing a moving target.
4. Figure out which block changed.
5. Patch the smallest possible surface.
6. Add the case to the regression set.

Keeping this loop tight means fixes stay fast and I don't end up overcorrecting prompts when the real problem is somewhere else.

## What this actually buys you

Context isn't extra text you stuff in before the real prompt. It's the core product interface. Get the structure right, and model behavior becomes a lot more predictable than most people expect.`,
  },
  {
    slug: "agentic-workflows-at-scale",
    title: "Agentic workflows at scale: from demo loops to dependable systems",
    summary:
      "What changes when your agent needs to survive hundreds of tool calls and still produce trustworthy outcomes.",
    publishedAt: "February 14, 2026",
    readTime: "9 min read",
    status: "Published",
    body: `I've built long-running agents that looked great in demos and fell apart in production. And the failures were almost never exotic. They were the same things every time: unclear goals, weak tool contracts, memory that grew without bound, and no defined budget for how many steps or calls were even allowed.

The honest fix is boring. You have to stop thinking of agents as smart scripts and start treating them as systems.

## Plan first, then execute

I never let an agent reach for a tool without a plan in place first.

Every run needs to define:

- the explicit steps in order
- a success condition for each step
- a retry cap per step, not just globally
- hard limits on time, cost, and total tool calls
- clear stop conditions that aren't just "when it's done"

If "done" isn't precisely defined going in, the agent will keep looping. And output quality drops with every extra loop.

## Tool contracts are where reliability gets decided

This is the thing I'd tell any team building agentic systems. The reliability of your agent is mostly determined by the quality of your tool contracts, not by your prompts.

For every tool I build or integrate:

- typed input, typed output, no exceptions
- timeout defined, bounded retries, not open-ended
- explicit error shape, not just a caught exception
- idempotent or reversible behavior where the task allows it

The most severe bugs I've seen in production happened when tool errors got silently converted into fluent model text and passed along as if nothing went wrong. I keep errors explicit all the way through.

## Four lanes, not one

When I'm designing the runtime logic, I think in four explicit decision lanes:

- **Pass:** the step succeeded with strong, traceable evidence.
- **Retry:** retry with narrowed context, limited to a fixed count.
- **Fallback:** switch to a safer strategy or a simpler path through the task.
- **Escalate:** hand off to a human or ask the user for clarification.

Without lanes like these spelled out ahead of time, the agent makes those calls implicitly. And implicitly made decisions are the ones that create incidents at 2am.

## Memory that doesn't blow up at scale

Stuffing the full transcript into every context window breaks fast. Once you're past a few hundred steps, the noise drowns out the signal.

What actually works for me: an append-only event log, a compact working state, and references to evidence IDs rather than the evidence itself. After key checkpoints, I summarize current state in a structured format. This keeps token growth linear and reduces drift across long runs significantly.

## "Confidence" is not a verification mechanism

I've learned to be skeptical of any system that trusts what the model says it found. Agent confidence is not evidence.

A claim only gets treated as trusted in my systems if it can be traced back to a verified tool output, a trusted system record, or attributed retrieved evidence. If verification fails, the agent either asks for clarification or escalates. It doesn't guess and move on.

## What I actually measure

Measuring output quality alone will mislead you. For agentic systems specifically, I track:

- task completion rate
- average tool calls per completed task
- fallback rate (are we hitting edge cases more than expected?)
- escalation rate
- budget compliance (did runs stay within defined limits?)
- incident type breakdown over time

These numbers tell you whether your changes improved real outcomes or just made the traces look a little cleaner.

## What actually makes agents scale

More tokens in the prompt is almost never the answer. What scales is discipline in the system around the agent. Clear upfront plans, strict tool contracts, controlled memory, and runtime behavior you can actually measure. Get those four things right and you can push agents a lot further than most teams think is possible.`,
  },
] as const;

export const postSlugs = posts.map((post) => post.slug);

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export const tiers = [
  {
    title: "Provider + orchestration",
    description:
      "Route across OpenAI, Anthropic, Gemini, and DeepSeek with unified interfaces, automatic retries, and graceful fallbacks — no glue code, no provider lock-in.",
  },
  {
    title: "Prompting + context engineering",
    description:
      "Shape what the model sees: structured payloads, trust tiers, freshness policies, and constraint schemas that make output predictable before touching a single prompt word.",
  },
  {
    title: "RAG + tool use",
    description:
      "Precision retrieval with intent-aware queries, metadata filtering, and source-grounded output — tools with typed contracts and bounded retries so failures stay explicit.",
  },
  {
    title: "Fine-tuning + adaptation",
    description:
      "When prompting and retrieval hit their ceiling, fine-tune on domain-specific data to push accuracy, consistency, and latency beyond what off-the-shelf models can deliver.",
  },
  {
    title: "Agentic systems + evaluation",
    description:
      "Long-running agents with structured plans, 500+ tool call budgets, and eval frameworks that measure real outcomes — not just whether the output looks good.",
  },
] as const;
