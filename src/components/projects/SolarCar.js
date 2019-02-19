import React, { Component } from 'react';
import solarCarPic from '../../img/solarcar.jpg';
import '../../App.css';

export default class SolarCar extends Component {
  render() {
    return (
      <div className="container-full animated fadeInUpBig">
        <span><h2 className="project-title">Midnight Sun Solar Car</h2><hr /></span>
        <span className="img-container"><img src={solarCarPic} alt="Solar Car in Action"/></span>
        <p className="main-text">> High performance vehicles were my introduction into engineering and my motivation in
          joining a vehicle design team. I joined Midnight Sun last summer and spent a lot of that 
          time helping build last year’s solar car and learning what it takes to build an efficient car. 
          This year, I am focusing on the structural composites that will make the chassis lighter and
          stiffer, as well as suspension design. Both projects involve heavy research into advanced aluminum and carbon fiber.
          The aim is to create a competitive car that is improved from last year, and have a 
          fair bit of fun along the way. <em>*The picture shows the car in action and was taken from the <a className="link" href="https://www.facebook.com/uwmidsun/" target="_blank" rel="noopener noreferrer">Midnight Sun Facebook Page</a>.</em></p>
      </div>
    );
  }
}
