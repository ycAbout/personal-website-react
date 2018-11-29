import React, { Component } from 'react';
import Nav from './nav';
import figure1 from '../data/03.jpg';
import { projects } from '../data/data';

function Project (props) {
  let j = props.index;
  const features = projects.group1["project"+j].feature.map((feature) =>
  <p>{feature}</p>
);
return (
  <div className="col-sm-4">
    <div className="card bg-light">
      <div className="card-body">
        <h5 className="card-title">{projects.group1["project"+j].title}</h5>
        <hr/>
        <p className="card-text">Tech stack: {projects.group1["project"+j].tech}</p>
        <h5>Features</h5>
        <p className="card-p">{features}</p>
        <a href={projects.group1["project"+j].link} className="card-link">Link</a>
        <br/>
      </div>
    </div>
  </div>
  );
}


function Figure (props) {
  return (
    <div className="col-sm-4">
      <div className="card bg-light">
      {figure1}
      </div>
    </div>
    );
}



function Projects (props){
  return (
    <div className='container text-left'>
      <br/>
      <div className="row">
      <Project index={1} key = {1}/>
      <Figure/>
      </div>
      <br/>
    </div>
  )
}
  
export default Projects;