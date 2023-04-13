import axios from 'axios'
import React,{useState,useEffect} from 'react'
import EmployeeService from '../Services/EmployeeService'
import {useHistory,Link,useParams} from 'react-router-dom'
const AddOrUpdateEmployee = () => 
{

    const [firstname,setFirstname]=useState('')
    const [lastname,setLastname]=useState('')
    const [emailId,setEmailId]=useState('')
    const history=useHistory();
    const {id}=useParams();

    useEffect(() => {

        EmployeeService.getEmployeeById(id).then((response) =>{
            setFirstname(response.data.firstname)
            setLastname(response.data.lastname)
            setEmailId(response.data.emailId)
            console.log(firstname+" "+lastname)
        }).catch(error => {
            console.log(error)
        })
    }, [])
    const AddOrUpdate=(e)=>{
        e.preventDefault();
        const employee={firstname,lastname,emailId}
        console.log(employee);
        if(id)
        {
            EmployeeService.updateEmployee(id,employee)
            .then((response)=>{
                console.log("updated successfully")
                history.push("/employees")
            })
            .catch((error)=>{
                console.log(error)
            })
        }
        else
        {
        EmployeeService.createEmployee(employee)
        .then(response=>{
            console.log(response.data)
            history.push("/employees")        
        })
        .catch(error=>{
            console.log(error)
        })
        }
    }

    
const title=()=>{
    return id?<h2 className="text-center">Update Employee</h2>:<h2 className="text-center">Add Employee</h2>;
}


  return (
    <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                        title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> First Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter first name"
                                        name = "firstname"
                                        className = "form-control"
                                        value={firstname}
                                        onChange = {(e) => setFirstname(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Last Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter last name"
                                        name = "lastname"
                                        className = "form-control"
                                        value={lastname}
                                        onChange = {(e) => setLastname(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email Id :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter email Id"
                                        name = "emailId"
                                        className = "form-control"
                                        value={emailId}
                                        onChange = {(e) => setEmailId(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <button className = "btn btn-success" onClick = {AddOrUpdate} >{id?"Update Employee": "Add Employee"}</button>
                                <Link to="/employees" className="btn btn-danger"> Cancel </Link>
                            </form>
                        </div>
                    </div>
                </div>
           </div>
        </div>
  )
}

export default AddOrUpdateEmployee