import axios from 'axios'

export const SMURF_FETCHING = "SMURF_FETCHING";
export const SMURF_FETCH_SUCCESS = "SMURF_FETCH_SUCCESS";
export const SMURF_FETCH_ERROR = "SMURF_FETCH_ERROR";
// Those three types above are all a representation of our State Machine
// fetching, resolve, reject..

export const fetchWeather = () => {
    const promise = axios.get('http://localhost:3333/smurfs');
    return dispatch =>{
        dispatch({type: SMURF_FETCHING});
        promise
        .then(response => {
            console.log('smurfAction: then:', response.data)
            dispatch({ type: SMURF_FETCH_SUCCESS, payload: response.data}) // 2nd state of success is dispatched IF the promise resolves
        })
        .catch(err => {
            console.log('smurfAction: err', err),
            dispatch({ type: SMURF_FETCH_ERROR, payload: err}); // our other 2nd state of 'rejected' will be dispatched here.
        })
    }
}
