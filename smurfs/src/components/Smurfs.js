import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurf } from '../store/actions/smurfActions';

const Smurfs = (props) => {
    const smurfs = props.smurfs;
    const getSmurf = props.fetchSmurf;
    //console.log('Smurfs props', smurfs[0]);
    useEffect(() => {
        getSmurf()
    }, [getSmurf])
    return(
        <div className="smurfVillage">
        {console.log(smurfs)}
        {smurfs.slice(0, smurfs.length-2).map((smurf) => {
            return(
                <div className="Smurf" key={smurf.id}>
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
    console.log(state)
    return{
        smurfs: Object.values(state),
        fetchingSmurf: state.fetchingSmurf,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchSmurf })(Smurfs)
