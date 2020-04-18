import React from 'react';
import MyNameComponent from './MyNameComponent';

class HelloComponent extends React.Component{
    render(){
        return(
            <div>
                <h4> Hello <MyNameComponent/> </h4>
            </div>
        )
    }

}

export default HelloComponent;