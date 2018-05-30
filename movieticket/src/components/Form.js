import React from "react";

class Form extends React.Component {

render(){
    return (
        <form  onClick = {this.props.GetMovieData}>
            
            <button>Submit</button>
        </form>
    
        
    )
}
}
export default Form;
