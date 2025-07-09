import React from "react";

export default function StudentCard({fstudentName,lstudentName,studentAge}){

    let fname = fstudentName;
    let lname = lstudentName;
    let age = studentAge;

    let eligiblity = "";

    if(age >= 18){
        eligiblity = "eligible for college";
    }else if(age < 18){
        eligiblity = "school ka student"
    }

    function fullname(){
        return `${fname} ${lname}`;
    }

    let nextBirthday = age + 1;

    //   console.log(eligibility);
    return(
        <div>
            <h1>Student Information</h1>
            <h2>Student name: {name}</h2>
            <h2>Student age: {age}</h2>
            <h2>{eligiblity}</h2>
            <h2>{fullname()}</h2>
            <h2>{nextBirthday}</h2>
        </div>
    )
}