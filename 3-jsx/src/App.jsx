// this file is for jsx tutorial

import { jsx } from 'react/jsx-runtime';
import './App.css'

var person={
  name: 'huzaifa',
  theme: {
    color:"green"
  }
}

export function App() {
  return (
    <>
      <h1 style={{
        background:'blue',
        color:'red'
      }}
      
      >My name is </h1>
      <h2>Muhammad Huzaifa</h2>

      <ul className='custom-ul' style={person.theme}>
        <li>list 1</li>
        <li>list 2</li>
        <li>list 3</li>
        <li>list 4</li>
      </ul>
    </>
  )
}

// put images src through js variables 
// for using javascipt everywhere in jsx we need in curly brackets
export default function Image(){
  var img_src = 'https://i.imgur.com/7vQD0fPs.jpg';
  var img_class = 'person-image';
  var img_description = 'Gregorio Y. Zara';

  return(
    <>
      <App/>
      <img src={img_src} className={img_class} alt={img_description} />
    </>
  )
}