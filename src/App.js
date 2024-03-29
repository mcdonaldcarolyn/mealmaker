import React, { Component } from "react";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import singleGoal from './components/Agoal';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" component={Home} />
            <Route path='/:id' component={singleGoal} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
