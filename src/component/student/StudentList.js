import React from 'react'

function StudentList({student}) {
      
    return (
        <div>
  
          <tr>
          <td>{student.Name}</td>
          <td>{student.Roll}</td>
          <td>{student.Batch}</td>
          <td>{student.Class} </td>
        </tr>
           </div>
      )
  
}

export default StudentList