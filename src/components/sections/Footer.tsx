import React from 'react'
import * as styles from './footer.module.css'
import GithubLink from '../GithubLink'

export default function Footer() {
  return (
    <footer className={styles.main}>
        <div className={styles.body}>
            <div className={styles.thanking}>
                <h4>Thanks</h4>
            I would like to thank all creators of free online programming courses on youtube,
            namely to The Net Ninja, The Coding Train, Tech With Tim, Web Dev Simplified, Traversy Media, ROB WEB s yablkom, and Franks laboratory.
            Thank you for making learning programming easy, fun and accessible for anyone.
            </div>

            <div className={styles.footerContact}>
                <GithubLink/>
            </div>
        </div>
    </footer>
  )
}
