
import './App.css';

// write rcc and enter"
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


// creating class based component:

// management of methods is very easy
export default class App extends Component {
  
// render is lifecycle method means that it complies JSX to HTML and it will be called automatically when the component is loaded.
  render() {
    return (
      <>
      <Navbar />
      <News pageSize={5}/>
      
      </>
    )
  }
}

