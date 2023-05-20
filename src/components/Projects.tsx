import React from "react";
import ProjectItem from "./ProjectItem";
import { graphql, useStaticQuery } from "gatsby";
import "./projects.css"
import allProjectsQuery from "./useProjectsTexts";
import useProjectsTexts from "./useProjectsTexts";

export default function Projects() {
    const data = useProjectsTexts()
    const projets = data.allMarkdownRemark.nodes
    console.log(projets)
    
  return (
    <div className="projects" style={{ height: 800 }}>
      <h2>Creative Projects</h2>
      <p>
        Here are some of my personal projects, mostly focused on visualisation
        of computer alghoritms, math and physics with html canvas.
      </p>

    {
        projets.map(
        (projectData: any, index: number) => <ProjectItem key={index} data={projectData} />
        )
    }
      
      <img src={'/snowflake_simulation.png'} className="img"/>
    </div>
  );
}