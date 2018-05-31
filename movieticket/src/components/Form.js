import React from "react";

class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            price:undefined,
            movieDataID: undefined,
            movieDataName: undefined,
            movieDataPrice: undefined,
            movieDataImage: undefined,
            movieDataNowShowing: undefined,
            };
        
     this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (e) => {
   
        var valueData = this.props.values.filter(function(item) {
            return item.name === e.target.value
          })
        this.setState({
             movieDataID: valueData[0].id,
            movieDataName: valueData[0].name,
            movieDataPrice: valueData[0].price,
            movieDataImage: valueData[0].image,
            movieDataNowShowing: valueData[0].now_showing,
            
        })
        e.preventDefault();
      }

render(){
    return (
        <div>
        <form >
        <select onChange={this.handleChange}>
        {this.props.values.map(function(data, key){  return (
          <option key={key} value={data.name}>{data.name}</option> )
        })}
        </select>
            {/* <button >Submit</button> */}
        </form>
      
        

      </div>
    
//     <input type = "number" value = {this.state.movieData.price} 
//     onChange = {this.updateState} />
//  <h3>{this.state.data}</h3>
    )
}
}
export default Form;
