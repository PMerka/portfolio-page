import React, { useState } from "react";
import * as styles from "./contact.module.css";

export default function Email() {
  const [copyText, setCopyText] = useState("Copy email");
  const copyEmail = () => {
    navigator.clipboard.writeText("pavelmerka1995@gmail.com");
    setCopyText("Email copied");
    setTimeout(() => {
      setCopyText("Copy email");
    }, 5000);
  };

  return (
    <>
      <div className={styles.row}>
        <div>Email:</div>
        <div>pavelmerka1995@gmail.com</div>
      </div>

      <div className={styles.row}>
        <button className={styles.button} onClick={() => copyEmail()}>
          {copyText}
        </button>

        <a className={styles.button} href="https://github.com/PMerka" target="_blank">
          Github profile
        </a>
      </div>
    </>
  );
}
