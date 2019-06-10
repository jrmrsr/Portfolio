import React, { Component } from 'react';
import stewartPlatformPic from '../../img/SP.jpg';
import '../../App.css';

export default class StewartPlatform extends Component {
  render() {
    return (
      <div className="container-full animated fadeInUpBig">
        <span><h2 className="project-title">Stewart Platform Project</h2><hr /></span>
        <span className="img-container"><img src={stewartPlatformPic} alt="Stewart Platform"/></span>
        <p className="main-text">> I was the electrical and software lead for my 3rd year design project, where we 
        created a 6 degree of freedom platform that could autonomously solve a maze. the only constraints were that the
        the marble had to be guided through a maze using 6 servos, and a design of our choice. </p>
      </div>
    );
  }
}
