import React, { Component } from 'react';
import './CSS/App.css'

import Navbar from './navbar.js'
import LandingPage from './Pages/landing.js'
import About from './Pages/About.js'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar/>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/Home' component={LandingPage} />
          <Route exact path='/LandingPage' component={LandingPage} />
          <Route exact path='/About' component={About} />
        </div>
        </Router>
    );
  }
}
export default App;
