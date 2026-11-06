type IconRule = { match: string[]; id: string; cls?: string }

// Order matters: the first rule whose keyword appears in the label wins.
const ICON_RULES: IconRule[] = [
  { match: ["typescript"], id: "typescript" },
  { match: ["python"], id: "python" },
  { match: ["next"], id: "nextjs" },
  { match: ["react"], id: "react" },
  { match: ["node", "express"], id: "nodejs" },
  { match: ["postgres", "neon", "pgvector"], id: "postgres" },
  { match: ["mongo"], id: "mongodb", cls: "ic-tall" },
  { match: ["mysql"], id: "mysql" },
  { match: ["aws"], id: "aws", cls: "ic-land" },
  { match: ["docker"], id: "docker", cls: "ic-land" },
  { match: ["kubernetes"], id: "kubernetes" },
  { match: ["openai", "gpt"], id: "openai", cls: "ic-ink" },
  { match: ["claude", "anthropic"], id: "claude" },
  { match: ["gemini"], id: "gemini" },
  { match: ["deepseek"], id: "deepseek", cls: "ic-land" },
  { match: ["deepgram"], id: "deepgram", cls: "ic-ink" },
  { match: ["livekit"], id: "livekit" },
  { match: ["twilio"], id: "twilio" },
  { match: ["mcp"], id: "mcp", cls: "ic-ink" },
  { match: ["codex"], id: "codex", cls: "ic-ink" },
  { match: ["vercel"], id: "vercel", cls: "ic-ink" },
  { match: ["npm"], id: "npm" },
]

export function iconFor(label: string): { id: string; cls: string } | null {
  const lower = label.toLowerCase()
  for (const rule of ICON_RULES) {
    if (rule.match.some((keyword) => lower.includes(keyword))) {
      return { id: rule.id, cls: rule.cls ?? "" }
    }
  }
  return null
}

// A 28px logo tile for a local SVG in public/icons. Plain <img> is fine here:
// these are small static SVGs that next/image would not optimise.
export function IconTile({ id, cls }: { id: string; cls?: string }) {
  return (
    <span className="ic-tile ic-tile--28">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={cls ? `ic ${cls}` : "ic"} src={`/icons/${id}.svg`} alt="" />
    </span>
  )
}

export function StackChip({ label }: { label: string }) {
  const icon = iconFor(label)

  return (
    <span className={`pd-chip${icon ? " pd-chip--icon" : ""}`}>
      {icon ? <IconTile id={icon.id} cls={icon.cls} /> : null}
      {label}
    </span>
  )
}
