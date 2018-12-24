import React from 'react';
import { Link } from 'react-router-dom';
import figure1 from '../data/stevejobsquote.jpg';
import { projects, courses, eduList } from '../data/data';

function Project(props) {
  let i = props.group;
  let j = props.index;
  let tag = props.tag;
  const features = projects["group" + i]["project" + j].feature.map((feature) =>
    <li key={tag.toString()+feature.slice(0,6)}>{feature}</li>
  );
  return (
    <div className="text-left">
      <div>
        <a href={projects["group" + i]["project" + j].link} target="_blank" rel="noopener noreferrer">
          <h6>{projects["group" + i]["project" + j].title}</h6>
        </a>
        <hr />
        <p>{projects["group" + i]["project" + j].tech}</p>
        <h6>Features</h6>
        <p>{features}</p>
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
    <div>
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
        <h6>{name} courses</h6>
        <ul>{courseList}</ul>
    </div>
  );
}

function Degree(props) {
  let tag = props.tag;
  const degreeList = eduList.map((degree) =>
    <li key={tag.toString()+degree.slice(0,6)}>{degree}</li>
  );
  return (
    <div className="text-left">
        <h6>Degrees</h6>
        <hr/>
        <ul className="small">{degreeList}</ul>
    </div>
  );
}


function FrontEndUserExperience(props) {
  return (
    <div>
      <Link to="./frontEndUserExperiencePage">
        <h6 className="text-left text-secondary">MY EXPERTISE IN FRONT END AND USER EXPERIENCE >></h6>
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
      <br/>
      <div className="row align-items-center">
        <div className="col-sm-6">
          <Degree tag={1} />
        </div>
        <div className="col-sm-6">
          <Project group={3} index={1} tag={1} />
        </div>
      </div>
    </div>
  )
}

export default FrontEndUserExperience;