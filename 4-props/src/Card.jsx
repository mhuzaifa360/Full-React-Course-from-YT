import React from "react"

export default function StudentCard({name,roll,address}){
    function called(){
        return alert(`Function called for student detial
              name is  ${name} 
              roll num is ${roll}
              address is ${address}
             `)
    }
    return(
        <div className="studentcard">
            <h1>Student card</h1>
            <h2>Name : {name}</h2>
            <h2>Roll No: {roll}</h2>
            <h2>Adress: {address}</h2>
            <button onClick={called}>Click Now</button>
        </div>
    )
}