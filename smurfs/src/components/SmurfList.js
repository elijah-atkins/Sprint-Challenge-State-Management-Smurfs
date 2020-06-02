import React from "react";
import { connect } from "react-redux";

class SmurfList extends React.Component {
  
  render() {
    const smurfs = this.props.smurfs;
    console.log("ea, SmurfList props", this.props);
    return (
      <div className="smurfsListDiv">
        {smurfs &&
          smurfs.map((smurf, index) => (
            <div key={index} className="smurf">
              <h1 className="details">{smurf.name}</h1>
              <p className="details">{smurf.age}</p>
              <p className="details">{smurf.height}</p>
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, {})(SmurfList);
