import React from "react";
import "./App.css";
/*import Home from "./components/Home";

import Register from "./components/Register";

import { Route, Switch } from "react-router-dom";*/
//import Initial from "./components/Initial";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
function App() {
  return (
    <div>
      <Navigation />

      <Login />
      {/* <Switch>
      <Route exact path="/">
      <Initial/>
      </Route<
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
     </Switch>*/}
    </div>
  );
}

export default App;
