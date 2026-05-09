export const site = {
  name: "Jyothi Kumar Dummala",
  title: "Software Engineer / AI Engineer",
  description:
    `I build production-grade GenAI products end-to-end - provider orchestration, prompting + context engineering, RAG, fine-tuning, agentic workflows, and evaluation frameworks. \n I love to understand the domain, map the problem to a reliable solution and scale it!`,
  interest:`I have experience in shipping agents to sales, market research and GTM domains. Where I map the problems, ship agents (diff architecture agents) and then deliver the solution!`,
  focus: "Ownership, collaboration, and measurable business outcomes.",
  tagline: "Building agents that close deals, not just demo well. Shipping in Research, Sales, GTM domains.",
  email: "jyothikumardummala@gmail.com",
  location: "Hyderabad, India (Open to Remote / Relocate)",
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
