import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { projects, person } from '../data/data';

class Nav extends Component {
    render() {
      return (
        <div className='container'>
          <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <Link className="navbar-brand" to="./">{person.name}</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="./">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Projects
                </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="./projectG1">{projects.group1.name}</Link>
                    <Link className="dropdown-item" to="./projectG2">{projects.group2.name}</Link>
                    <Link className="dropdown-item" to="./projectG3">{projects.group3.name}</Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="./experienceEdu">Experience & Education</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="./publication">Publications</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="./fame">Wall of Fame</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="./resume">Resume</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      );
    }
  }
  
  export default Nav;