import React from 'react';

class EvenOddComponent extends React.Component {

    render() {
        var numbers = [12, 77, 33, 11, 14, 32, 89, 24, 8]

        var oddNumber = numbers.filter(function (number) {
            return number % 2 !== 0
        }).map(function (number) {
            return <li> {number} </li>
        })

        var evenNumber = numbers.filter(function (number) {
            return number % 2 === 0
        }).map(function (number) {
            return <li> {number} </li>
        })

        return (
            <div>
                <div>
                <h2>Odd Numbers</h2>
                <ul>{oddNumber}</ul>
                </div>
                <div>
                <h2>Even Numbers</h2>
                <ul>{evenNumber}</ul>
                </div>
                
            </div>
        )
    }
}

export default EvenOddComponent;