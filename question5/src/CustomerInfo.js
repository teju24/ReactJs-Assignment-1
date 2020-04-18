import React from 'react';
import './CustomerInfo.css'

class CustomerInfo extends React.Component {


    render() {
        var customerInfo = [
            {
                custId: 1,
                custName: "Tejashree",
                custAddress: "Pune"
            },
            {
                custId: 2,
                custName: "Vishal",
                custAddress: "India"
            },
            {
                custId: 3,
                custName: "Amol",
                custAddress: "India"
            },
            {
                custId: 4,
                custName: "Ashu",
                custAddress: "India"
            }
        ]
        var selectedCustomer = customerInfo.filter(function (customer) {
            return ((customer.custName).startsWith('A') && customer.custAddress === "India")
        }).map(function (customer) {
        return (<tbody><tr key={customer.custId} ><td>{customer.custId}</td><td>{customer.custName}</td><td>{customer.custAddress}</td></tr></tbody>)
        })
        return (
            <div>
                <div>
                    <h2>Customers</h2>
                    <table>{selectedCustomer}</table>
                </div>
            </div>
        )
    }


}


export default CustomerInfo;