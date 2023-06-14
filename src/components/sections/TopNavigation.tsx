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
    <nav className='top-navigation'>
      <ul>
        <li onClick={() => scrollTop()}>Home</li>
        <li onClick={() => scrollToElement()}>My projects</li>
        <li>Skills</li>
      </ul>
    </nav>
  )
}
