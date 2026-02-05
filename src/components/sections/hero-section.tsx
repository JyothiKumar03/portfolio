import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { capabilities, highlights, site } from "@/data/content"

export function HeroSection() {
  return (
    <header className="relative pb-14 pt-20 md:pt-28">
      <div className="absolute right-0 top-8">
        <ThemeToggle />
      </div>
      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-muted-foreground">
        <span className="size-2 rounded-full bg-primary/70 shadow-[0_0_16px_var(--accent-glow)] animate-pulse" />
        Available for select builds
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
          {site.name}
        </h1>
        <div className="inline-flex items-center gap-3 self-start rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          <span className="size-2 rounded-full bg-primary shadow-[0_0_12px_var(--accent-glow)]" />
          JK AI TECHNOLOGIES
        </div>
      </div>
      <p className="mt-3 text-xl text-muted-foreground md:text-2xl">
        {site.title}
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.4em] text-muted-foreground">
        Sole Proprietorship - {site.tagline}
      </p>
      <p className="mt-6 max-w-2xl text-lg text-foreground/80 text-balance">
        {site.description}
      </p>
      <p className="mt-4 text-sm uppercase tracking-[0.3em] text-muted-foreground">
        {site.focus}
      </p>
      <div className="mt-5 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {capabilities.map((item) => (
          <span key={item} className="rounded-full border border-border/60 px-3 py-1">
            {item}
          </span>
        ))}
      </div>
      <div className="mt-8 h-px w-32 bg-gradient-to-r from-primary via-foreground/30 to-transparent" />
      <div className="mt-10 flex flex-wrap gap-4">
        <Button size="lg" asChild>
          <Link href="/projects">
            See recent work <ArrowUpRight className="size-4" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href={`mailto:${site.email}`}>Start a project</a>
        </Button>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="surface-grid rounded-2xl border border-border/60 bg-card/80 p-5 shadow-sm backdrop-blur"
          >
            <p className="text-sm font-semibold text-foreground">{item.title}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </header>
  )
}
