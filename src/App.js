
import './App.css';

// write rcc and enter"
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// creating class based component:

// management of methods is very easy
export default class App extends Component {
  
// render is lifecycle method means that it complies JSX to HTML and it will be called automatically when the component is loaded.
  render() {
    return (
      <>
      <Router>
      <Navbar />
      
      <Switch>
        <Route exact path="/"><News key="general" pageSize={5} country="us" category="general" /></Route>
        <Route exact path="/general"><News key="general" pageSize={5} country="us" category="general" /></Route>
        <Route exact path="/business"><News key="business" pageSize={5} country="us" category="business" /></Route>
        <Route exact path="/entertainment"><News key="entertainment" pageSize={5} country="us" category="entertainment" /></Route>
        <Route exact path="/health"><News key="health" pageSize={5} country="us" category="health" /></Route>
        <Route exact path="/science"><News key="science" pageSize={5} country="us" category="science" /></Route>
        <Route exact path="/sports"><News key="sports" pageSize={5} country="us" category="sports" /></Route>
        <Route exact path="/technology"><News key="technology" pageSize={5} country="us" category="technology" /></Route>
        
      </Switch>
      </Router>
      </>
    )
  }
}

