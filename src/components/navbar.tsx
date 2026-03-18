"use client"

import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { useEffect, useState } from "react"

import { ThemeToggle } from "@/components/theme-toggle"
import { site } from "@/data/content"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const iconBtnClass =
    "inline-flex size-8 items-center justify-center rounded-full border border-border/70 bg-background/70 text-muted-foreground shadow-sm backdrop-blur transition hover:border-foreground/40 hover:text-foreground"

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/40 bg-background/40 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
        {/* Brand — just name, no company */}
        <Link href="/" className="text-sm font-bold text-foreground tracking-tight hover:text-primary transition-colors">
          {site.name.split(" ").slice(0, 2).join(" ")}
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                activeSection === link.href.slice(1)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <a href={site.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={iconBtnClass}>
            <Linkedin className="size-3.5" />
          </a>
          <a href={site.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={iconBtnClass}>
            <Github className="size-3.5" />
          </a>
          <ThemeToggle className="rounded-full border-border/70 bg-background/70 text-foreground shadow-sm backdrop-blur hover:bg-background" />
          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex flex-col gap-1 p-2 rounded-md text-muted-foreground hover:text-foreground"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeSection === link.href.slice(1)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
