import React, { useState } from 'react'
import "./menu.modules.css"

export default function Menu({setMode:setMode}) {
    const [active, setActive] = useState("promodoro")
    return (
    <div className='menu'>
        <ul>
            <li className={active=="promodoro" && "active"} onClick={()=>{setActive("promodoro")
                                                                setMode("promodoro")}}>promodoro  </li>
            <li className={active=="shortBreak" && "active"} onClick={()=>{setActive("shortBreak")
                                                                setMode("shortBreak")}}>short break</li>
            <li className={active=="longBreak" && "active"} onClick={()=>{setActive("longBreak")
                                                                setMode("longBreak")}}>long break </li>
        </ul>
    </div>
  )
}
