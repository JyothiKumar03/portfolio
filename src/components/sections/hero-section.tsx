import Link from "next/link"
import { ArrowDownRight, Github, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { AgentsButton } from "@/components/agents-modal"
import { ProfilePhoto } from "@/components/profile-photo"
import { highlights, site } from "@/data/content"

export function HeroSection() {
  return (
    <header className="relative isolate overflow-hidden pb-14 pt-10 md:pb-20 md:pt-16">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <div className="eyebrow inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-primary">
            <span className="live-dot" /> SYSTEMS THINKER · AI ENGINEER
          </div>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.24em] text-primary/80">Hello, I&apos;m</p>
          <h1 className="hero-title mt-3 max-w-4xl text-balance text-5xl leading-[0.93] sm:text-7xl lg:text-[6.9rem]">
            Jyothi<br /><span className="hero-contrast">Kumar.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            I turn messy business problems into <span className="text-foreground">reliable AI products</span> — agents, retrieval systems, and full-stack workflows that earn their place in production.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link href="#projects">Explore the work <ArrowDownRight className="size-4" /></Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={site.social.github} target="_blank" rel="noreferrer"><Github className="size-4" /> GitHub</a>
            </Button>
          </div>
          <div className="mt-12 grid max-w-xl grid-cols-3 gap-3 border-y border-border/60 py-5">
            <div><p className="stat-number">500+</p><p className="stat-label">tool calls</p></div>
            <div><p className="stat-number">90%</p><p className="stat-label">accuracy</p></div>
            <div><p className="stat-number">6+</p><p className="stat-label">AI products</p></div>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[31rem] lg:ml-auto">
          <div className="profile-orbit profile-orbit-a" /><div className="profile-orbit profile-orbit-b" />
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/25 bg-card p-2 shadow-[0_26px_80px_rgba(0,0,0,0.38)]">
            <ProfilePhoto />
            <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-md">
              <div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">Now building</p><p className="mt-1 text-sm font-medium text-white">Agents with receipts</p></div>
              <Sparkles className="size-4 text-primary" />
            </div>
          </div>
          <div className="mt-3"><AgentsButton /></div>
        </div>
      </div>
      <div className="relative mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="signal-card"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary/80">Capability</p>
            <p className="mt-2 text-sm font-semibold text-foreground">{item.title}</p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </header>
  )
}
