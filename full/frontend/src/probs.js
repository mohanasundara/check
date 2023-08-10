import React from "react";
import react from "react";
import css from "./App.css" 
import axios from "axios";
 

 class App extends React.Component{
  constructor(){
    super();


  }
  render(){
    return<>
    <h1>hello probs welcome babu{this.props.rrname}</h1>
    </>
  }
}
export default App;