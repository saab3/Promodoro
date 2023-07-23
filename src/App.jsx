import { useEffect, useState } from 'react'
import './App.css'
import Clock from './clock/clock'
import Menu from './menu/menu'
import Settings from './Settings/settings'

function App() {
  const [hidden, setHidden] = useState(true)
  const [settings, setSettings] = useState({promodoro  : {paused:false,value:0},
                                            shortBreak : {paused:false,value:0},
                                            longBreak  : {paused:false,value:0}})
  const [mode, setMode] = useState("promodoro")

  function togglePause(mode){
    switch (mode) {
      case "promodoro":
        setSettings({...settings,promodoro:{...settings.promodoro,paused:!settings.promodoro.paused}})
      break;
        
      case "shortBreak":  
        setSettings({...settings,shortBreak:{...settings.shortBreak,paused:!settings.shortBreak.paused}})
      break;
        
      case "longBreak":
        setSettings({...settings,longBreak:{...settings.longBreak,paused:!settings.longBreak.paused}})
      break;
    }
    console.log(mode)
  }

  function updateSettings(x){
    setSettings(x)
  }

  useEffect(()=>{
    console.log("first")
  },[updateSettings])

  return (
    <>
    <div className='app-wrapper'>
      <p style={{fontSize:"50px" ,fontWeight:"700", color:"#D7E0FF"}}>promodoro</p>
      <Menu     setMode ={(x)=>{setMode(x)}} />
      <Clock    mode    ={mode}      togglePause={()=>{togglePause(mode)}} settings={settings}/>
      <Settings hidden  ={hidden}    setHidden={setHidden}     settings={settings} setSettings={(x)=>{updateSettings(x)}}/>
      <button   onClick ={()=>{setHidden(!hidden)}} style={{width:"9rem", height:"3rem",fontSize:"15px"}}>Settings</button>
    </div>
    </>
  )
}

export default App
