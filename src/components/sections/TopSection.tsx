import React from "react";
import "./topSection.css";
import { StaticImage } from "gatsby-plugin-image";
import Contact from "../Contact";

export default function TopSection({
  refProp,
}: {
  refProp?: React.RefObject<HTMLDivElement>;
}) {
  return (
    <section ref={refProp} className={"top-section"}>
      
        <div className="top-section__main-text">
            <p className="first-line">Hi, my name is</p>
            <h1 className="name">Pavel Měrka</h1>
            <p className="short-text">
              I m a javascript / typescript
              frontend developer. I focuse mostly on building webapps with
              React. I also have some
              experience with backend frameworks (Django) and mobile development
              with React Native.
            </p>
            <Contact />
        </div>

        <div className="top-section__img">
          <StaticImage
            style={{width: '100%'}}
            objectFit={"scale-down"}
            placeholder={"none"}
            loading="eager"
            src="./../../../static/fractal_snowflake.png"
            alt="fractal snowflake"
          />
        </div>

    </section>
  );
}
