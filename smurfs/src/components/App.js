import React, { Component } from "react";
import "./App.css";
import Smurfs from '../components/Smurfs';
import AddSmurf from '../components/AddSmurf'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddSmurf />
        <Smurfs />
      </div>
    );
  }
}

export default App;
