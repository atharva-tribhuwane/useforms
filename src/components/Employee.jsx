import React from "react";
import {useState} from "react";




const Employee = ()=>{
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [address,setAddress] = useState("");
    const [department,setDepartment] = useState("");
    const [salary,setSalary] = useState("");
    const [ismarried,setIsmarried] = useState(false);

    const submitdata = ()=>{
        const data = {
            "name":name,
            "age":age,
            "address":address,
            "department":department,
            "salary":salary,
            "marital state":ismarried
        }

        fetch(`http://localhost:3001/employee`,{
            method:"POST",
            body: JSON.stringify(data),
            headers:{
                "Content-type" : "application/json"
            }
        })
          .then((res)=>res.json())
          .then((res)=>console.log(res))
    }
    return(
        <div>
            <h1>Employee Details</h1>
            <form onSubmit={(e)=>e.preventDefault.default()} style={{display:"flex", flexDirection:"column", width:"30%", margin:"auto"}}>
                <label htmlFor="name">Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.preventDefault.value)}/>

                <label htmlFor="age">Age</label>
                <input type="text" value={age} onChange={(e)=>setAge(e.preventDefault.value)}/>

                <label htmlFor="address">Address</label>
                <input type="text" value={address} onChange={(e)=>setAddress(e.preventDefault.value)}/>

                <label htmlFor="name">Department</label>
                <input type="text" value={department} onChange={(e)=>setDepartment(e.preventDefault.value)}/>

                <label htmlFor="salary">Salary</label>
                <input type="text" value={salary} onChange={(e)=>setSalary(e.preventDefault.value)}/>

                <label htmlFor="ismarried">IsMarried</label>
                <input type="checkbox" value={ismarried} onClick={(e)=>setIsmarried(true)}/>

                <button onClick={submitdata}>Submit</button>
            </form>
        </div>
    )
}

export default Employee;