import React from 'react';

import EmployeeComponent from './EmployeeComponent';
import './EmployeeInfoComponent.css';

class EmployeeInfoComponent extends React.Component {
    constructor() {
        super();
        this.state={
        empInfo :[
            {
              empId:1,
              empName:"Tejashree",
            },
            {
              empId:2,
              empName:"Monika",
            },
            {
              empId:3,
              empName:"Vishal",
            }
            ]
        }
    }

    render() {
        return (
           <table >
                {this.state.empInfo.map((emp)=>{
                        return <EmployeeComponent key={emp.empId} emp={emp} />
                    })}
               </table>
        )
    }

    
}


export default EmployeeInfoComponent;