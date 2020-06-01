import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/App";
import { smurfReducer } from './store/reducers/smurfReducer'
import { createStore, applyMiddleware } from "redux";

//create store with reducer
const store = createStore(smurfReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
