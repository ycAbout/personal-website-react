import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './components/home';
import G1 from './components/projectG1';
import G2 from './components/projectG2';
import G3 from './components/projectG3';
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
          <Route exact path = "/projectG1" component = {G1}/>
          <Route exact path = "/projectG2" component = {G2}/>
          <Route exact path = "/projectG3" component = {G3}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

