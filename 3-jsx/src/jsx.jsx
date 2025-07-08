

var person={
  name: 'huzaifa',
  theme: {
    color:"green"
  }
}
export function Image() {
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

export function AddTwoNumbers(){
    let num1 = 12;
    let num2 = 11;
    let sum = num1 + num2;
    return(
        <div>
            <h2>the sum of {num1} and {num2} is {sum}</h2>
        </div>
    )
}