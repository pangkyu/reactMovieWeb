import React from "react";
import './App.css';


class App extends React.Component{
  state = {
    isLoading : true,
    movies : []
  }

  componentDidMount(){
    setTimeout(() =>{
      this.setState({isLoading : false});
    }, 6000);
  }

  render(){
    const { isLoading } = this.state;
    return( 
      <div>
        {isLoading ? "Loading" : "we are ready"}
      </div>
    );
  }
}

export default App;
