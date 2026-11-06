import Link from "next/link"

import { HarnessDiagram } from "@/components/harness-diagram"

const services = [
  {
    name: "Claude Code skills",
    value: "just-jev-it",
    line: "Packaged procedures an agent loads only when the task needs them.",
  },
  {
    name: "MCP servers and worker agents",
    value: "agent-spawnkit",
    line: "Hand routine work to cheaper agents and keep the main context lean.",
  },
  {
    name: "Production agents",
    value: "Support, underwriting, research",
    line: "Agents with typed tools, fallbacks and an audit trail.",
  },
  {
    name: "Evals and tracing",
    value: "trace-ur-token",
    line: "See where tokens go and where instructions were missed.",
  },
]

// The services-list recipe beside the page's one still diagram.
export function BuildSection() {
  return (
    <section id="build" className="section">
      <div className="wrap">
        <div className="grid items-start">
          <div className="lg:col-span-5">
            <h2 className="h2">What I build</h2>
            <p className="t-body build-intro">
              Agent systems that hold up in production, and the tools I use to build them.
            </p>

            <ul className="rows build-rows">
              {services.map((service) => (
                <li key={service.name}>
                  <span className="rows__name">{service.name}</span>
                  <span className="rows__value">{service.value}</span>
                  <p className="rows__line">{service.line}</p>
                </li>
              ))}
            </ul>

            <Link className="link t-small build-more" href="/blog/one-agent-skills-niche-agents">
              Read how I put these together
            </Link>
          </div>

          <div className="lg:col-start-7 lg:col-span-6">
            <div className="card build-diagram">
              <HarnessDiagram />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
