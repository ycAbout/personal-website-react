import React, { Component } from 'react';
import Nav from './nav';
import './home.css';
import Projects from './projects';
import { person } from '../data/data';

class Home extends Component {
    render() {
      return (
        <div>
            <Nav/>
            <Projects/>
        </div>
      );
    }
  }
  
  export default Home;