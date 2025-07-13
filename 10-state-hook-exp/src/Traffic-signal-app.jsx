import { useState } from "react";


import React from 'react'

function TrafficSignal() {

    const [count,useCount]=useState(0);
    
  return (
    <div>
      <h1>Traffic Signal App</h1>
        <h2>Number: {count}</h2>

        <button type="button" onClick={()=>useCount(count + 1)}>
            Increase
        </button>
        
            {
                count==0 ? <h2>Go 🟢</h2> 
                :count==1 ? <h2>Stop 🔴</h2>
                :count==2 ? <h2>Wait 🟡</h2>
                :count==3 ? <h2>caution 🤍</h2>
                : <h2>Invalid light</h2>
                
            }
        
    </div>
  )
}

export default TrafficSignal;
