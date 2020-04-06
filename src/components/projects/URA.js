import React, { Component } from 'react';
import '../../App.css';

export default class URA extends Component {
  render() {
    return (
      <div className="container-full animated fadeInUpBig">
        <span><h2 className="project-title">Undergrad Research Assistant</h2><hr /></span>
        <p className="main-text">By a combination of being in the right place at the right time, I was given the opportunity to work
        under a PhD student at the crash testing lab on campus. The focus of my team’s research was high strength
        alloys, with an emphasis on weight savings. These metals would be used in various impact zones on the car,
        and they had to fail predictably. I was helping gather data on the material properties of these high
        strength alloys for use in FEA simulations. It was my introduction into Digital Image Correlation(DIC)
        for incredibly accurate strain measurements.</p>
      </div>
    );
  }
}
