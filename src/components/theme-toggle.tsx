"use client"

import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "@/components/theme-provider"

type ThemeToggleProps = {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { toggle } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggle}
      aria-label="Toggle theme"
      className={cn(
        "rounded-full border-border/70 bg-background/70 text-foreground shadow-sm backdrop-blur hover:bg-background hover:text-foreground hover:border-foreground/40",
        className
      )}
    >
      {/* The active theme lives in localStorage, so rendering the icon from
          React state hydrates mismatched. The pre-hydration script already put
          `.dark` on <html>, so let CSS pick the icon instead. */}
      <Sun className="hidden size-4 dark:block" />
      <Moon className="size-4 dark:hidden" />
    </Button>
  )
}
