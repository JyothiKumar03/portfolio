import type { Metadata } from "next"
import { Hanken_Grotesk, Newsreader } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken", display: "swap" })
const newsreader = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-newsreader", display: "swap" })

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark')t='light';var d=document.documentElement;d.classList.toggle('dark',t==='dark');d.style.colorScheme=t;}catch(e){}})();`

export const metadata: Metadata = {
  title: "Jyothi Kumar — AI engineer for agents and Claude Code skills",
  description:
    "AI engineer building single-agent harnesses with skills and narrow worker agents: just-jev-it, agent-spawnkit, trace-ur-token, LiveSlides and production support, underwriting and research agents.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      data-type="service"
      className={`${hanken.variable} ${newsreader.variable}`}
      style={{ colorScheme: "light" }}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="page-type" content="service" />
        <meta name="site-kind" content="other" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
