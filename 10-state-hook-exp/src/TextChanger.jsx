import React, { useState } from 'react'

function TextChanger() {
    const [changer, setChanger]=useState(true)
    
    function textChanger(){
        setChanger(!changer)
    }
    
    let text;
    if(changer == true){
        text = "my text 1";
    }else{
        text = "my text 2"
    }



  return (
    <div>
      <h1>Text Changer Example </h1>
    <h2>{text}</h2>
        <button onClick={textChanger}>Text Changer</button>
    </div>
  )
}

export default TextChanger
