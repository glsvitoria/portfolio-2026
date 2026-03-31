import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Skills } from "@/components/portfolio/skills"
import { Experience } from "@/components/portfolio/experience"
import { DetachedProjects } from "@/components/portfolio/detached-projects"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <DetachedProjects />
      <Skills />
    </>
  )
}
