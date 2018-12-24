import React, { Component } from 'react';
import Nav from './nav';
import './home.css';
import Me from './me';
import SelectProjects from './selectProjects';
import SelectedPublications from './selectedPublications';
import FrontEndUserExperience from './frontEndUserExperience';
import PsychologyExperiments from './psychologyExperiments';
import OutsideContents from './outsideContents';
import Footer from './footer';

class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <br />
          <Me />
          <hr />
        </header>
        <nav>
          <Nav />
          <br/>
        </nav>
        <main>
          <div>
            <SelectProjects />
          </div>
          <hr />
          <div>
            <FrontEndUserExperience />
          </div>
          <hr />
          <div>
            <PsychologyExperiments />
          </div>
          <hr/>
          <div>
            <OutsideContents />
          </div>
        </main>
        <aside>
          <SelectedPublications />
          <br/>
        </aside>
        <footer>
            <Footer />
          </footer>
      </div>
    );
  }
}

export default Home;