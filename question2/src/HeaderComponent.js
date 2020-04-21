import React from 'react';

class HeaderComponent extends React.Component{
    render(){
        return(
            <div>
                <ul >
                        <li><a href="#">Home |</a></li>
                        <li><a href="#">About |</a></li>
                        <li><a href="#">Service |</a></li>
                        <li><a href="#">Contact </a></li>
                    </ul>
            </div>
        )
    }
}

export  default HeaderComponent;