import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurf } from '../store/actions/smurfActions';

const Smurfs = (props) => {
    const smurfs = props.smurfs;
    console.log('Smurfs props', smurfs[0]);

    return(
        <div className="smurfVillage">
        {smurfs.map((smurf) => {
            return(
                <div className="Smurf">
                    <div className="name">
                        <h1>{smurf.name}</h1>
                    </div>
                    <div className="age">
                        <p>{smurf.age} years old</p>
                    </div>
                    <div className="height">
                    <p>{smurf.height} tall</p>
                    </div>
                </div>
            )
        })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        smurfs: state.smurfs,
        fetchingSmurf: state.fetchingSmurf,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchSmurf })(Smurfs)