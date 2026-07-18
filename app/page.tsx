import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Expertise } from "@/components/expertise"
import { Works } from "@/components/works"
import { TechMarquee } from "@/components/tech-marquee"
import { Certifications } from "@/components/certifications"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { SectionBlend } from "@/components/section-blend"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <SectionBlend />
        <About />
        <Expertise />
        <Certifications />
        <Works />
        <TechMarquee />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
