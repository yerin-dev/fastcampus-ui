import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import App from "./view/App";
import HISTORY from "./lib/History";

ReactDOM.render(
  <Router history={HISTORY}>
    <App />
  </Router>,
  document.getElementById("root")
);
