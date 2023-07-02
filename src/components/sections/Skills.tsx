import React from "react";
import * as styles from "./skills.module.css";

export default function Skills({
  refProp,
}: {
  refProp?: React.RefObject<HTMLElement>;
}) {
  return (
    <section ref={refProp} className={styles.main}>
      <h2>About me</h2>
      <div className={styles.skills}>
        <div className={styles.aboutMe}>
          <p className={styles.aboutMeText}>
            I started learning the basics of programming during my bachelor's
            degree in chemistry. I chose quantum chemistry computations as the
            topic of my thesis. After finishing my master's course, I focused
            more on programming in Python and later switched to JavaScript. I
            like learning new skills and technologies. I also have a strong
            foundation in math and physics.
          </p>
        </div>

        <div className={styles.skillList}>
          <h4 className={styles.skillsTitle}>I work primarily with:</h4>

          <ul className={styles.aboutMeUl}>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>React Native</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Canvas animations</li>
            <li>Git</li>
            <li>Github</li>
          </ul>

          <h4 className={styles.skillsTitle}>I also use:</h4>
          <ul className={styles.aboutMeUl}>
            <li>Godot game engine</li>
            <li>Gatsby</li>
            <li>Django</li>
            <li>Python</li>
            <li>Linux terminal</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
