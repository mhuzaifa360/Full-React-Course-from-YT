

import React from 'react'

function ProductActionPanel({name,price}) {
    let productName = name;
    let productPrice = price;

    function showDetail(){
        return alert(`
        Product: ${name}
        Price: ${price}
        `);
    }

    function applyDiscount(){
        return alert(`
        Old price: ${price}
        Discount: 40%
        New Price: ${price-(price*40/100)}
        `);
    }

    let buyNow=()=>{
        return alert("Thank for buying..!");
    }
  return (
    <div>
      <h2>Product Name: {productName}</h2>
      <h2>Product Price: {productPrice}</h2>

      <button onClick={showDetail}>Show Detail</button>
      <button onClick={applyDiscount}>Apply Discount</button>
      <button onClick={buyNow}>Buy Now</button>
    </div>
  )
}

export default ProductActionPanel;