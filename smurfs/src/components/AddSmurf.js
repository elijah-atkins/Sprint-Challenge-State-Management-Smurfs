import React from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
//import connect
//import addSmurf actions

export const AddSmurf = () =>{
    const handleChanges = e => {

      };
    const postData = e => {
        e.preventDefault();
        console.log(e, e.target.value)

    };
    const handleClearForm = e => {

    }

    return (
        <div className="form">
        <form onSubmit={postData}>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" />
  <label for="age">Age:</label>
  <input type="text" id="age" name="age" />
  <label for="height">Height:</label>
  <input type="text" id="height" name="height" />
  <input type="submit" value="Submit" />
</form>
        </div>
      );
}

const mapStateToProps = (state) => {
    return {
        name: state.name,
        age: state.age,
        height: state.height,
    };
  };
  
  export default connect(mapStateToProps, {  })(AddSmurf);