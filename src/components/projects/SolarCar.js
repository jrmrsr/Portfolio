import React, { Component } from 'react';
import '../../App.css';

export default class SolarCar extends Component {
  render() {
    return (
      <div className="animated fadeInUpBig">
        <span><h2 className="project-title">Midnight Sun Solar Car</h2><hr /></span>
        <p>> High performance vehicles were my introduction into engineering and my motivation in
          joining a vehicle design team. I joined Midnight Sun last summer and spent a lot of that 
          time helping build that year’s solar car and learning what it takes to build an efficient car. 
          This year, I am focusing on the structural composites that will make the chassis lighter and
          stiffer. The aim is to create a competitive car that is improved from last year, and have a 
          fair bit of fun along the way. </p>
        <span className="project-button">{this.props.button}</span>
      </div>
    );
  }
}
