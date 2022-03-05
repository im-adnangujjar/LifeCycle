import React from 'react'
import {useState} from 'react'

function FormHandling() {
    const [name, setName] = useState("")
    const [password, setPassword]= useState('')
    const [batch , setBatch]=useState("")
    const [studClass, setClass]=useState("")
    const [roll , setRoolNo]=useState("")
    const [show , setShow]=useState(false);

    const submitHandler=() =>{
    let student = {
      name:name,
      password:password,
      batch,
      Class:studClass,
      RollNo:roll,
    }
    console.log("student",student);
    setShow(true);
    }
    

    
  return (
    <div>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Eter your name" /><br/>
    <br/>
    <input type ="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Eter your password'/>   
    <br/><br/>
    <input type ="text" value={batch} onChange={(e)=>setBatch(e.target.value)}  placeholder="Enter your Batch"/>
    <br/><br/>
    <input type ="text"value={studClass} onChange={(e)=>setClass(e.target.value)}  placeholder="Enter your class"/> 
    <br/><br/>
    <input type ="text" value={roll}onChange={(e)=>setRoolNo(e.target.value)} placeholder="Enter your RoolNo"/>
<br/><br/>
<button onClick={submitHandler}>submit</button>
{
  show ? <>
    <p>Name:{name}</p>
    <p>password:{password}</p>
    <p>Batch:{batch}</p>
    <p>Class:{studClass}</p>
    <p>RoolNo:{roll}</p>
  </> : null
}

    </div>
  );
}

export default FormHandling