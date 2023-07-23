import React, {useEffect, useState} from 'react'
import "./settings.modules.css"
import Input from '../input/input'


export default function Settings({hidden : hidden , setHidden:setHidden , settings:settings ,setSettings:setSettings }) {
    function updatePromodoro(x){
        setSettings({...settings,promodoro :{...settings.promodoro,value:x}})
    }

    function updateShortBreak(x){
        setSettings({...settings,shortBreak:{...settings.shortBreak,value:x}})
    }

    function updateLongBreak(x){
        setSettings({...settings,longBreak :{...settings.longBreak,value:x}})
    }

    console.log(settings)

    return (
    <div className='container' style={{display:`${hidden ? "none" : "flex"}`, zIndex: 2}}>
        <div className='modal'>
            <div className="head">
                <p><strong>Settings</strong></p>
                <div onClick={()=>{setHidden(true)}} style={{cursor:"pointer"}} className='close-button'>
                    <p>x</p>
                </div>
            </div>
            <div className="modal-body">
                <p>TIME (MINUTES)</p>
                <div className="periods">
                    <Input type="Time"        set = {(x)=>{updatePromodoro(x) }}/>
                    <Input type="Short Break" set = {(x)=>{updateShortBreak(x)}}/>
                    <Input type="Long Break"  set = {(x)=>{updateLongBreak(x)}}/>
                </div>
            </div>
        </div>
    </div>
  )
}
