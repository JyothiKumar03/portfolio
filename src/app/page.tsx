import { Footer } from "@/components/footer"
import { BlogSection } from "@/components/sections/blog-section"
import { ContactSection } from "@/components/sections/contact-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { HeroSection } from "@/components/sections/hero-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="page-container pb-16">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <BlogSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}
