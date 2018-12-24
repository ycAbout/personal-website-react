import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './components/home';
import ProjectsPage from './components/projectsPage';
import PUB from './components/publicationsPage';
import Fame from './components/fame';
import Resume from './components/resume';
import FrontEndUserExperiencePage from './components/frontEndUserExperiencePage';
import PsychologyExperimentsPage from './components/psychologyExperimentsPage';
import outsideContentsPage from './components/outsideContentsPage';


class App extends Component {
  render() {
    return (
      <div className="App container">
        <Router>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/publicationsPage" component={PUB} />
            <Route exact path="/fame" component={Fame} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/projectsPage" component={ProjectsPage} />
            <Route exact path="/frontEndUserExperiencePage" component={FrontEndUserExperiencePage} />
            <Route exact path="/psychologyExperimentsPage" component={PsychologyExperimentsPage} />
            <Route exact path="/outsideContentsPage" component={outsideContentsPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

