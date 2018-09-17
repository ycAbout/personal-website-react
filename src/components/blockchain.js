import React, { Component } from 'react';
import Nav from './nav';

class Blockchain extends Component {
    render() {
      return (
        <div>
          <Nav/>
          <div className='container text-left'>
            <br/>
            <div className="row">
              <div className="col-sm-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Blockchain for psychology test</h5>
                    <hr/>
                    <p className="card-text">Tech stack: Hyperledger Composer + Nodejs + Reactjs + Mongodb </p>
                    <h5>Benefits</h5>
                    <p className="card-text">Helps to establish the single source of truth for psychology test data.</p>
                    <p className="card-text">The essential information and access controls are saved on blockchain, making them immutable and available on every node.</p>
                    <p className="card-text">You control your own data.</p>
                    <a href="https://github.com/coreyabout/psytest" className="card-link">Github repository (private, permission required)</a>
                    <br/>
                  </div>
                </div>
              </div>
            </div>
            <br/>
          </div>
        </div>
      );
    }
  }
  
export default Blockchain;

