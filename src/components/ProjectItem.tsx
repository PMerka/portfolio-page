import { spawn } from "child_process";
import React from "react";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import "./projectItem.css";

export default function ProjectItem({data}: {data: any}) {
  const title = data.frontmatter.title
  const keywords = ["Fractal", "Long-running-task", "HTML-canvas", "React"];
  let featuredImg = getImage(data.frontmatter.img?.childImageSharp?.gatsbyImageData)
  return (
    <div>
      <div className="project-body">
        
        <div className="project-description">
          <h3>{title}</h3>
          <div style={{ marginTop: 10, marginBottom: 10 }}>
            {keywords.map((keyword, index) => (
              <span key={index} style={{ marginRight: 10 }}> {keyword} </span>
            ))}
          </div>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ab
          blanditiis repellendus maxime inventore nesciunt voluptates. Ullam,
          minus? Dolores, totam fuga? Mollitia architecto explicabo est beatae
          rem earum ipsum, consectetur laboriosam facere accusantium aliquam
          dignissimos atque dolor ut reprehenderit praesentium impedit maiores,
          quis voluptatem nobis sunt. Totam ex quia, consequuntur rerum placeat
          vel pariatur, quo voluptates veritatis alias dolorem commodi, quas
          neque eos laborum perferendis voluptatibus deserunt itaque ratione
          cumque exercitationem natus magnam unde dolor. Corrupti vero aliquam
          velit culpa a veritatis consequuntur tenetur. Totam corrupti porro,
          veritatis error nulla voluptate, sit reiciendis amet aperiam quod,
          itaque possimus odit impedit!
          </p>
        </div>

        {featuredImg ?
        <GatsbyImage
          image={featuredImg}
          objectFit={"scale-down"}
          loading="eager"
          className="project-img"
          alt="fractal snowflake"
        />
        : null
      }
      </div>
    </div>
  );
}
