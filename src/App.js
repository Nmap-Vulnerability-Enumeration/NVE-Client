import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Results from './Pages/Results'
import Home from './Pages/Home'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/search" component={Home}></Route>
          <Route exact path="/scan/IpAddress=:address&SubnetMask=:mask" component={Results}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
