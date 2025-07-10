import ProductActionPanel from './Product'
import './App.css'
import React from 'react'

function App() {
  return (
    <div>
      <ProductActionPanel 
        name="Mobile"
        price={12000}
      />
      <ProductActionPanel 
        name="Laptop"
        price={19000}
      />
      <ProductActionPanel 
        name="Airbuts"
        price={1000}
      />
    </div>
  )
}

export default App
