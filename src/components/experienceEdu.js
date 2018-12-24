import React from 'react';
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
      <ul>
        {es}
      </ul>
    </div>
  )
}


const educations = eduList.map((edu) =>
  <li>{edu}</li>
);

export { educations, Experiences };
