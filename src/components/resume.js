import React, { Component } from 'react';
import Nav from './nav';
import './resume.css';
import { educations, Experiences } from './experienceEdu';
import { summaryList, skillsList, achievementsList, person } from '../data/data';

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
        <Nav />
        <br />
        <div id="resumeContainer">
          <article id="resume">
            <section>
              <h4>{person.name}</h4>
              <p>{person.city} | Email: {person.email}</p>
            </section>
            <section className="text-left">
              <h5>Summary</h5>
              <ul >{summary}</ul>
              <h5>Experience</h5>
              <Experiences />
              <h5>Education</h5>
              <ul>{educations}</ul>
              <h5>Skills</h5>
              <ul>{skills}</ul>
              <h5>Achievements</h5>
              <ul>{achievements}</ul>
            </section>
          </article>
        </div>
      </div>
    );
  }
}

export default Resume;