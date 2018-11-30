import React from 'react';
import { Link } from 'react-router-dom';
import figure1 from '../data/03.jpg';
import { projects, courses } from '../data/data';

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
      <img src={figure1} style={style} alt="figure for front end and user experience"></img>
    </div>
  );
}

function Course(props) {
  let name = props.name;
  let tag = props.tag;
  const courseList = courses[name].map((course) =>
    <li key={tag.toString()+course.slice(0,6)}>{course}</li>
  );
  return (
    <div className="text-left">
        <h6 className="">{name}</h6>
        <ul className="small">{courseList}</ul>
    </div>
  );
}


function FrontEndUserExperience(props) {
  return (
    <div>
      <Link to="./frontEndUserExperience">
        <h6 className="text-left text-secondary">FRONT END AND USER EXPERIENCE</h6>
      </Link>
      <div className="row align-items-center">
        <div className="col-sm-4">
          <Course name={"frontEnd"} tag={1} />
          <Course name={"HCI"} tag={2} />
        </div>
        <div className="col-sm-8">
          <Figure />
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-sm-6">
          <Project group={3} index={1} tag={1} />
        </div>
        <div className="col-sm-6">
          <Project group={3} index={1} tag={2} />
        </div>
      </div>
    </div>
  )
}

export default FrontEndUserExperience;