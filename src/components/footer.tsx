import { Github, Linkedin, Twitter } from "lucide-react"

import { site } from "@/data/content"

export function Footer() {
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
    <footer className="mt-14 border-t border-border/60 py-8 text-sm text-muted-foreground">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-base font-semibold text-foreground">
            {site.company.name}, {site.company.location}
          </p>
          <p className="eyebrow">{site.tagline}</p>
        </div>
        <div className="space-y-1 md:text-right">
          <a className="block hover:text-foreground" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          {/* <span className="block">{site.phone}</span> */}
          {socialLinks.length ? (
            <div className="flex items-center gap-3 md:justify-end">
              {socialLinks.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.label}
                    className="inline-flex size-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition hover:border-foreground/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    href={item.href}
                    aria-label={item.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon className="size-4" />
                  </a>
                )
              })}
            </div>
          ) : null}
        </div>
      </div>
    </footer>
  )
}
