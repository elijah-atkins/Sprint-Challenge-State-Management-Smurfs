import React, { Component } from "react";
import "./App.css";
import SmurfList from './SmurfList';
import AddSmurfForm from '../components/AddSmurfForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddSmurfForm />
        <SmurfList />
      </div>
    );
  }
}

export default App;
