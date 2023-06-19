import React, { useEffect, useRef } from "react";
import ProjectItem from "../ProjectItem";
import { graphql, useStaticQuery } from "gatsby";
import "./projects.css";
import { StaticImage } from "gatsby-plugin-image";
import SnowflakeImg from "../SnowflakeImg";
import useIntersectionObserver from "../useIntersectionObserver";
import useProjectsData from "../useProjectData";

export default function Projects({
  refProp,
}: {
  refProp?: React.RefObject<HTMLDivElement>;
}) {
  const data = useProjectsData();
  const nodes = data.allMarkdownRemark.nodes;

  const video = useRef<null | HTMLVideoElement>(null);

  useEffect(() => {
    if (video.current !== null) {
      video.current.playbackRate = 10;
    }
  }, []);

  const imageRef = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(imageRef, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <section ref={refProp} className="projects">
      <h2>Creative Projects</h2>

      <div className="projects-intro">
        <p className="zero-top-margin">
          I like to practice my JavaScript skills on projects combining computer
          graphics, art, math, and science - for example creating interactive
          visualizations of natural processes. My projects primarily revolve
          around snowflake growth, fractals, and complex systems, utilizing HTML
          canvas and React. Through these technologies, I bring these phenomena
          to life.
        </p>
      </div>

      <ProjectItem
        myRef={imageRef}
        projectData={nodes[0]}
        pageURL={"https://pmerka.github.io/snowflake/"}
        repoUrl={"https://github.com/PMerka/snowflake"}
        descriptionClassNames="project-description-big-margin-top"
        innerShadow={true}
      >
        <SnowflakeImg isZoomed={isVisible} />
      </ProjectItem>

      <ProjectItem
        projectData={nodes[1]}
        pageURL={"https://pmerka.github.io/snowflake-growth-simulation/"}
        repoUrl={"https://github.com/PMerka/snowflake-growth-simulation"}
      >
        <div className="video-box snowflake-video">
          <video
            src="/snowflake_growth_opt.mp4"
            style={{ width: "100%" }}
            className="rotateY"
            ref={video}
            autoPlay={true}
            muted={true}
          />
        </div>
      </ProjectItem>

      <ProjectItem
        projectData={nodes[2]}
        pageURL={"https://pmerka.github.io/firefly-boids/"}
        repoUrl={"https://github.com/PMerka/firefly-boids"}
      >
        <div className="video-box boid-video">
          <video
            src="/boids.mp4"
            style={{ width: "100%" }}
            autoPlay={true}
            muted={true}
            loop={true}
          />
        </div>
      </ProjectItem>
    </section>
  );
}
