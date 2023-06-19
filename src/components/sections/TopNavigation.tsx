import React from 'react'
import './topNavigation.css'

export default function TopNavigation({scrollToElement}: {scrollToElement: Function}) {
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
          <li onClick={() => scrollTop()}>
            <button>
              Home
            </button>
          </li>
          <li onClick={() => scrollToElement()}>
            <button>
              My projects
            </button>
          </li>
          <li>
            <button>
              Skills
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
