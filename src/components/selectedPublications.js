import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { paperList} from '../data/data';

const papers = paperList.map((paper) =>
  <li key={paper.slice(50,60)}>{paper}</li>
);

class SelectedPublications extends Component {
  render() {
    return (
      <div>
        <div className="container text-left small">
          <br />
          <Link to="./publicationsPage">
            <h6 className="text-left text-secondary">PUBLICATION</h6>
          </Link>
          <h6 className="text-left">Peer-reviewed journal papers</h6>
          <p>{papers}</p>
        </div>
      </div>
    );
  }
}

export default SelectedPublications;