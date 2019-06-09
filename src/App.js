import React, { Component } from 'react';
import './CSS/App.css'

import Navbar from './navbar.js'
import LandingPage from './Pages/landing.js'
import About from './Pages/About.js'

import {
  HashRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router basename="/">
        <div className='App hero'>
          <Navbar/>
          <Route exact path='/'component={LandingPage} />
          <Route path ='/About' component={About} />
        </div>
      </Router>
    );
  }
}
export default App;
