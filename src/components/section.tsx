import type { ReactNode } from "react"

type SectionProps = {
  id?: string
  index?: string
  title: string
  subtitle?: string
  children: ReactNode
}

export function Section({
  id,
  index,
  title,
  subtitle,
  children,
}: SectionProps) {
  return (
    <section id={id} className="section-shell">
      <div className="section-machine-heading">
        <div className="section-index">{index ?? "//"}</div>
        <div><p>{subtitle}</p><h2>{title}<span>.</span></h2></div>
      </div>
      <div className="section-machine-body">{children}</div>
    </section>
  )
}
