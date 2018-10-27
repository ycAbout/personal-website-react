import React, { Component } from 'react';
import Nav from './nav';
import { projects } from '../data/data';

function Project (props) {
  let j = props.index;
  const features = projects.group3["project"+j].feature.map((feature) =>
  <p>{feature}</p>
);
  return (
    <div className="col-sm-4">
      <div className="card bg-light">
        <div className="card-body">
          <h5 className="card-title">{projects.group3["project"+j].title}</h5>
          <hr/>
          <p className="card-text">Tech stack: {projects.group3["project"+j].tech}</p>
          <h5>Features</h5>
          <p className="card-p">{features}</p>
          <a href={projects.group3["project"+j].link} className="card-link">Link</a>
          <br/>
        </div>
      </div>
    </div>
    );
}

function Projects (props){
  let n = Object.keys(projects.group3).length-1
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

class ProjectG3 extends Component {
    render() {
      return (
        <div>
          <Nav/>
          <Projects/>
        </div>
      );
    }
  }
  
export default ProjectG3;

