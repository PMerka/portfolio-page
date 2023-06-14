import React from "react";
import "./topSection.css";
import { StaticImage } from "gatsby-plugin-image";
import Email from "../Email";

export default function TopSection({refProp}: {refProp?: React.RefObject<HTMLDivElement>  }) {
  return (
    <div ref={refProp} className={"top-section"}>
      <div>


      <div className="top-section__main-text">
        <div style={{backgroundColor: "rgba(24, 26, 51, 0.6)", boxShadow: "0 0 25px 20px rgba(24, 26, 51, 0.6)", zIndex: 10, position: 'relative',}}>
          <p className="text-minor">Hi, my name is</p>
          <h2 className="name">Pavel Měrka</h2>
          <p className="text-minor" style={{fontSize: "60%"}}>
          I m a <span className="highlight">{"javascript/typescript"}</span> frontend developer. I focuse mostly on building webapps with <span className="highlight">{"React"}</span>.
          I also have some experience with backend frameworks (Django) and mobile development with React Native. 
          </p>
          <Email/>
        </div>
      </div>

      <StaticImage
        objectFit={"scale-down"}
        placeholder={"none"}
        loading="eager"
        style={{position: 'absolute'}}
        className="top-section__img"
        src="./../../../static/fractal_snowflake.png"
        alt="fractal snowflake"
      />
      </div>
    </div>
  );
}
