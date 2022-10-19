import React, { useEffect, useRef } from 'react'
import Video from './video'


function UseImperative() {
  const videoRef = useRef()
  useEffect(() => {
    console.log(videoRef.current)
  })
  const handlePlay = () => {
    videoRef.current.play() 
  }
  const handlePause = () => {
    videoRef.current.pause() 
  }
  return (
    <div><Video ref={videoRef}/>
    <button onClick={handlePlay}>Play</button>
    <button onClick={handlePause}>pause</button>
    </div>
  )
}

export default UseImperative