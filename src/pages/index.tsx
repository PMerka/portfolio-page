import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import 'src/styles/index.css'
import TopNavigation from "src/components/sections/TopNavigation"
import TopSection from "../components/sections/TopSection"
import Projects from "src/components/sections/Projects"
import Skills from "src/components/sections/Skills"
import { useRef, useEffect } from "react"
import useScrollToRef from "./useScrollToRef"

const IndexPage: React.FC<PageProps> = () => {
  /*
  const elementRef = useRef<HTMLElement>(null)

  const scrollToElement = () => {
    elementRef.current?.scrollIntoView({ behavior: "smooth"})
  }
  */
  const [projectsRef, scrollToProjects] = useScrollToRef()
  const [skillsRef, scrollToSkills] = useScrollToRef()

  return (
   <div className="main-app">

    <TopNavigation scrollToProjects={scrollToProjects} scrollToSkills={scrollToSkills} />
    
    <main>
      <TopSection />
      <Skills refProp={skillsRef} />
      <Projects refProp={projectsRef}/>
    </main>

   </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Title</title>
