import type { ReactNode } from "react"

type SectionProps = {
  id?: string
  index?: string
  title: string
  subtitle?: string
  icon?: ReactNode
  children: ReactNode
}

export function Section({
  id,
  index,
  title,
  subtitle,
  icon,
  children,
}: SectionProps) {
  return (
    <section id={id} className="section-shell">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
        <div className="flex w-14 shrink-0 items-start justify-start md:w-24 md:justify-center">
          {icon ? (
            <div className="flex size-12 items-center justify-center rounded-2xl border border-border/60 bg-card/80 text-foreground shadow-sm backdrop-blur sm:size-14 md:size-16">
              {icon}
            </div>
          ) : null}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-3">
            {index ? (
              <span className="eyebrow-mono">{index}</span>
            ) : null}
            {subtitle ? (
              <span className="eyebrow">{subtitle}</span>
            ) : null}
          </div>
          <h2 className="section-title">{title}</h2>
          <div className="mt-6 space-y-6">{children}</div>
        </div>
      </div>
    </section>
  )
}
