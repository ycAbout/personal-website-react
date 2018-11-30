import React from 'react';
import { Link } from 'react-router-dom';
import figure1 from '../data/03.jpg';
import { projects } from '../data/data';

function Project(props) {
  let i = props.group;
  let j = props.index;
  let tag = props.tag;
  const features = projects["group" + i]["project" + j].feature.map((feature) =>
    <li key={tag.toString()+feature.slice(0,6)}>{feature}</li>
  );
  return (
    <div className="text-left">
      <div className="">
        <a href={projects["group" + i]["project" + j].link} className="">
          <h6 className="">{projects["group" + i]["project" + j].title}</h6>
        </a>
        <hr />
        <p className="small">{projects["group" + i]["project" + j].tech}</p>
        <h6>Features</h6>
        <p className="small">{features}</p>
      </div>
    </div>
  );
}


function Figure(props) {
  const style = {
    position: "relative",
    width: "100%",
    height: "auto",
    padding: "20px",
  }
  return (
    <div className="">
      <img src={figure1} style={style} alt="figure for selected project"></img>
    </div>
  );
}

function SelectProjects(props) {
  return (
    <div>
      <Link to="./projectsPage">
        <h6 className="text-left text-secondary">PROJECTS</h6>
      </Link>
      <div className="row align-items-center">
        <div className="col-sm-4">
          <Project group={1} index={1} tag={1} />
        </div>
        <div className="col-sm-8">
          <Figure />
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-sm-6">
          <Project group={2} index={1} tag={2} />
        </div>
        <div className="col-sm-6">
          <Project group={2} index={2} tag={3} />
        </div>
      </div>
    </div>
  )
}

export default SelectProjects;