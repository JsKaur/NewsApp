import './App.css';

import React, { Component } from 'react'
import NavBar from './components/Navbar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
   pageSize=15;

   state={
    progress:0
   }
   setProgress =(progress)=>{
    this.setState({progress:progress})
   }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
        color="#f11946"
        height={3}
        progress={this.state.progress}
       
      />
          <Routes>
            <Route exact path="/" element={<News setprogress={this.setProgress}key="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route exact path="/business" element={<News setprogress={this.setProgress}key="business" pageSize={this.pageSize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setprogress={this.setProgress}key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News setprogress={this.setProgress}key="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route exact path="/health" element={<News setprogress={this.setProgress}key="health" pageSize={this.pageSize} country="in" category="health" />} />
            <Route exact path="/science" element={<News setprogress={this.setProgress}key="science" pageSize={this.pageSize} country="in" category="science" />} />
            <Route exact path="/sports" element={<News setprogress={this.setProgress}key="sports" pageSize={this.pageSize} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News setprogress={this.setProgress}key="technology" pageSize={this.pageSize} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
