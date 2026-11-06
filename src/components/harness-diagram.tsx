// The page's one diagram, held still: no animation, no pulses, no glow.
// Server component. The lines are plain hairlines from the hub to each group.

type Pill = { label: string; icon?: string; iconClass?: string; dot?: boolean }

const skills: Pill[] = [
  { label: "just-jev-it", dot: true },
  { label: "Design rules", dot: true },
  { label: "Your playbooks", dot: true },
]

const workers: Pill[] = [
  { label: "OpenCode" },
  { label: "Codex", icon: "/icons/codex.svg", iconClass: "ic ic-20 ic-ink" },
  { label: "Claude", icon: "/icons/claude.svg", iconClass: "ic ic-20" },
]

const decisions: Pill[] = [{ label: "Jev · yes or no, pick one, score" }]

function Pills({ items }: { items: Pill[] }) {
  return (
    <ul className="dg-pills">
      {items.map((item) => (
        <li key={item.label} className="dg-pill">
          {item.dot ? <span className="dg-sq" aria-hidden="true" /> : null}
          {item.icon ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className={item.iconClass} src={item.icon} alt="" />
          ) : null}
          {item.label}
        </li>
      ))}
    </ul>
  )
}

export function HarnessDiagram() {
  return (
    <div
      className="dg"
      role="img"
      aria-label="An orchestrator agent connected to skills, worker agents and typed Jev decisions"
    >
      <svg className="dg-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <line x1="50" y1="50" x2="25" y2="22" vectorEffect="non-scaling-stroke" />
        <line x1="50" y1="50" x2="75" y2="22" vectorEffect="non-scaling-stroke" />
        <line x1="50" y1="50" x2="50" y2="82" vectorEffect="non-scaling-stroke" />
      </svg>

      <div className="dg-group dg-tl">
        <p className="t-label">Skills</p>
        <Pills items={skills} />
      </div>

      <div className="dg-group dg-tr">
        <p className="t-label">Workers via agent-spawnkit</p>
        <Pills items={workers} />
      </div>

      <div className="dg-centre">
        <div className="dg-hub">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="ic ic-24" src="/icons/claude-code.svg" alt="" />
          <span>Orchestrator</span>
        </div>
      </div>

      <div className="dg-group dg-bottom">
        <p className="t-label">Typed decisions</p>
        <Pills items={decisions} />
      </div>
    </div>
  )
}
