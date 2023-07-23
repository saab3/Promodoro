import React , {useState,useEffect} from 'react'
import "./input.modules.css"

export default function Input(
    {set:set,
    type:type}
) {
    const [counter, setCounter] = useState(0)

    if (type === "setTime") {
        console.log("setTime")
    }else if(type== "setShortBreak"){
        console.log("setShortreak")
    }

    function updateCounterUp(){
            setCounter(counter + 1)
            set(counter+1)
    }

    function updateCounterDown(){
        if (counter - 1 >= 0){
            setCounter(counter - 1)
            set(counter -1)
        }
    }

    
  return (
    <div style={{display:"flex",flexDirection:"column" , alignItems:"flex-start"}} > 
        <p style={{fontSize:"15px", letterSpacing:"0px"}}>{type}</p>
        <div className='wrapper'>
            <input type="text" maxLength={2}  value={counter}/>
            <div className="buttons">
                <button className='increment' onClick={()=>{updateCounterUp()  }} >+</button>
                <button className='decrement' onClick={()=>{updateCounterDown()}} >-</button>
            </div>
        </div>
    </div>
  )
}
