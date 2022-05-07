import React from 'react'
import video from "../image/video.mp4"
import style from "../Section1/Section1.module.css"
function Section1() {
  return (
    <div >
        <video controls autoPlay loop src={video}  width="100%">
          
        </video>
    </div>
  )
}

export default Section1