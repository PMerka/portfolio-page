import React from "react";
import * as styles from "./topNavigation.module.css";

export default function TopNavigation({
  scrollToProjects,
  scrollToSkills,
}: {
  scrollToProjects: Function;
  scrollToSkills: Function;
}) {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className={styles.header}>
      <nav className={styles.topNavigation}>
        <ul>
          <li>
            <button onClick={() => scrollTop()}>Home</button>
          </li>
          <li onClick={() => scrollToProjects()}>
            <button>My projects</button>
          </li>
          <li>
            <button onClick={() => scrollToSkills()}>Skills</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
