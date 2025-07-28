import React from 'react'
import { useState } from 'react'

function InputField3() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    function showDetials(){
        return alert(`
            My name is ${name}
            my email is ${email}
            my password is ${password}`)
    }
  return (
    <div>
      <h1>Contorller component</h1>
      <form action="">

      <input type="text" placeholder='Enter your name..' onChange={(event)=>{setName(event.target.value)}} value={name}/> <br /> <br />

      <input type="text" placeholder='Enter your email..' onChange={(event)=>{setEmail(event.target.value)}} value={email}/> <br /> <br />

      <input type="password" placeholder='Enter your password..' onChange={(event)=>{setPassword(event.target.value)}} value={password}/> <br /> <br />

        <button type='submit' onClick={showDetials}>Submit</button>
        <button onClick={(event)=>{setName(""),setEmail(""),setPassword("")}}>Reset</button>
      </form>
      <h2>{name}</h2> 
      <h2>{email}</h2> 
      <h2>{password}</h2> 
    </div>
  )
}

export default InputField3
