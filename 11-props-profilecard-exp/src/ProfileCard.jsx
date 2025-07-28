import React from 'react'

function Profile({name,age,city,skills}) {
  function showDetails(){
      return alert(`
        my name is ${name}
        i lived in ${city}
        i am ${age} years old.
        i gain skills like: ${skills}`)
  
    }
  return (
    <div>
      <h2>Username: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>City: {city}</h2>
      <h2>Skills: {skills}</h2>
      <button onClick={showDetails}>Show Details</button>
    </div>
  )
}


function ProfileCard() {
  let name ="Huzaifa";

    const details={
      age:'22',
      city:"swabi"
    }

    const skills=[
      'HTML ',' CSS ',' JS ',' React '
    ]

  return (
    <div>
        <h1>Profile Card Information</h1>
        <Profile 
        name={name}
        age={details.age}
        city={details.city}
        skills={skills}
        />
    </div>
  )
}

export default ProfileCard
