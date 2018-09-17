import React, { Component } from 'react';
import Nav from './nav';
import {eduList, experiences} from './data';

function Experience (props){
  return <div>
    <ul>
      <li>
        <h6 className='font-weight-bold'>{experiences.job1.title}</h6>
        <text>{experiences.job1.company}</text>
        <p>{experiences.job1.note}</p>
      </li>
    </ul>
    <ul>
      <li>
        <h6 className='font-weight-bold'>{experiences.job2.title}</h6>
        <text>{experiences.job2.company}</text>
        <p>{experiences.job2.note}</p>
      </li>
    </ul>
    <ul>
      <li>
        <h6 className='font-weight-bold'>{experiences.job3.title}</h6>
        <text>{experiences.job3.company}</text>
        <p>{experiences.job3.note}</p>
      </li>
    </ul>

  </div>
}

const educations = eduList.map((edu) =>
  <li>{edu}</li>
);

class ExperienceEdu extends Component {
    render() {
      return (
        <div>
          <Nav/>
          <div className='container text-left'>
            <br/>
            <h5>Experience</h5>
            <Experience/>
            <h5>Education</h5>
            <ul>{educations}</ul>
          </div>
        </div>
      );
    }
  }
  
export default ExperienceEdu;
export { educations, Experience };
