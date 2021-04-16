import React from "react";
import {Route, Switch} from "react-router-dom";
import Case1_React from "../page/Case1/react";
import Case1_Js from "../page/Case1/js";
import Case1_ReactPortal from "../page/Case1/createpotal";
import Home from "../Home";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/case-1-js" component={Case1_Js}/>
      <Route exact path="/case-1-react" component={Case1_React}/>
      <Route exact path="/case-1-reactPortal" component={Case1_ReactPortal}/>
    </Switch>
  );
}

export default Routes;