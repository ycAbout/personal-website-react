import React, { Component } from 'react';
import Nav from './nav';
import {eduList, experiences} from '../data/data';

function Experience (props) {
  let j = props.index;
  return (
    <li>
      <h6 className='font-weight-bold'>{experiences["job"+j].title}</h6>
      <text>{experiences["job"+j].company}</text>
      <p>{experiences["job"+j].detail}</p>
    </li>
    );
}

function Experiences (props){
  let n = Object.keys(experiences).length
  const es = [];

  for (let i=0; i<n; i++) {
    es.push(
    <Experience index={i+1} key = {i}/>)
  }
  return (
    <div>
      <br/>
      <ul>
        {es}
      </ul>
      <br/>
    </div>
  )
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
            <Experiences/>
            <h5>Education</h5>
            <ul>{educations}</ul>
          </div>
        </div>
      );
    }
  }
  
export default ExperienceEdu;
export { educations, Experiences };
