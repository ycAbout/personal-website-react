import React, { Component } from 'react';
import Nav from './nav';
import {awardList, grantList} from './data';

const awards = awardList.map((award) =>
  <li>{award}</li>
);

const grants = grantList.map((grant) =>
  <li>{grant}</li>
);

class Fame extends Component {
    render() {
      return (
        <div>
          <Nav/>
          <div className='container text-left'>
            <br/>
            <h5>Awards</h5>
            <ul>{awards}</ul>
            <h5>Grants</h5>
            <ul>{grants}</ul>
          </div>
        </div>
      );
    }
  }
  
export default Fame;

