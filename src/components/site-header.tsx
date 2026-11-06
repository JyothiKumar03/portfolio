"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

import { Mark } from "@/components/mark"
import { ThemeToggle } from "@/components/theme-toggle"
import { site } from "@/data/content"

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#writing", label: "Writing" },
  { href: "/#experience", label: "Experience" },
  { href: "/resume", label: "Résumé" },
]

const mailto = "mailto:" + site.email

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  // While the mobile sheet is open: lock body scroll, close on Escape, and
  // close again if the viewport grows into the desktop layout.
  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    const desktop = window.matchMedia("(min-width: 1024px)")
    const onDesktop = () => {
      if (desktop.matches) setOpen(false)
    }

    window.addEventListener("keydown", onKey)
    desktop.addEventListener("change", onDesktop)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKey)
      desktop.removeEventListener("change", onDesktop)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header className="nav-bar">
        <div className="wrap nav-inner">
          <nav aria-label="Primary" className="nav-links">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href="/" className="nav-brand" aria-label="Jyothi Kumar, home">
            <Mark size={22} />
            <span>Jyothi Kumar</span>
          </Link>

          <div className="nav-actions">
            <ThemeToggle />
            <a href={mailto} className="btn btn--primary nav-cta">
              Email me
            </a>
            <button
              type="button"
              className="nav-icon-btn nav-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="nav-sheet"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {open ? (
          <div id="nav-sheet" className="nav-sheet">
            <nav aria-label="Mobile" className="nav-sheet-links">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="nav-sheet-link" onClick={close}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <a href={mailto} className="btn btn--primary nav-sheet-cta" onClick={close}>
              Email me
            </a>
          </div>
        ) : null}
      </header>
      <div aria-hidden="true" className="nav-space" />
    </>
  )
}
