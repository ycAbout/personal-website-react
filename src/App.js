import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';

import Home from './components/home';
import BC from './components/blockchain';
import PUB from './components/publication';
import Fame from './components/fame';
import Resume from './components/resume';
import ExpEdu from './components/experienceEdu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className = "App">
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/experienceEdu" component = {ExpEdu}/>
          <Route exact path = "/publication" component = {PUB}/>
          <Route exact path = "/fame" component = {Fame}/>
          <Route exact path = "/resume" component = {Resume}/>
          <Route exact path = "/blockchain" component = {BC}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

