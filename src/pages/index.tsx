import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import 'src/styles/index.css'
import TopSection from "../components/sections/TopSection"
import Projects from "src/components/sections/Projects"
import TopNavigation from "src/components/sections/TopNavigation"
import { useRef, useEffect } from "react"

const IndexPage: React.FC<PageProps> = () => {
  const elementRef = useRef<HTMLDivElement>(null)

  const scrollToElement = () => {
    elementRef.current?.scrollIntoView({ behavior: "smooth"})
  }

  return (
   <div className="main-app">
    <TopNavigation scrollToElement={scrollToElement} />
    <TopSection />
    <Projects refProp={elementRef}/>
   </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Title</title>
