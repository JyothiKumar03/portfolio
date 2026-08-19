import Link from "next/link"
import { ArrowDownRight, ArrowUpRight, Github, Sparkles } from "lucide-react"

import { AgentsButton } from "@/components/agents-modal"
import { Button } from "@/components/ui/button"
import { ProfilePhoto } from "@/components/profile-photo"
import { highlights, site } from "@/data/content"

export function HeroSection() {
  return (
    <header className="machine-hero">
      <div className="machine-noise" />
      <aside className="hero-rail" aria-hidden="true">
        <span>JK/03</span><i /><span>HYD · IN</span><i /><span>EST. 2022</span>
      </aside>

      <div className="machine-kicker"><span className="live-dot" /> OPERATING SYSTEM / AI + PRODUCT</div>
      <div className="machine-status">STATUS <b>ONLINE</b> <span>●</span></div>

      <div className="machine-copy">
        <p className="manifest-label">Independent engineer for systems that need<br />to work after the demo ends.</p>
        <h1 className="machine-title" aria-label="Jyothi Kumar, AI systems engineer">
          <span>JYOTHI</span>
          <span className="outline-word">KUMAR</span>
          <span className="accent-word">/ AI SYSTEMS</span>
        </h1>
        <div className="machine-promise">
          <span className="promise-mark">✳</span>
          <p>I design agents, context engines, and product workflows with one rule: <strong>they must be dependable in the real world.</strong></p>
        </div>
        <div className="machine-actions">
          <Button size="lg" asChild><Link href="#projects">Enter project archive <ArrowDownRight className="size-4" /></Link></Button>
          <a className="text-action" href={site.social.github} target="_blank" rel="noreferrer"><Github className="size-4" /> GitHub / 79 repositories <ArrowUpRight className="size-3" /></a>
        </div>
      </div>

      <div className="operator-frame">
        <div className="frame-corner frame-corner-tl" /><div className="frame-corner frame-corner-br" />
        <p className="frame-label frame-label-top">OPERATOR // J.KUMAR</p>
        <div className="operator-portrait"><ProfilePhoto /></div>
        <div className="portrait-scan" />
        <p className="frame-label frame-label-side">DEPLOY / MEASURE / ITERATE</p>
        <div className="portrait-note"><span><Sparkles className="size-3" /> CURRENT SIGNAL</span><strong>Agents with receipts</strong></div>
      </div>

      <div className="machine-ticker" aria-hidden="true"><span>RAG&nbsp;—&nbsp;EVALS&nbsp;—&nbsp;VOICE&nbsp;—&nbsp;ORCHESTRATION&nbsp;—&nbsp;RELIABILITY&nbsp;—&nbsp;RAG&nbsp;—&nbsp;EVALS&nbsp;—&nbsp;VOICE&nbsp;—&nbsp;ORCHESTRATION&nbsp;—&nbsp;RELIABILITY&nbsp;—</span></div>

      <div className="machine-metrics">
        <div className="metric metric-featured"><span>PRODUCTION<br />MINDSET</span><strong>NO<br />DEMO<br />WARE.</strong></div>
        <div className="metric"><b>500+</b><span>TOOL CALLS<br />ORCHESTRATED</span></div>
        <div className="metric"><b>90%</b><span>AGENT<br />ACCURACY</span></div>
        <div className="metric"><b>06</b><span>RECENT<br />PUBLIC BUILDS</span></div>
        <div className="metric agent-metric"><AgentsButton /></div>
      </div>

      <div className="signal-strip">
        {highlights.slice(0, 3).map((item, index) => (
          <div key={item.title} className="signal-line"><span>0{index + 1}</span><div><b>{item.title}</b><p>{item.description}</p></div></div>
        ))}
      </div>
    </header>
  )
}
