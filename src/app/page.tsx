import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { BlogSection } from "@/components/sections/blog-section"
import { ContactSection } from "@/components/sections/contact-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { HeroSection } from "@/components/sections/hero-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="page-container pb-16 pt-16">
        <section id="about">
          <HeroSection />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="blog">
          <BlogSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
        <Footer />
      </main>
    </div>
  )
}
