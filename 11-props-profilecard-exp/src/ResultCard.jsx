import React from 'react'


function StudentInfo({name,rollNo,grade,subjects,percentage}) {
    function showResult(){
        return alert(`
            my name is ${name}
            my class no is ${rollNo}
            my grade in exam is ${grade}
            subjects include in exam ${subjects}
            got percentage in exam ${percentage}`)
    }
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>Roll No: {rollNo}</h2>
      <h2>Subjects: {subjects}</h2>
      <button onClick={showResult}>Show Result</button>
      <hr />
      <hr />
    </div>
  )
}


function ResultCard() {
    const info={
        name:"Ali",
        rollNo: 'A230',
        grade: "A+",
        percentage: '90%',
        subjects:[' English',' Urdu',' Maths']
    }
    const info2={
        name:"hamza",
        rollNo: 'A222',
        grade: "A",
        percentage: '80%',
        subjects:[' English',' Urdu',' Maths']
    }
    const info3={
        name:"ali hassan",
        rollNo: 'A290',
        grade: "B+",
        percentage: '70%',
        subjects:[' English',' Urdu',' Maths']
    }
  return (
    <div>
        <h1>Result Card</h1>
      <StudentInfo 
      name={info.name} rollNo={info.rollNo} grade={info.grade} subjects={info.subjects} percentage={info.percentage}
      />
      <StudentInfo 
      name={info2.name} rollNo={info2.rollNo} grade={info2.grade} subjects={info2.subjects} percentage={info2.percentage}
      />
      <StudentInfo 
      name={info3.name} rollNo={info3.rollNo} grade={info3.grade} subjects={info3.subjects} percentage={info3.percentage}
      />
    </div>
  )
}

export default ResultCard
