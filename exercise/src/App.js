import React from 'react';
import './App.css';
import Titles from "./components/Titles";
import FormComponent from "./components/Form";
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mId: undefined,
      mName: undefined,
      mPrice: undefined,
      mNow_showing: undefined,
      mImage: undefined,
      MovieList: [],
    }
  }
  componentDidMount() {
    fetch(`https://www.mocky.io/v2/5af178123000003700ba7ff2`).then((Respone) => Respone.json()).then((findRespone) => {
      this.setState({
        MovieList: findRespone['data'],
      })
      console.log(this.state.MovieList)
    })


  }

  render() {
    return (
      <div className="App"> 
     
        <Titles />
        <FormComponent values={this.state.MovieList.filter(function(item){
          return item.now_showing === true ;
        })} />
      </div>
    );
  }
}

export default App;
