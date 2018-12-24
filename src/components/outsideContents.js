import React from 'react';
import { Link } from 'react-router-dom';
import { gaming, uxHeuristics } from '../data/data';

function UX(props) {
  let tag = props.tag;
  const heuristicsList = uxHeuristics.heuristics.map((heuristic) =>
    <li key={tag.toString() + heuristic.slice(0, 6)}>{heuristic}</li>
  );
  return (
    <div className="text-left">
      <a href={uxHeuristics.link} target="_blank" rel="noopener noreferrer">
        <h6 className="small">{uxHeuristics.title}</h6>
      </a>
      <hr />
      <h6 className="small">UX Heuristics</h6>
      <p className="small">{heuristicsList}</p>
    </div>
  );
}

function Gaming(props) {
  let tag = props.tag;
  const contentList = gaming.contents.map((content) =>
    <li key={tag.toString() + content.slice(0, 6)}>{content}</li>
  );
  return (
    <div className="text-left">
      <a href={gaming.link} target="_blank" rel="noopener noreferrer">
        <h6 className="small">{gaming.title}</h6>
      </a>
      <hr />
      <h6 className="small">Contents</h6>
      <p className="small">{contentList}</p>
    </div>
  );
}

function Figure(props) {
  const style = {
    position: "relative",
    width: "100%",
  }
  return (
    <div>
      <iframe width="560" height="315" style={style} title="youtube video"
        src="https://www.youtube.com/embed/DEHsvQ3Ylwg" frameborder="0" allow="accelerometer; autoplay=false; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
    </div>
  );
}

function Description(props) {
  return (
    <div className="text-left">
      <h6>Note</h6>
      <p className="small">This is a little crash course video concerning the relationship between computer science and psychology I like</p>
    </div>
  );
}


function OutsideContents(props) {
  return (
    <div>
      <Link to="./outsideContentsPage">
        <h6 className="text-left text-secondary">OUTSIDE CONTENT >></h6>
      </Link>
      <p className="text-left text-secondary small">This sections contains materials originated from other people.</p>
      <div className="row align-items-center">
        <div className="col-sm-3">
          <Description />
        </div>
        <div className="col-sm-9">
          <Figure />
        </div>
      </div>
      <br />
      <div className="row align-items-center">
        <div className="col-sm-6">
          <UX tag={1} />
        </div>
        <div className="col-sm-6">
          <Gaming tag={1} />
        </div>
      </div>
    </div>
  )
}

export default OutsideContents;