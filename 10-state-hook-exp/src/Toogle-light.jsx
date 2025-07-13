// import React from "react";
import { useState } from "react";


import React from 'react'


function ToogleLight() {
    const [toogle, useToogle]= useState(true);

    function toogleFun(){
        useToogle(!toogle);
    }

    let ToogleStatus;

    if(toogle==true){
        ToogleStatus="💡"

    }else{
        ToogleStatus="🏮"
    }
  return (
    <div>
      <h1>Toogle light App</h1>
      <h2>Light {ToogleStatus}</h2>

      <button type="button" onClick={toogleFun}>Toogle Light</button>
    </div>
  )
}

export default ToogleLight;
