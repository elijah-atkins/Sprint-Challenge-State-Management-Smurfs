import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";

ReactDOM.render(<Provider><App /></Provider>, document.getElementById("root"));
