import React, {useEffect, useState} from 'react'
import "./clock.modules.css"

export default function Clock({mode:mode , togglePause:togglePause , settings:settings}) {
  let initialTime = settings[mode].value*60
  const [time, setTime] = useState(settings[mode].value * 60)
  
  function updateTime(){
    setTime(initialTime)
  }

  function pad(number, size){
    let num = "00000000" + number
    return num.substring(num.length  - size)
  }


  useEffect(() => {
    updateTime()
  },[settings[mode]?.value])

  useEffect(() => {
    if(settings[mode]?.paused == false){
      while(time>0){
        const timer =   setInterval(() => {
          setTime(time - 1 )}, 1000);
          return () =>{
            clearInterval(timer)
          }}
    }
  } , [settings,time])

  let per = 100-(time/initialTime) * 100
  return (
      <>
       <div className="layout">
        <div className="outer-circle">
          <div className="inner-circle">
            <div className="ring">
              {pad(Math.floor(time/60),2)} : {pad(time%60,2)}
              <a href='#' className='pause' onClick={()=>{togglePause()}}>{settings[mode].paused == true ? "Resume" : "Pause"}</a>
            </div>
          <svg width="600" height="600" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="54" fill="none" stroke="#e6e6e6" strokeWidth="1" />
              <circle style={{strokeDasharray:"100"
                             ,strokeDashoffset:`calc(${per})`}} cx="60" cy="60" r="54" fill="none" stroke="#FA7070"  strokeLinecap="round" strokeWidth="2" pathLength="100" />
          </svg>
          </div>
        </div>
       </div>
        </>
  )
}
