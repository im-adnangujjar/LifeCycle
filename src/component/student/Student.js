import React from 'react'
import {useState} from 'react'

function Student() {
  const [student, setStudent] = useState([
    {
      Name: "Adnan",
      Roll: "8098",
      Batch: "04",
      Class: "web and mobile",
    },
  {
      Name: "gujjarbrother",
      Roll: "4567",
      Batch: "04",
      Class: "web and mobile",
    },
      {
      Name: "Arslan",
      Roll: "7075",
      Batch: "04",
      Class: "web and mobile",
    },
          {
      Name: "gujjar",
      Roll: "0498",
      Batch: "04",
      Class: "web and mobile",
    }

  ])

  return (
    <div>
      <tr>
      <th>no</th>
        <th>Student Name</th>
        <th>Student Roll</th>
        <th>Student Class</th>
        <th>Student Batch</th>
      </tr>
      {
        student.map((student, index)=>{
         return(
          <tr>
          <td>{index}</td>
        <td>{student.Name}</td>
        <td> {student.Roll}</td>
        <td>{student.Class}</td>
        <td>{student.Batch}</td>
      </tr>
         )
        })
      }
      

    </div>
  )
}

export default Student