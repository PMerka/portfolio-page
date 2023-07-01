import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Contact from "../Contact";
import * as styles from "./topSection.module.css";

export default function TopSection({
  refProp,
}: {
  refProp?: React.RefObject<HTMLDivElement>;
}) {
  return (
    <section ref={refProp} className={styles.main}>
      <div className={styles.mainText}>
        <p className={styles.firstLine}>Hi, my name is</p>
        <h1 className={styles.name}>Pavel Měrka</h1>
        <p>
          I’m a Javascript / Typescript frontend developer. I focus mostly on
          building web apps with React. I also have some experience with backend
          frameworks (Django) and mobile development with React Native.
        </p>
        <Contact />
      </div>

      <div className={styles.img}>
        <StaticImage
          style={{ width: "100%" }}
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
