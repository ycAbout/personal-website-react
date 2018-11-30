import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { person } from '../data/data';

class Nav extends Component {
    render() {
      return (
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
                <li className="nav-item">
                  <Link className="nav-link" to="./projectsPage">Projects </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="./publicationsPage">Publications</Link>
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
      );
    }
  }
  
  export default Nav;