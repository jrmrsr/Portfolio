import React, { Component } from 'react';
import '../../App.css';

export default class Bike extends Component {
  render() {
    return (
      <div className="animated fadeInUpBig">
        <p> > Working on designing a bike that is rugged enough to survive all 4 seasons. Although I've been
        a long time auto enthusiast, I now see that the <a href="https://www.sidewalklabs.com/" target="_blank" rel="noopener noreferrer">solutions</a> to city transport lie outside of the
        automobile. Sustainable transport is the future, including well optimized <a href="https://www.nytimes.com/2015/05/07/upshot/transportation-emerges-as-crucial-to-escaping-poverty.html" target="_blank" rel="noopener noreferrer">municipal transport</a>.
        Biking is a bit intoxicating in itself. Plus, it would be fun to build.</p>
        <span className="project-button">{this.props.button}</span>
      </div>
    );
  }
}
