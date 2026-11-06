import type { CSSProperties } from "react"

import { IconTile } from "@/components/stack-icon"
import { education, experience, skills } from "@/data/content"

type Tool = { name: string; id: string; cls?: string }

const toolGroups: { title: string; tools: Tool[] }[] = [
  {
    title: "Models and agents",
    tools: [
      { name: "Claude", id: "claude" },
      { name: "Claude Code", id: "claude-code", cls: "ic-land" },
      { name: "OpenAI", id: "openai", cls: "ic-ink" },
      { name: "Gemini", id: "gemini" },
      { name: "DeepSeek", id: "deepseek", cls: "ic-land" },
      { name: "MCP", id: "mcp", cls: "ic-ink" },
      { name: "Codex", id: "codex", cls: "ic-ink" },
      { name: "LangChain", id: "langchain", cls: "ic-ink" },
    ],
  },
  {
    title: "Voice and messaging",
    tools: [
      { name: "LiveKit", id: "livekit" },
      { name: "Deepgram", id: "deepgram", cls: "ic-ink" },
      { name: "Twilio", id: "twilio" },
    ],
  },
  {
    title: "Build and run",
    tools: [
      { name: "TypeScript", id: "typescript" },
      { name: "Python", id: "python" },
      { name: "Next.js", id: "nextjs" },
      { name: "React", id: "react" },
      { name: "Node.js", id: "nodejs" },
      { name: "Java", id: "java", cls: "ic-tall" },
      { name: "C++", id: "c-plusplus" },
      { name: "FastAPI", id: "fastapi" },
    ],
  },
  {
    title: "Data and cloud",
    tools: [
      { name: "PostgreSQL", id: "postgres" },
      { name: "MongoDB", id: "mongodb", cls: "ic-tall" },
      { name: "MySQL", id: "mysql" },
      { name: "Redis", id: "redis" },
      { name: "AWS", id: "aws", cls: "ic-land" },
      { name: "Google Cloud", id: "google-cloud" },
      { name: "Azure", id: "azure" },
      { name: "Docker", id: "docker", cls: "ic-land" },
      { name: "Kubernetes", id: "kubernetes" },
      { name: "Jenkins", id: "jenkins", cls: "ic-tall" },
    ],
  },
]

function ToolChip({ tool }: { tool: Tool }) {
  return (
    <span className="tools-chip">
      <IconTile id={tool.id} cls={tool.cls} />
      {tool.name}
    </span>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="section" style={{ "--h": 2 } as CSSProperties}>
      <div className="wrap">
        <div className="grid">
          <div className="lg:col-span-7">
            <h2 className="h2">Where I&apos;ve worked</h2>
            <p className="t-body exp-lead">Since 2022: full-stack and cloud work, then agents for sales, market research and GTM teams.</p>

            <ul className="rows exp-rows">
              {experience.map((job) => (
                <li key={job.company}>
                  <span className="rows__name">{job.company}</span>
                  <span className="rows__value">{job.dates}</span>
                  <p className="rows__line">
                    {[job.role, job.location].filter(Boolean).join(" · ")}
                  </p>
                  <ul className="exp-points">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
              <li key={education.school}>
                <span className="rows__name">{education.school}</span>
                <span className="rows__value">{education.dates}</span>
                <p className="rows__line">
                  {`${education.degree} · GPA ${education.gpa} · ${education.place}`}
                </p>
              </li>
            </ul>
          </div>

          <div className="lg:col-start-9 lg:col-span-4">
            <h3 className="h3 exp-tools-head">Tools I work with</h3>
            {toolGroups.map((group) => (
              <div key={group.title} className="tools-group">
                <p className="t-label tools-label">{group.title}</p>
                <div className="tools-wrap">
                  {group.tools.map((tool) => (
                    <ToolChip key={tool.id} tool={tool} />
                  ))}
                </div>
              </div>
            ))}

            <h3 className="h3 exp-skills-head">Skills</h3>
            <ul className="rows">
              {skills.map((group) => (
                <li key={group.category}>
                  <span className="rows__name skills-name">{group.category}</span>
                  <p className="rows__line skills-items">{group.items.join(", ")}</p>
                </li>
              ))}
            </ul>

            <p className="t-small tools-note">Product names and logos are trademarks of their owners.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
