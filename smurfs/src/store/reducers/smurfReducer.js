//import actions
import {
    SMURF_FETCHING,
    SMURF_FETCH_SUCCESS,
    SMURF_FETCH_ERROR
} from '../actions/smurfActions';

const initialState = {
  smurfs: [
    {
      name: "Brainey",
      age: 200,
      height: "5cm",
      id: 0,
    },
  ],
  fetchingSmurf: false,
  error: "",
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case SMURF_FETCHING:
      return {
        ...state,
        fetchingSmurf: true,
      }; // if we're fetching simply trigger the boolean!
    case SMURF_FETCH_SUCCESS:
      //console.log('smurfReducer Fetch Succesful',action.payload)
      return {
        ...state,
        ...action.payload, // if our promise was successfull, build out the smurfs array.
        fetchingSmurf: false, // also, set our boolean to false, because we're no longer fetching
        error: "",
      };
    case SMURF_FETCH_ERROR:
      return {
        ...state,
        fetchingSmurf: false, // we're also no longer fetching here so set the boolean to false
        error: "Error fetching Location", // now we're getting an error back, set the error as we'd see fit
      };
    default:
      return state;
  }
};

// fetching
// feteched
// errorFetching
