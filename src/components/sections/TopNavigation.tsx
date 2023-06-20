import React from 'react'
import './topNavigation.css'

export default function TopNavigation({scrollToProjects, scrollToSkills}: {scrollToProjects: Function, scrollToSkills: Function}) {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  
  return (
    <header className='header'>
      <nav className='top-navigation'>

        <ul>
          <li>
            <button onClick={() => scrollTop()}>
              Home
            </button>
          </li>
          <li onClick={() => scrollToProjects()}>
            <button>
              My projects
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSkills()}>
              Skills
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
