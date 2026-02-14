import Link from "next/link"
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { capabilities, highlights, site } from "@/data/content"

export function HeroSection() {
  const topControlBaseClasses =
    "rounded-full border-border/70 bg-background/70 text-foreground shadow-sm backdrop-blur hover:bg-background"
  const socialHoverClasses =
    "hover:text-amber-600 hover:border-amber-400/70 dark:hover:text-amber-300 dark:hover:border-amber-300/50"

  const socialLinks = [
    {
      label: "LinkedIn",
      href: site.social.linkedin,
      icon: Linkedin,
    },
    {
      label: "Twitter",
      href: site.social.twitter,
      icon: Twitter,
    },
    {
      label: "GitHub",
      href: site.social.github,
      icon: Github,
    },
  ].filter((item) => item.href)

  return (
    <header className="relative pb-12 pt-16 md:pb-14 md:pt-22">
      <div className="absolute right-0 top-4 flex items-center gap-2 md:top-6">
        {socialLinks.length ? (
          <div className="flex items-center gap-2">
            {socialLinks.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.label}
                  variant="outline"
                  size="icon"
                  className={`${topControlBaseClasses} ${socialHoverClasses}`}
                  asChild
                >
                  <a
                    href={item.href}
                    aria-label={item.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon className="size-4" />
                  </a>
                </Button>
              )
            })}
          </div>
        ) : null}
        <ThemeToggle className={topControlBaseClasses} />
      </div>
      <div className="eyebrow inline-flex items-center gap-2">
        <span className="size-2 rounded-full bg-primary/70 shadow-[0_0_16px_var(--accent-glow)] animate-pulse" />
        Available for select builds
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <h1 className="hero-title text-balance">{site.name}</h1>
        <div className="eyebrow inline-flex items-center gap-3 self-start rounded-full border border-primary/30 bg-primary/10 px-4 py-2 font-semibold text-primary">
          <span className="size-2 rounded-full bg-primary shadow-[0_0_12px_var(--accent-glow)]" />
          JK AI TECHNOLOGIES
        </div>
      </div>
      <p className="mt-3 text-base text-muted-foreground sm:text-lg">
        {site.title}
      </p>
      <p className="eyebrow mt-2">
        Sole Proprietorship - {site.tagline}
      </p>
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
          <a href={`mailto:${site.email}`}>Start a project</a>
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
