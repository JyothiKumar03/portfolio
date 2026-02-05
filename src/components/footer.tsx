import { site } from "@/data/content"

export function Footer() {
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
        </div>
      </div>
    </footer>
  )
}
