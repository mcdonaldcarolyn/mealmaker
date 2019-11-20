import React ,{ Component } from 'react';
import "./index.css";
// import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
