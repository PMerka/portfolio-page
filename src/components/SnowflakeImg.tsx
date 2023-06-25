import React, {useRef} from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import * as styles from './snowflakeImg.module.css'

function SnowflakeImg() {

  const imageRef = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(imageRef, {});
  const isZoomed = !!entry?.isIntersecting;


  return (
    <div ref={imageRef} className={`${styles.projectImg} ${isZoomed ? styles.zoomInImg : ''}`}>
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
