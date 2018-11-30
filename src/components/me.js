import React, { Component } from 'react';
import figure1 from '../data/me.gif';
import { person } from '../data/data';

class Me extends Component {
  render() {
    return (
      <div className="row align-items-center">
        <div className="col-sm-4">
          <img className="center" src={figure1} alt="Myself" />
          <h5 className="">{person.name}</h5>
          <p className="">Email: {person.email}</p>
        </div>
        <div className="col-sm-4" >
          <h5 className="">{person.title1}</h5>
          <p className="">Skill stack: {person.selectedSkills1}</p>
          <a href={person.github} className="card-link">Github</a>
          <a href={person.linkedin} className="card-link">Linkedin</a>
        </div>
        <div className="col-sm-4">
          <h5 >{person.title2}</h5>
          <p className="">Skills stack: {person.selectedSkills2}</p>
          <a href={person.researchGate} className="">Research Gate</a>
        </div>
      </div>
    );
  }
}

export default Me;