import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './userCard'



export default function App(){
  return(
    <div className='app'>
      <UserCard
        name= "ali"
        age= {20}
        city= "karachi"
      />
      <UserCard
        name= "ihsan"
        age= {22}
        city= "islamabad"
      />
      <UserCard
        name= "hamza"
        age= {19}
        city= "lahore"
      />
    </div>
  )
}

 