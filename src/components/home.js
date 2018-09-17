import React, { Component } from 'react';
import Nav from './nav';
import './home.css';
import Author from '../author.gif';

class Home extends Component {
    render() {
      return (
        <div className='bg'>
            <Nav/>
            <div className="container">
            <br/>
            <div className="row">
              <div className="col-sm-4">
                <div className="card">
                  <img className="center" src={Author} alt=""/>
                  <div className="card-body">
                    <h5 className="card-title">Corey (Yalin) Chen</h5>
                    <hr/>
                    <h5 className="card-title">Software and blockchain developer</h5>
                    <p className="card-text">Skill stack: Reactjs + Nodejs / Python + Mongodb / MySQL / Hyperledger Composer</p>
                    <a href="https://www.linkedin.com/in/coreyabout/" className="card-link">Linkedin</a>
                    <a href="https://github.com/CoreyAbout" className="card-link">Github</a>
                    <br/>
                    <br/>
                    <h5 >Cogntive Psychology research expert</h5>
                    <p className="card-text">Skills: Human research & data analysis</p>
                    <a href="https://www.researchgate.net/profile/Yalin_Chen3" className="card-link">Research Gate</a>
                    <br/>
                    <br/>
                    <p className="card-text">Email: corey.about@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Home;