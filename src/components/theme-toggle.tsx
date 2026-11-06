"use client"

import { Moon, Sun } from "lucide-react"

import { cn } from "@/lib/utils"
import { useTheme } from "@/components/theme-provider"

type ThemeToggleProps = {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { toggle } = useTheme()

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch colour theme"
      className={cn("nav-icon-btn", className)}
    >
      {/* The active theme lives in localStorage, so rendering the icon from
          React state hydrates mismatched. The pre-hydration script already put
          `.dark` on <html>, so let CSS pick the icon instead. */}
      <Sun size={18} className="hidden dark:block" aria-hidden="true" />
      <Moon size={18} className="dark:hidden" aria-hidden="true" />
    </button>
  )
}
