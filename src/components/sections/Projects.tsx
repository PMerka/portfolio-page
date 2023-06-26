import React, { useEffect, useRef } from "react";
import ProjectItem from "../ProjectItem";
import * as styles from './projects.module.css'
import SnowflakeImg from "../SnowflakeImg";
import useProjectsData from "src/hooks/useProjectData";
import SnowflakeVideo from "@static/snowflake_growth_opt.mp4"
import BoidVideo from "@static/boids.mp4"

export default function Projects({refProp}: {refProp?: React.RefObject<HTMLElement>}) {
  const data = useProjectsData();
  const nodes = data.allMarkdownRemark.nodes;

  const video = useRef<null | HTMLVideoElement>(null);

  useEffect(() => {
    if (video.current !== null) {
      video.current.playbackRate = 10;
    }
  }, []);

  return (
    <section ref={refProp} className={styles.main}>
      <div className={styles.intro}>
        <h2>Creative Projects</h2>
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
        projectData={nodes[0]}
        pageURL={"https://pmerka.github.io/snowflake/"}
        repoUrl={"https://github.com/PMerka/snowflake"}
        marginTop={'8%'}
        innerShadow={true}
      >
        <SnowflakeImg/>
      </ProjectItem>

      <ProjectItem
        projectData={nodes[1]}
        pageURL={"https://pmerka.github.io/snowflake-growth-simulation/"}
        repoUrl={"https://github.com/PMerka/snowflake-growth-simulation"}
      >
        <div className={`${styles.videoBox} ${styles.snowflakeVideo}`}>
          <video
            src={SnowflakeVideo}
            style={{ width: "100%" }}
            className={styles.rotateY}
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
        <div className={`${styles.videoBox} ${styles.boidVideo}`}>
          <video
            src={BoidVideo}
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
