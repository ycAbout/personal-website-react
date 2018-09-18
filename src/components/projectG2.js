import React, { Component } from 'react';
import Nav from './nav';
import { projects } from '../data/data';

function Project (props) {
  let j = props.index;
  const features = projects.group2["project"+j].feature.map((feature) =>
  <p>{feature}</p>
);
  return (
    <div className="col-sm-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{projects.group2["project"+j].title}</h5>
          <hr/>
          <p className="card-text">Tech stack: {projects.group2["project"+j].tech}</p>
          <h5>Features</h5>
          <p className="card-p">{features}</p>
          <a href={projects.group2["project"+j].link} className="card-link">Online repository</a>
          <br/>
        </div>
      </div>
    </div>
    );
}

function Projects (props){
  let n = Object.keys(projects.group2).length-1
  const ps = [];

  for (let i=0; i<n; i++) {
    ps.push(
    <Project index={i+1} key = {i}/>)
  }
  return (
    <div className='container text-left'>
      <br/>
      <div className="row">
        {ps}
      </div>
      <br/>
    </div>
  )
}

class ProjectG2 extends Component {
    render() {
      return (
        <div>
          <Nav/>
          <Projects/>
        </div>
      );
    }
  }
  
export default ProjectG2;
