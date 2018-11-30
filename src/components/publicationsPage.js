import React, { Component } from 'react';
import Nav from './nav';
import { paperList, bookList, conferenceList } from '../data/data';

const papers = paperList.map((paper) =>
  <li key={paper.slice(50,60)}>{paper}</li>
);

const books = bookList.map((book) =>
  <li key={book.slice(50,60)}>{book}</li>
);

const conferences = conferenceList.map((conference) =>
  <li key={conference.slice(50,60)}>{conference}</li>
);

class PublicationsPage extends Component {
    render() {
      return (
        <div>
          <Nav/>
          <div className="container text-left">
            <br/>
            <h5>Peer-reviewed journal papers</h5>
            <ul>{papers}</ul>
            <h5>Books</h5>
            <ul>{books}</ul>
            <h5>Conferences</h5>
            <ul>{conferences}</ul>
          </div>
        </div>
      );
    }
  }
  
  export default PublicationsPage;