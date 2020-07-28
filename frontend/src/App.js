import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import Initial from "./components/Initial";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import Wish from "./components/Wish";
function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Initial />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/wish">
          <Wish />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
