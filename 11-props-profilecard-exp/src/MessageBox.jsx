import React from 'react'


function Message({user="New User! ",children,color,background,padding}) {
  return (
    <div>
        <h2 style={{color:color, background:background, padding:padding}}>Welcome to TechByHuzaifa</h2>
        <h2>Hi! {user}</h2>
        {children}
      <hr />
    </div>
  )
}



function MessageBox() {
    let styleprops={
        color:"red",
        background:"gray",
        padding:"10px"
    }
  return (
    <div>
        <Message  user='Asad'  />
        <Message/>
        <Message color={styleprops.color} background={styleprops.background} padding={styleprops.padding}>
            <strong>this is strong element</strong>
        </Message>
    </div>
  )
}

export default MessageBox
