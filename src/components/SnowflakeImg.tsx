import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

function SnowflakeImg({isZoomed}: {isZoomed: boolean}) {


  return (
    <div className={`project-img ${isZoomed ? "zoom-in-img" : "zoom-out-img"} `}>
        <StaticImage
        style={{width: '100%'}}
        objectFit={"scale-down"}
        placeholder={"none"}
        loading="eager"
        src="./../../static/fractal_snowflake_2.png"
        alt="fractal snowflake"
        />
    </div>
  )
}

export default SnowflakeImg
