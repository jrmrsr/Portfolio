import React, { Component } from 'react';
import WorkMap from './projects/WorkMap';
import { Link } from 'react-router-dom';
import '../App.css';

export default class Projects extends Component {
  render() {    
    let buttonMain = <button className="main-button bounce"><span className="arrow right" /></button>
    
    return (
      <div className="container animated fadeInUpBig">
        <Link to="/PPT">
          <span><h2 className="project-title">Plant Maintenance Tool{buttonMain}</h2><hr /></span>
        </Link>
        <Link to="/MidnightSun">
          <span><h2 className="project-title">Midnight Sun Solar Car{buttonMain}</h2><hr /></span>
        </Link>
        <Link to="/EverydayCalendar">
          <span><h2 className="project-title">The Everyday Calendar{buttonMain}</h2><hr /></span>
        </Link>
        <Link to="/StewartPlatform">
          <span><h2 className="project-title">Stewart Platform{buttonMain}</h2><hr /></span>
        </Link>
        <Link to="/URA">
          <span><h2 className="project-title">Undergrad Research Assistant{buttonMain}</h2><hr /></span>
        </Link>
        <Link to="/WarriorHome">
          <span><h2 className="project-title">Warrior Home{buttonMain}</h2><hr /></span>
        </Link>
        <Link to="/EWB">
          <span><h2 className="project-title">Engineers Without Borders{buttonMain}</h2><hr /></span>
        </Link>
        <span><h2 className="project-title">Work Experience</h2><hr /></span>
        <WorkMap/>  
      </div>
   );
  }
}
