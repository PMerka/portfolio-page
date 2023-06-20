import React from "react";
import "./skills.css";

export default function Skills({refProp}: {refProp?: React.RefObject<HTMLElement>}) {
  return (
    <section ref={refProp} className="skills-section">
      <h2>Few words about me</h2>
      <div className="skills">
        <div className="about-me">
          <p className="zero-top-margin">
            I started learning the basics of programming during my bachelor's
            degree in chemistry. I chose quantum chemistry computations as the
            topic of my thesis. After finishing my master's course, I focused
            more on programming in Python and later switched to JavaScript. I
            like learning new skills and technologies. I also have a strong
            foundation in math, physics.
          </p>
        </div>

        <div className="skill-list">
          <h4 className="about-me__h4">I work primarily with:</h4>

          <ul className="about-me__ul">
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

          <h4 className="about-me__h4">I also use:</h4>
          <ul className="about-me__ul">
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
