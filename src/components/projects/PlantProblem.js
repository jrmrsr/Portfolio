import React, { Component } from 'react';
import EventSearch from '../../img/Events-Search-Web.png';
import NMTER from '../../img/NMTER-Events-Plot-Web.png';
import '../../App.css';

export default class PlantProblemTool extends Component {
    render() {
        return (
            <div className="animated fadeInUpBig">
                <span><h2 className="project-title">Plant Maintenance Tool</h2><hr /></span>
                <span className="img-container"><img src={EventSearch} alt="Events Search"/></span>
                <span className="img-container"><img src={NMTER} alt="NMTER Graph"/></span>
                <p> > How do you know whether a customer's connectivity problems are due to a faulty
                    modem in their homes, or infrastructure related? How do you monitor your infrastructure 
                    for large scale, multi-customer issues? These are the problems that the custom plant
                    maintenance tool addresses. My mentor at Shaw had a vision for a data-driven tool that
                    could reduce the amount of guessing to find plant issues. After gathering a large amount
                    of network data, I was able to create a web application that tied location data to network
                    health. These features were wrapped up in a mobile-ready web app.</p>
                <span className="project-button">{this.props.button}</span>
            </div>
        );
    }
}
