import './App.css'
import Card from './profile'


export default function App(){
  return(
    <div className='card-section'>
      <Card 
      url="https://shorturl.at/Xl5n2"
      name="Huzaifa"
      size={100}
      location="swabi"
      btnName= "Click Now"
      />
      <Card 
      url="https://shorturl.at/Xl5n2"
      name="ihsan"
      size={100}
      location="swabi"
      btnName= "Click Now"
      />
      <Card 
      url="https://shorturl.at/Xl5n2"
      name="hamza"
      size={100}
      location="swabi"
      btnName= "Click Now"
      />
    </div>
  )
}

 