import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default class About extends Component {
  render() {
    let button =<button className="main-button bounce" style={{marginLeft:"5%"}}><span className="arrow right"/></button>
  
    const header = <h1 className="main-header-text animated fadeInLeft">My name is Jose Rondon and I am a designer.{button}</h1>;

    return (
      <div className="container animated fadeInLeft">
        <div className="container-buttons">
          <Link to="/About">{header}</Link>
        </div>
      </div>
    );
  }
}
