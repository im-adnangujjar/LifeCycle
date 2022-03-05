import { useState } from "react";
import {Data} from "./Data"
import StudentList from './StudentList';

function Student1() {
  const [student, setStudent] = useState(Data)

  return (
    <div>
      <tr>
        <th>Name</th>
        <th>Batch</th>
        <th>Roll</th>
        <th>Class</th>
      </tr>
      {
        student.map((item) => {
          return (
  <StudentList Student={item}/>
)
        })
      }

    </div>
  )
}

export default Student1