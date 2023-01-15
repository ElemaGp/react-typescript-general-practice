import './employees.css'
import React from 'react'
import { EmployeesList } from '../../EmployeesList'
import ReusableButton from '../../components/reusableButton/ReusableButton'
import FlexibleReusableButton from '../../components/flexibleReusableButton/FlexibleReusableButton'

const Employees = () => {
  return (
    <div>
        {
        EmployeesList.map((employee)=>{
            return(
                <ul>
                    <li>{employee.id}</li>
                    <li>{employee.name}</li>
                    <br />
                </ul>
            )
        })
        }

        <ReusableButton backgroundColor='teal' color="white" padding='1rem' borderRadius='6px' children="Sign up"/>
        
        <br />

        <FlexibleReusableButton styles={{color: "red", padding: "9px", backgroundColor: "gray", display: "inline-block", marginTop: "1rem", cursor: "pointer"}} children="Submit"/>
    </div>
  )
}

export default Employees