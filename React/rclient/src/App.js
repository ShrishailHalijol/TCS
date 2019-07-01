import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
// import Error from "./components/Error";
import Header from "./components/Header";
import Employees from "./components/Employees";

class App extends Component {
  navigate = () => {
    window.location.href = "http://localhost:49685/";
  };

  render() {
    return (
      <BrowserRouter>
          <div>
            <Header/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/Employees" component={Employees} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
