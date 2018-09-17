import React, { Component } from 'react';
import Nav from './nav';
import { educations, Experience } from './experienceEdu';
import {summaryList, skillsList, achievementsList} from './data';

const summary = summaryList.map((summary) =>
  <li>{summary}</li>
);
const skills = skillsList.map((skill) =>
  <li>{skill}</li>
);
const achievements = achievementsList.map((achievement) =>
  <li>{achievement}</li>
);

class Resume extends Component {
    render() {
      return (
        <div>
          <Nav/>
          <br/>
          <h4>Corey (Yalin) Chen</h4>
          <p>Saskatoon, Saskatchewan, Canada | Email: corey.about@gmail.com</p>
          <div className="container text-left">
            <h5>Summary</h5>
            <hr/>
            <ul >{summary}</ul>
            <h5>Experience</h5>
            <hr/>
            <Experience/>
            <h5>Education</h5>
            <hr/>
            <ul>{educations}</ul>
            <h5>Skills</h5>
            <hr/>
            <ul>{skills}</ul>
            <h5>Achievements</h5>
            <hr/>
            <ul>{achievements}</ul>
          </div>
        </div>
      );
    }
  }
  
  export default Resume;