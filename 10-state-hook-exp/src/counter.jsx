import { useState } from "react";

import React from 'react'

function Counter() {

    const [count,setCount] = useState(0);
  return (
    <div>
      <h1>Counter App</h1>
      <h2>Number: {count}</h2>
      <button type="button" onClick={()=>setCount(count + 1)}>Increase</button>
      <button type="button" onClick={()=> setCount(count - 1)}>Decrease</button>
      <button type="button" onClick={()=> setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter
