import { spawn } from "child_process";
import React from "react";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import "./projectItem.css";


interface projectItemProps{
  myRef?: any,
  projectData: {
    frontmatter: {
      keywords: string,
      title: string
    },
    html: string
  },
  pageURL: string,
  repoUrl: string,
  children: string | JSX.Element | JSX.Element[]
}

export default function ProjectItem({myRef, projectData, pageURL, repoUrl, children}: projectItemProps) {
  {/*
  const pageData = allData.find(node => node.frontmatter.title === title)*/}
  const keywords = projectData.frontmatter.keywords
  const title = projectData.frontmatter.title
  const htmlContent = projectData.html

  return (
      <div ref={myRef} className="project-item"> 

        <div className="project-description">


          <h3>{title}</h3>
          <div style={{ marginTop: 10, marginBottom: 10 }}>
            <b style={{paddingRight: '1rem'}}>Topics:</b> {keywords}
            {/*
            ?
            
            keywords.map((keyword, index) => (
              <span key={index} style={{ marginRight: 10 }}> {keyword} </span>
            ))
          : ""
            */}
          </div>
          <div dangerouslySetInnerHTML={{__html: htmlContent}}>
          </div>

          <div className="projet-links-container">
            <a className="project-link-button" href={pageURL} target="_blank">Try the app</a>
            <a className="project-link-button" href={repoUrl} target="_blank">Source code</a>            
          </div>

        </div>
        
        {children}
        
      </div>
  );
}
