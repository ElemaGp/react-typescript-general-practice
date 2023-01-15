import './employees.css'
import React from 'react'
import { EmployeesList } from '../../EmployeesList'

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
    </div>
  )
}

export default Employees