import React from 'react'
import "./githubLink.css"

export default function GithubLink() {
  return (
    <div className='gh-section'>
        <div className="gh-icon">
        <a className="gh-link" href="https://github.com/PMerka/portfolio-page" target='_blank'>
          <img src={"/github_logo.png"} alt="Github icon" />
          <br />
          Source code
        </a>
        </div>

        <div>
          Created by <br />
          Pavel Měrka
        </div>
    </div>
  )
}
