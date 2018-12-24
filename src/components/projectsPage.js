import React, { Component } from 'react';
import Nav from './nav';
import { projects } from '../data/data';

function Project (props) {
  let i = props.group;
  let j = props.index;
  const features = projects["group" + i]["project"+j].feature.map((feature) =>
  <p key={(i+1000)*j.toString() + feature.slice(0,6)}>{feature}</p>
);
  return (
    <div className="col-sm-4">
      <div className="card bg-light">
        <div className="card-body">
          <h5 className="card-title">{projects["group" + i]["project"+j].title}</h5>
          <hr/>
          <p className="card-text">Tech stack: {projects["group" + i]["project"+j].tech}</p>
          <h5>Features</h5>
          <span className="card-p">{features}</span>
          <a href={projects["group" + i]["project"+j].link} className="card-link">Link</a>
          <br/>
        </div>
      </div>
    </div>
    );
}

function Projects (props){
  let groupN = Object.keys(projects).length
  const ps = [];

  for (let i=1; i<groupN+1; i++) {
    let projectN = Object.keys(projects["group"+i]).length-1  //there is an extra key called name
    for (let j=1; j<projectN+1; j++) {
      ps.push(
      <Project group={i} index={j} key = {(i+1000)*(j)}/>)
    }
  }

  return (
    <div className='text-left'>
      <br/>
      <div className="row align-items-center">
        {ps}
      </div>
      <br/>
    </div>
  )
}

class ProjectPage extends Component {
    render() {
      return (
        <div>
          <Nav/>
          <Projects/>
        </div>
      );
    }
  }
  
export default ProjectPage;

