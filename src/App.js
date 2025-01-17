
import './App.css';

// write rcc and enter"
import React, { Component } from 'react'

// creating class based component:

// management of methods is very easy
export default class App extends Component {
  c="John";

  render() {
    return (
      <div>
        <h1>Hello my first class based component: {this.c}</h1>
      </div>
    )
  }
}

