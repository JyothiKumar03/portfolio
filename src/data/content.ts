export const site = {
  name: "Jyothi Kumar Dummala",
  title: "Software Engineer / AI Engineer",
  description:
    "I build production-grade GenAI products end-to-end - provider orchestration, prompting + context engineering, RAG, fine-tuning, agentic workflows, and evaluation frameworks.",
  focus: "Ownership, collaboration, and measurable business outcomes.",
  tagline: "Staying in India, building for the world.",
  email: "jyothikumardummala@gmail.com",
  location: "India (Open to Remote / Relocate)",
  company: {
    name: "JK AI TECHNOLOGIES",
    location: "Hyderabad",
  },
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
    company: "ProdGain",
    role: "Software Engineer (AI / Full-stack)",
    location: "Hyderabad",
    dates: "Jun 2024 - Present",
    points: [
      "Built full-stack MERN applications with integrated GenAI capabilities.",
      "Integrated OpenAI, Anthropic, DeepSeek, Gemini and built evaluation frameworks.",
      "Improved LLM performance by 70%+ using prompting, context, RAG, fine-tuning.",
      "Architected long-running agents with 500+ tool calls and 90% accuracy.",
      "Owned product scoping, roadmaps, and milestone delivery for client builds.",
      "Led design reviews and shipped UI, backend, and AI workflows end-to-end.",
      "Instrumented reliability checks, eval suites, and release checklists.",
      "Took end-to-end ownership and supported hiring, knowledge transfer, and architecture reviews.",
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
    dates: "2023",
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
      "Built an event-driven drone control app with a custom Alexa skill.",
      "Worked with AWS API Gateway websockets, Lambda, DynamoDB, and drone programming.",
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
] as const;

export const projectSlugs = projects.map((project) => project.slug);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const skills = [
  {
    category: "AI / GenAI",
    items: [
      "LLMs (OpenAI, Anthropic)",
      "Context engineering",
      "Prompt engineering",
      "Fine-tuning",
      "RAG workflows",
    ],
  },
  {
    category: "Web Development",
    items: ["Node.js", "React.js", "Express.js", "Next.js"],
  },
  {
    category: "Programming",
    items: [
      "C/C++",
      "Java",
      "Python",
      "TypeScript",
      "JavaScript",
      "SQL",
      "DSA",
    ],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "DBMS"],
  },
  {
    category: "Cloud / DevOps",
    items: ["AWS", "Git/GitHub", "Jenkins", "Docker", "Kubernetes"],
  },
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
    slug: "reliability-first-llm-systems",
    title: "Reliability-first LLM systems: what actually works in production",
    summary:
      "How I design evals, fallbacks, and release guardrails for systems that survive real traffic.",
    publishedAt: "February 14, 2026",
    readTime: "8 min read",
    status: "Published",
    body: `Most GenAI systems do not fail because the model is "bad." They fail because real production traffic is messy. A provider slows down, one prompt edit changes output shape, a tool returns partial data, and suddenly your UI is showing answers that look confident but are wrong.

After seeing this repeatedly, I stopped optimizing for demo quality. I started optimizing for failure handling.

## What changed in my approach

I treat every model call like an API boundary I do not control.

- Output must match a strict schema.
- Invalid output must fail fast.
- Every failure path must be explicit.

If output parsing fails, that is not a minor warning. That is a failed request.

## Tool calls are the real reliability problem

Once tools enter the loop, the system becomes much harder. Most serious incidents I have seen came from tool behavior, not from prompt wording.

My baseline rules are simple:

- Every tool has typed input and typed output.
- Timeouts and bounded retries are mandatory.
- Partial data is labeled as unknown, not interpreted as truth.
- The model cannot silently continue after tool failure.

This single rule cuts a lot of invisible bugs: unknown is never treated as known.

## Three runtime paths I actually use

For each request, I force one of these paths:

1. **Pass**
   - Schema is valid
   - Evidence is sufficient
   - Tool results are complete enough

2. **Retry**
   - Narrow context
   - Tighten constraints
   - Retry once or twice, then stop

3. **Fallback**
   - Switch to a safer model or simpler path
   - Ask a clarification question when needed
   - Escalate to human review for high-risk cases

The goal is not to avoid failure. The goal is to fail in a controlled way.

## Traceability is mandatory

When something goes wrong, I need to answer "why" quickly. So every user-visible answer is tied to:

- prompt version
- model version
- retrieved context IDs
- tool outputs
- validation result
- final decision path

If I cannot explain an answer in a few minutes, I do not trust the system.

## My release checklist before shipping

Before changing prompts, models, or tool behavior:

1. Run offline evals on known hard cases.
2. Run shadow traffic with no user exposure.
3. Roll out as a small canary.
4. Keep kill switches ready per model and tool.
5. Keep rollback immediate and versioned.

Nothing here is flashy, but this is what keeps systems stable while still shipping fast.

## Final note

Reliability is part of product design, not a cleanup step after launch. If your system has clear contracts, strong tool discipline, and traceable decisions, you can move fast without burning user trust.`,
  },
  {
    slug: "context-engineering-playbook",
    title: "Context engineering playbook I use before touching prompts",
    summary:
      "The practical method I follow to shape inputs, retrieval, and constraints so outputs stay stable.",
    publishedAt: "February 14, 2026",
    readTime: "7 min read",
    status: "Published",
    body: `Most prompt quality issues are actually context quality issues.

When a model output feels weak or unstable, I do not start by rewriting prompts. I first inspect the context payload. In my experience, output quality is mostly determined by what you send, how you structure it, and how clearly you mark trust levels.

I treat context as an interface.

## How I structure context

I split payloads into clear blocks:

1. instructions
2. hard constraints
3. user state
4. retrieved evidence
5. tool outputs

This makes debugging practical. If one block is bad, I can fix that block instead of rewriting everything.

## Trust tiers I use

Not all data should have equal authority. I use a simple hierarchy:

- **Tier A:** system-of-record outputs and approved policies
- **Tier B:** retrieved documents that might be stale
- **Tier C:** user-provided data
- **Tier D:** model assumptions

Rules are strict:

- Tier A wins conflicts.
- Tier B must be attributable.
- Tier C is input, not fact.
- Tier D is never evidence.

This prevents the model from blending everything into one unreliable answer.

## Retrieval strategy that works

Wide retrieval feels smart but often adds noise. I default to narrow retrieval and open it only when the task needs it.

- Use intent-aware queries.
- Filter by metadata and recency.
- Keep chunk size controlled.
- Remove duplicate chunks.
- Keep k task-specific.

For decision-heavy flows, I prefer precision over recall. For synthesis tasks, I allow broader recall but still enforce source-grounded output.

## Constraints should be machine-readable

A sentence like "be concise" is weak control. A strict output schema is strong control.

I place constraints right next to output contracts:

- allowed categories
- required fields
- refusal conditions
- evidence references

When constraints are explicit, wording matters less and behavior gets more stable.

## Freshness policy matters

Different tasks need different freshness windows. Product copy can tolerate older context. Policy responses usually cannot.

So I define freshness policies per task:

- TTL by source type
- refresh triggers
- stale-data markers
- safe fallback when freshness is unknown

One global freshness rule is usually the reason assistants feel randomly wrong.

## My drift debugging loop

When behavior drifts, I run this process:

1. Replay failed examples.
2. Diff payload blocks.
3. Freeze model version.
4. Identify which block changed.
5. Patch smallest possible surface.
6. Add case to regression set.

This keeps fixes fast and avoids overcorrecting prompts.

## Final note

Context is not just extra text. It is the core product interface. If context structure is disciplined, model behavior becomes much more predictable.`,
  },
  {
    slug: "agentic-workflows-at-scale",
    title: "Agentic workflows at scale: from demo loops to dependable systems",
    summary:
      "What changes when your agent needs to survive hundreds of tool calls and still produce trustworthy outcomes.",
    publishedAt: "February 14, 2026",
    readTime: "9 min read",
    status: "Published",
    body: `Long-running agents can look great in demos and still fail in production. I learned this the hard way while building workflows with many tool calls. The common failures were almost always the same: unclear goals, weak tool contracts, poor memory handling, and no budget limits.

The fix is to treat agents as systems, not scripts.

## Plan first, execute second

I never let an agent start by calling tools without a plan.

Each run needs:

- explicit steps
- success condition per step
- retry cap per step
- global limits for time, cost, and tool calls
- clear stop conditions

If "done" is not clearly defined, the agent keeps looping and quality drops.

## Tool contracts decide system quality

Tooling is where agent reliability is won or lost.

For every tool I enforce:

- typed input
- typed output
- timeout and bounded retries
- explicit error shape
- idempotent or reversible behavior

Most severe bugs happen when tool errors get converted into fluent text. I keep errors explicit all the way through the pipeline.

## Runtime lanes for control

I use four decision lanes:

- **Pass:** step succeeded with strong evidence
- **Retry:** limited retry with narrowed context
- **Fallback:** safer strategy or simpler path
- **Escalate:** handoff to human or ask user clarification

Without explicit lanes, agents make those decisions implicitly and inconsistently.

## Memory model that scales

Transcript stuffing breaks quickly. Instead, I keep:

- an append-only event log
- a compact working state
- references to evidence IDs

After key checkpoints, I summarize state in structured form. This keeps token growth under control and reduces drift across long runs.

## Safety means enforceable controls

I do not treat "agent confidence" as evidence.

A claim is trusted only if it can be traced to:

- verified tool output
- trusted system record
- attributed retrieved evidence

If verification fails, the agent must either ask for clarification or escalate.

## Metrics I actually track

Answer quality alone is not enough for agents. I track:

- task completion rate
- calls per completed task
- fallback rate
- escalation rate
- budget compliance
- incident type breakdown

These metrics show whether changes improve real outcomes or only make traces look cleaner.

## Final note

Agents scale when the system around them is disciplined. Clear plans, strict tool contracts, controlled memory, and measurable runtime behavior matter far more than longer prompts.`,
  },
] as const;

export const postSlugs = posts.map((post) => post.slug);

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export const tiers = [
  {
    title: "Provider + orchestration layer",
    description:
      "Switch/route across providers with retries, fallbacks, and consistent interfaces.",
  },
  {
    title: "Prompting + context engineering",
    description:
      "Structured prompts, context shaping, and failure-mode mitigation.",
  },
  {
    title: "RAG + tool use",
    description:
      "Retrieval-augmented workflows with disciplined context management.",
  },
  {
    title: "Fine-tuning + adaptation",
    description:
      "Push accuracy and consistency beyond prompting and retrieval.",
  },
  {
    title: "Agentic systems + evaluation",
    description:
      "Long-running agents with measurable performance via eval frameworks.",
  },
] as const;
