import React from 'react'
import "./topSection.css"
import { StaticImage } from 'gatsby-plugin-image'

export default function TopSection() {
  return (
    <section className={"top-section"}>
      <div className='top-section__main-text'>
        <div>
          <p className='top-text'>Hi my name is</p> 
          <h2 className='name'>Pavel Měrka</h2>
          <p className='top-text'>frontend web developer</p> 
          </div>
      </div>
      

      <StaticImage objectFit={'scale-down'} placeholder={"none"} loading="eager" className='top-section__img' src="./../../static/fractal_snowflake.png" alt="fractal snowflake" />
    
          
    </section>
  )
}
