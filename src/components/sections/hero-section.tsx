import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { capabilities, highlights, site } from "@/data/content"

export function HeroSection() {
  return (
    <header className="relative pb-12 pt-8 md:pb-14 md:pt-12">
      <div className="eyebrow inline-flex items-center gap-2">
        <span className="size-2 rounded-full bg-primary/70 shadow-[0_0_16px_var(--accent-glow)] animate-pulse" />
        Open to ideas &amp; collaboration
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <h1 className="hero-title text-balance">{site.name}</h1>
      </div>
      <p className="mt-3 text-base text-muted-foreground sm:text-lg">
        {site.title}
      </p>
      <p className="eyebrow mt-2">{site.tagline}</p>
      <p className="mt-5 max-w-2xl text-base text-foreground/80 sm:text-lg text-balance">
        {site.description}
      </p>
      <p className="eyebrow mt-4">{site.focus}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {capabilities.map((item) => (
          <span key={item} className="pill">
            {item}
          </span>
        ))}
      </div>
      <div className="mt-8 h-px w-32 bg-gradient-to-r from-primary via-foreground/30 to-transparent" />
      <div className="mt-10 flex flex-wrap gap-4">
        <Button asChild>
          <Link href="/projects">
            See recent work <ArrowUpRight className="size-4" />
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <a href={`mailto:${site.email}`}>Let&apos;s connect</a>
        </Button>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="surface-grid surface-card backdrop-blur"
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
