import React from "react";

export default function UserCard({name, age, city}){
    return(
        <div className="usercard">
            <h1>Student Card</h1>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <h2>City: {city}</h2>
        </div>
    )
}