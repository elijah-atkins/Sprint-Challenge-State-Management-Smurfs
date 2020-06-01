import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurf } from '../store/actions/smurfActions';

const Smurfs = (props) => {
    console.log('Smurfs props', props);
    return(
        <div>Smurf It</div>
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