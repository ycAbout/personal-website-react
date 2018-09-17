import React, { Component } from 'react';
import Nav from './nav';
import './home.css';
import Me from '../data/me.gif';
import { person } from '../data/data';

class Home extends Component {
    render() {
      return (
        <div className='bg'>
            <Nav/>
            <div className="container">
            <br/>
            <div className="row">
              <div className="col-sm-4">
                <div className="card">
                  <img className="center" src={Me} alt=""/>
                  <div className="card-body">
                    <h5 className="card-title">{person.name}</h5>
                    <hr/>
                    <h5 className="card-title">{person.title1}</h5>
                    <p className="card-text">Skill stack: {person.selectedSkills1}</p>
                    <a href={person.linkedin} className="card-link">Linkedin</a>
                    <a href={person.github} className="card-link">Github</a>
                    <br/>
                    <br/>
                    <h5 >{person.title2}</h5>
                    <p className="card-text">Skills stack: {person.selectedSkills2}</p>
                    <a href={person.researchGate} className="card-link">Research Gate</a>
                    <br/>
                    <br/>
                    <p className="card-text">Email: {person.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Home;