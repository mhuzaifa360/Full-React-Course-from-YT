import React from 'react'
import { useState } from 'react'

function InputField() {
    const [val,setVal]=useState("...")
  return (
    <div>
      <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder='Input some text...' style={{padding:"10px"}}/>
      <h2>{val}</h2>
      <button onClick={(event)=> setVal("")}>Clear Text</button>
    </div>
  )
}

export default InputField
