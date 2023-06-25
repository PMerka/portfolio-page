import React from "react";
import GithubLogo from "@static/github_logo.png";
import * as styles from "./githubLink.module.css";

export default function GithubLink() {
  return (
    <div className={styles.main}>
      <div className={styles.icon}>
        <a
          className={styles.link}
          href="https://github.com/PMerka/portfolio-page"
          target="_blank"
        >
          <img className={styles.ghImg} src={GithubLogo} alt="Github icon" />
          <br />
          Source code
        </a>
      </div>

      <div>
        Created by <br />
        Pavel Měrka
      </div>
    </div>
  );
}
