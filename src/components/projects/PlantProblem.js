import React, { Component } from 'react';
import EventSearch from '../../img/Events-Search-Web.png';
import NMTER from '../../img/NMTER-Events-Plot-Web.png';
import '../../App.css';

export default class PlantProblemTool extends Component {
    render() {
        return (
            <div className="animated fadeInUpBig">
                <p> > How do you know whether a customer's connectivity problems are due to a faulty modem
                    in their homes, or infrastructure related? How do you monitor your infrastructure for
                    large scale issues? These are the problems that the bespoke plant maintenance tool
                    tried to address. My mentor at Shaw had a vision for a data-driven tool that could
                    reduce the amount of guessing to find an issue.  Using some clever data aggregation, I was able to create a front end that tied location data to
                    network health. Data visualizations of the network health indicators were displayed allowing
                    a technician to determine the root causes of a network issue. These features were wrapped
                    up in a mobile-ready web app.</p>
                    <span className="img-container"><img src={EventSearch} alt="Events Search"/></span>
                    <span className="img-container"><img src={NMTER} alt="NMTER Graph"/></span>
                    <span className="project-button">{this.props.button}</span>
            </div>
        );
    }
}
