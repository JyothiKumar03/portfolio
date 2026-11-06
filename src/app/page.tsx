import { BuildSection } from "@/components/sections/build-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { HeroSection } from "@/components/sections/hero-section"
import { WorkSection } from "@/components/sections/work-section"
import { WritingSection } from "@/components/sections/writing-section"
import { SiteClosing } from "@/components/site-closing"
import { SiteHeader } from "@/components/site-header"

/* Plan (taste-skill, service):
   kind: service — an AI engineer who is hired; main action "Email me"
   deal: palette moss-sand · type newsreader · hero split · nav split · close type ·
         footer dark · rhythm space · buttons block · mark arc · radius soft
   #top        hero split: h1 + lead + 2 actions | portrait photo with one float card    1 screen
   #build      services-list: what I build (4 rows) | the one still diagram (harness)     1 screen
   #work       selected work: 6 project cards, 3 x 2, flat-colour covers                  2 screens
   #experience calm: roles as rows | tools I use as real icons                            1 screen
   #writing    calm: essays as rows                                                       1 screen
   #contact    footer.closing on the leaf-green band: close-type + footer-dark directory  1 screen */
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <BuildSection />
        <WorkSection />
        <ExperienceSection />
        <WritingSection />
      </main>
      <SiteClosing />
    </>
  )
}
