import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import 'src/styles/index.css'
import TopSection from "../components/TopSection"
import Projects from "../components/Projects"

const IndexPage: React.FC<PageProps> = () => {
  return (
   <div className="main-app">
    <TopSection/>
    <Projects/>
   </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Title</title>
