import React from 'react'
import { useState } from 'react'


function Form() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    function showDetails(){
        console.log("username: "+username);
        console.log("password: "+password);

        setUsername("");
        setPassword("");
        
    }
  return (
    <div>
        <h1>Login Form</h1>
        <label htmlFor="Username">Username: </label>
        <input type="text" placeholder='Enter your name...' value={username} onChange={(event)=> {setUsername(event.target.value)}} style={{padding:"6px"}}/>
        <p>{username}</p>
        

        <label htmlFor="Password">Password: </label>
        <input type="text" placeholder='Enter your password...' value={password} onChange={(event)=> {setPassword(event.target.value)}} style={{padding:"6px"}}/>
        <p>{password}</p>
        
        {(username||password) && <button onClick={showDetails}>Submit</button>}
        
    </div>
  )
}

function LoginForm() {
  return (
    <div>
        <Form />
    </div>
  )
}

export default LoginForm
