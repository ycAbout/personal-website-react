import React, { Component } from 'react';
import Nav from './nav';
import './home.css';
import Me from './me';
import SelectProjects from './selectProjects';
import SelectedPublications from './selectedPublications';
import FrontEndUserExperience from './frontEndUserExperience';



class Home extends Component {
  render() {
    return (
      <div id="content">
        <header>
          <Nav />
          <br />
          <Me />
          <hr />
        </header>
        <main>
          <div>
            <SelectProjects />
          </div>
          <hr />
          <div>
            <FrontEndUserExperience />
          </div>
        </main>
        <aside>
          <SelectedPublications />
        </aside>
      </div>
    );
  }
}

export default Home;