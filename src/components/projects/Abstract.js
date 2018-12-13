import React, { Component } from 'react';
import WorkMap from './WorkMap';
import '../../App.css';

export default class Abstract extends Component {
  render() {
    return (
      <div className="animated fadeInUpBig">
      <p> > Here are a mixture of personal and professional projects that I've had the
        pleasure of working on. Alongside these endeavors, I'm studying mechanical
        engineering at the <a href="https://uwaterloo.ca/mechanical-mechatronics-engineering/" target="_blank" rel="noopener noreferrer">University of Waterloo</a>. There, I am a member of <a href="https://www.uwmidsun.com/" target="_blank" rel="noopener noreferrer">Midnight Sun</a>,
        the solar car team at Waterloo, and have worked with <a href="https://uwaterloo.ewb.ca/en/" target="_blank" rel="noopener noreferrer">Engineers Without Borders</a> on outreach, Fair Trade Campus certification, and other advocacy projects. I've also
        worked at a crash test research lab studying high strength alloys. The map below shows where I've interned. </p>
        <WorkMap/>
        <span className="project-button">{this.props.button}</span>
      </div>
    );
  }
}
