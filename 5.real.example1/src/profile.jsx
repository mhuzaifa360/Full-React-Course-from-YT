import React from "react";

export default function Card(props){
    return(
        <div className="card">
            <img 
            src= {props.url} 
            alt= {props.name} 
            width={props.size}
            height={props.size}
            />
            <br />
            <h3>Student Card</h3>
            <h2 style={{color:"blue"}}>{props.name}</h2>
            <p>{props.location}</p>
            <button>{props.btnName}</button>

        </div>
    )
}

 