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
    linkedin: "",
    github: "",
  },
} as const

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
]

export const capabilities = [
  "Product roadmaps",
  "Design reviews",
  "Full-stack shipping",
  "AI systems",
  "Eval + QA loops",
]

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
] as const

export type Project = {
  slug: string
  name: string
  summary: string
  highlights: string[]
  problem: string
  approach: string
  value: string
  snapshot: string
  stack: string[]
  role: string[]
  outcomes: string[]
  buildNotes: string[]
  roadmap: string[]
  link: string
}

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
    outcomes: ["500+ downloads", "Faster provider switching", "Fewer runtime failures"],
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
    summary: "DNS monitoring dashboard using MERN + AWS SDK with CRUD operations.",
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
    summary: "Responsive landing page built with Tailwind CSS, React, and TypeScript.",
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
    roadmap: ["Model monitoring", "Better data labeling", "Realtime dashboards"],
    link: "",
  },
  {
    slug: "samurai-stimulator",
    name: "Samurai Stimulator",
    summary: "Dual-player browser game built with JavaScript, HTML, CSS.",
    highlights: ["Two-player gameplay", "Fast feedback loop", "Classic web stack"],
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
] as const

export const projectSlugs = projects.map((project) => project.slug)

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
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
] as const

export type PostSection = {
  title: string
  points: string[]
}

export type Post = {
  slug: string
  title: string
  summary: string
  topics: string[]
  outline: string[]
  intro: string
  sections: PostSection[]
  status: string
}

export const posts: Post[] = [
  {
    slug: "reliability-first-llm-systems",
    title: "Reliability-first LLM systems",
    summary: "A practical blueprint for production GenAI with evals and fallbacks.",
    topics: ["Reliability", "Evals", "Fallbacks", "Monitoring"],
    outline: [
      "Where LLM systems fail in production",
      "Layered reliability patterns that actually work",
      "Eval loops that prove progress",
      "Operational checklists for shipping",
    ],
    intro:
      "Production LLMs fail at the edges - not in demos. This piece maps the failure modes and the patterns I use to ship reliable GenAI systems.",
    sections: [
      {
        title: "Failure map",
        points: [
          "Provider throttling and partial outages.",
          "Prompt drift and hidden context changes.",
          "Tool failures that look like model issues.",
        ],
      },
      {
        title: "Reliability layer",
        points: [
          "Retries, fallbacks, and routing rules.",
          "Strict output contracts with validation.",
          "Budgets for latency, cost, and tokens.",
        ],
      },
      {
        title: "Eval loops",
        points: [
          "Golden sets that mirror real usage.",
          "Prompt regression tests in CI.",
          "Monitoring for accuracy and drift.",
        ],
      },
      {
        title: "Operational checklist",
        points: [
          "Tracing across model + tools.",
          "Error budgets and escalation paths.",
          "Release gates before shipping changes.",
        ],
      },
    ],
    status: "Draft",
  },
  {
    slug: "context-engineering-playbook",
    title: "Context engineering playbook",
    summary: "How I shape context to keep models grounded and outputs stable.",
    topics: ["Context shaping", "Prompt design", "RAG", "Failure modes"],
    outline: [
      "Context is a product, not a blob",
      "Structuring inputs for predictability",
      "Guardrails and retrieval discipline",
      "Playbook for troubleshooting drift",
    ],
    intro:
      "Context is the interface. This playbook covers how I structure inputs so outputs stay stable across real-world tasks.",
    sections: [
      {
        title: "Context shaping",
        points: [
          "Clarify intent and constraints early.",
          "Use strict schemas for predictable output.",
          "Separate instructions from raw data.",
        ],
      },
      {
        title: "Retrieval discipline",
        points: [
          "Targeted top-k with metadata filters.",
          "Chunking strategies for semantic recall.",
          "Refresh rules to avoid stale context.",
        ],
      },
      {
        title: "Guardrails",
        points: [
          "Validation gates for structured output.",
          "Refusal patterns for missing data.",
          "Tool boundaries to prevent drift.",
        ],
      },
      {
        title: "Debugging drift",
        points: [
          "Prompt diffing and replay tests.",
          "Example-based error analysis.",
          "A/B testing for stability.",
        ],
      },
    ],
    status: "Draft",
  },
  {
    slug: "agentic-workflows-at-scale",
    title: "Agentic workflows at scale",
    summary: "Designing long-running agents that stay reliable across many tool calls.",
    topics: ["Agents", "Tooling", "Planning", "Evaluation"],
    outline: [
      "Agent loops that do not collapse",
      "Planning, retries, and safe fallbacks",
      "Tool call reliability and guardrails",
      "Measuring agents like real systems",
    ],
    intro:
      "Long-running agents are systems, not scripts. This post outlines how I design plan loops, guardrails, and evaluation for stable agent behavior.",
    sections: [
      {
        title: "Plan-loop design",
        points: [
          "Task decomposition with checkpoints.",
          "Explicit success criteria per step.",
          "Graceful recovery when steps fail.",
        ],
      },
      {
        title: "Tooling reliability",
        points: [
          "Idempotent tools and safe retries.",
          "Backoff strategies for flaky APIs.",
          "Context pruning to prevent overload.",
        ],
      },
      {
        title: "Safety controls",
        points: [
          "Budget caps and stop conditions.",
          "Human-in-the-loop review points.",
          "Audit logs for full visibility.",
        ],
      },
      {
        title: "Evaluation at scale",
        points: [
          "Success metrics aligned to business outcomes.",
          "Replay logs for regression testing.",
          "Continuous improvement via evals.",
        ],
      },
    ],
    status: "Draft",
  },
] as const

export const postSlugs = posts.map((post) => post.slug)

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug)
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
] as const
