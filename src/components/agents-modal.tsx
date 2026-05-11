import Link from "next/link"

export function AgentsButton() {
  return (
    <Link
      href="/llms.txt"
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
    </Link>
  )
}
