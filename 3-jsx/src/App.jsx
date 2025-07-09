// this file is for jsx tutorial
import { jsx } from 'react/jsx-runtime';
import { AddTwoNumbers, Image, Profile } from './jsx';
import './App.css'


export default function App(){
  var img_src = 'https://i.imgur.com/7vQD0fPs.jpg';
  var img_class = 'person-image';
  var img_description = 'Gregorio Y. Zara';

  return(
    <>
      <Image/>
      <img src={img_src} className={img_class} alt={img_description} />
      <AddTwoNumbers />
      <Profile />
    </>
  )
}