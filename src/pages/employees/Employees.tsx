import './employees.css'
import React from 'react'
import { EmployeesList } from '../../EmployeesList'
import ReusableButton from '../../components/reusableButton/ReusableButton'

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
    </div>
  )
}

export default Employees