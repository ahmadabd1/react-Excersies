import React, { useState } from 'react'


//Ex-1
export default function Hudini() {
    
    const [show,setShow] = useState(false)
  
    const Display = function(){
        setShow(!show)
    }
    return (
    <>
    <button onClick={Display}>Show</button>
    {show ? <div>Now you see me</div> : <div>Now you don't</div>}
    </>
    
  )
}
