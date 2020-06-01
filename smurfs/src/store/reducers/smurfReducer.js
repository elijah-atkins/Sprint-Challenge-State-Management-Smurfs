import axios from 'axios'
//import actions
import {
  ADD_SMURF,
  SMURF_FETCH_SUCCESS,
  SMURF_FETCH_ERROR,
  UPDATE_NAME,
  UPDATE_AGE,
  UPDATE_HEIGHT,
} from "../actions";

const initialState = [
  {
    name: '',
    age: '',
    height: '',
    error: '',
    smurfs: []
  },
];

axios
  .get('http://localhost:3333/smurfs')
  .then(res => {
    initialState.smurfs = res.data
  })

  export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
      case ADD_SMURF:
        const newSmurf = {
          name: state.name,
          age: state.age,
          height: state.height
        }
        axios.post('http://localhost:3333/smurfs', newSmurf)
        return {
          ...state,
          name: '',
          age: '',
          height: ''
        }
      case SMURF_FETCH_ERROR:
        return {
          ...state,
          error: action.payload
        }
      case SMURF_FETCH_SUCCESS:
        return {
          ...state,
          smurfs: action.payload
        }
      case UPDATE_NAME:
        return {
          ...state,
          name: action.payload
        }
      case UPDATE_AGE:
        return {
          ...state,
          age: action.payload
        }
      case UPDATE_HEIGHT:
        return {
          ...state,
          height: action.payload
        }
      default:
        return state;
    }
  }
// fetching
// feteched
// errorFetching
