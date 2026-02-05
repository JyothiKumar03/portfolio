import type { HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

type PanelProps = HTMLAttributes<HTMLDivElement>

export function Panel({ className, ...props }: PanelProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}
