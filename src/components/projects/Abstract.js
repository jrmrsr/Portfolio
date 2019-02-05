import React, { Component } from 'react';
import '../../App.css';

export default class Abstract extends Component {
  render() {
    return (
      <div className="animated fadeInUpBig">
      <p className="main-text-abstract">> Here are a few of my personal and professional projects that I've had the pleasure of working on. 
        Alongside these endeavors, I am studying mechanical engineering at the <a className="link" href="https://uwaterloo.ca/mechanical-mechatronics-engineering/" target="_blank" rel="noopener noreferrer">University of Waterloo</a>.
        I am a member of the <a className="link" href="https://www.uwmidsun.com/" target="_blank" rel="noopener noreferrer">Midnight Sun Solar Car</a> Team, and 
        have worked with <a className="link" href="https://uwaterloo.ewb.ca/en/" target="_blank" rel="noopener noreferrer">Engineers Without Borders</a> on outreach, sustainability, and advocacy projects. The map below shows where I've interned.</p>
      </div>
    );
  }
}
