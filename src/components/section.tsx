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
    <section id={id} className="border-t border-border/60 py-16 md:py-20">
      <div className="flex items-start gap-6 md:gap-8">
        <div className="flex w-20 shrink-0 items-start justify-center md:w-24">
          {icon ? (
            <div className="flex size-16 items-center justify-center rounded-2xl border border-border/60 bg-card/80 text-foreground shadow-sm backdrop-blur md:size-20">
              {icon}
            </div>
          ) : null}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-3">
            {index ? (
              <span className="text-xs font-mono uppercase tracking-[0.4em] text-muted-foreground">
                {index}
              </span>
            ) : null}
            {subtitle ? (
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {subtitle}
              </span>
            ) : null}
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
          <div className="mt-6 space-y-6">{children}</div>
        </div>
      </div>
    </section>
  )
}
