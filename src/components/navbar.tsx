"use client"

import Link from "next/link"
import { Github, Menu, X } from "lucide-react"
import { useState } from "react"

import { ThemeToggle } from "@/components/theme-toggle"
import { site } from "@/data/content"

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Log", href: "#experience" },
  { label: "Stack", href: "#skills" },
  { label: "Notes", href: "#blog" },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className="machine-nav">
      <Link href="/" className="machine-monogram" aria-label="Jyothi Kumar home"><span>J</span><i />K</Link>
      <div className="machine-nav-links">
        {navLinks.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
      </div>
      <div className="machine-nav-tools">
        <a href={site.social.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github className="size-4" /></a>
        <ThemeToggle className="machine-theme" />
        <button className="machine-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}</button>
      </div>
      {menuOpen && <div className="machine-mobile-links">{navLinks.map((link) => <a onClick={() => setMenuOpen(false)} key={link.label} href={link.href}>{link.label}</a>)}</div>}
    </nav>
  )
}
