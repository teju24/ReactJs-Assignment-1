import React from 'react';

class SearchComponent extends React.Component{
    render(){
        return(
            <div id="search-form">
                <form>
                    <input type="text"  /> <button>Search</button>
                </form>
            </div>
        )
    }
}

export  default SearchComponent;