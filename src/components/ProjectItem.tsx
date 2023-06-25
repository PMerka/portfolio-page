import React from "react";
import * as styles from './projectItem.module.css'

interface projectItemProps {
  myRef?: any;
  projectData: {
    frontmatter: {
      keywords: string;
      title: string;
    };
    html: string;
  };
  pageURL: string;
  repoUrl: string;
  children: string | JSX.Element | JSX.Element[];
  descriptionClassNames?: string;
  innerShadow?: boolean;
}

export default function ProjectItem({
  myRef,
  projectData,
  pageURL,
  repoUrl,
  children,
  descriptionClassNames,
  innerShadow = false,
}: projectItemProps) {
  const title = projectData.frontmatter.title;
  const htmlContent = projectData.html;

  return (
    <div
      ref={myRef}
      className={`${styles.main} ${innerShadow ? styles.maininShadow : ''}`}
    >
      <div className={`${styles.description} ${descriptionClassNames}`}>
        <h3>{title}</h3>
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></div>

        <div className={styles.linksContainer}>
          <a className={styles.linkButton} href={pageURL} target="_blank">
            Try the app
          </a>
          <a className={styles.linkButton} href={repoUrl} target="_blank">
            Source code
          </a>
        </div>
      </div>

      {children}
    </div>
  );
}
