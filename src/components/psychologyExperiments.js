import React from 'react';
import { Link } from 'react-router-dom';
import figure1 from '../data/sizeCongruency.gif';
import { recentPublication, cognitiveArithmetic } from '../data/data';

function RecentPublication(props) {
  let tag = props.tag;
  const highlightList = recentPublication.highlights.map((highlight) =>
    <li key={tag.toString() + highlight.slice(0, 6)}>{highlight}</li>
  );
  return (
    <div className="text-left">
      <a href={recentPublication.link} target="_blank" rel="noopener noreferrer">
        <h6 className="small">{recentPublication.title}</h6>
      </a>
      <hr />
      <h6>Highlights</h6>
      <p className="small">{highlightList}</p>
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
    <picture>
      <img src={figure1} style={style} alt="figure for front end and user experience"></img>
    </picture>
  );
}

function CognitiveArithmetic(props) {
  return (
    <div className="text-left">
      <h6>Cognitive arithmetic</h6>
      <ul>
        <li>{cognitiveArithmetic.concept}</li>
      </ul>
    </div>
  );
}


function ArithmeticEffects(props) {
  let tag = props.tag;
  const effectList = cognitiveArithmetic.effects.map((effect) =>
    <li key={tag.toString() + effect.slice(0, 6)}>{effect}</li>
  );
  return (
    <div className="text-left">
      <h6>Cognitive arithmetic effects</h6>
      <ul>{effectList}</ul>

    </div>
  );
}


function PsychologyExperiments(props) {
  return (
    <div>
      <Link to="./psychologyExperimentsPage">
        <h6 className="text-left text-secondary">MY COGNITIVE PSYCHOLOGY RESEARCH >></h6>
      </Link>
      <div className="row align-items-center">
        <div className="col-sm-4">
          <CognitiveArithmetic />
        </div>
        <div className="col-sm-8">
          <Figure />
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-sm-5">
          <ArithmeticEffects tag={1} />
        </div>
        <div className="col-sm-7">
          <RecentPublication tag={1} />
        </div>
      </div>
    </div>
  )
}

export default PsychologyExperiments;