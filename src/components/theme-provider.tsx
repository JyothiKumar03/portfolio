"use client"

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"

type Theme = "dark" | "light"

type ThemeContextValue = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null
    const initial =
      stored ??
      (document.documentElement.classList.contains("dark") ? "dark" : "light")
    setTheme(initial)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    document.documentElement.style.colorScheme = theme
    localStorage.setItem("theme", theme)
  }, [theme])

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggle: () => setTheme((prev) => (prev === "dark" ? "light" : "dark")),
    }),
    [theme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return context
}
