import React from "react";

class Form extends React.Component {

render(){
    return (
        <form >
            <select>
                { this.props.values.map((movie, key) => <option key={key} >{movie.name}</option>) }
            </select>
            <button>Submit</button>
        </form>
    
        
    )
}
}
export default Form;
