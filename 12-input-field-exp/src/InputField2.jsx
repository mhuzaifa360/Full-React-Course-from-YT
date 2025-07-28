import React from 'react'
import { useState } from 'react'

function InputField2() {
    const [val,setval]=useState("");

    function setValue(){
        console.log(val);
        setval("");
        
    }
  return (
    <div>
      <hr />
      <h1>input field 2</h1>
      <input type="text" value={val} placeholder='Enter some text...' onChange={(event)=>setval(event.target.value)}/>
        <h2>{val}</h2>
      <button onClick={setValue}>set value</button>
      <hr />
    </div>
  )
}

export default InputField2
