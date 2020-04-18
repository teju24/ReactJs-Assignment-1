import React from 'react';
import MyNameComponent from './MyNameComponent';

class HelloComponent extends React.Component{
    render(){
        return(
            <div>
                Hello <MyNameComponent/>
            </div>
        )
    }

}

export default HelloComponent;