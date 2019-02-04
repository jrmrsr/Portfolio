import React, { Component } from 'react';
import '../../App.css';

export default class AboutMe extends Component {
  render() {
    return (
      <div className="animated fadeInUpBig">
        <span><h2 className="project-title animated fadeInLeft">About</h2><hr className="animated fadeInLeft" /></span>
        <span><p  className="animated fadeInLeft" style={{marginTop:0}}>> I believe that our ability to 
    shape our environment is the most powerful tool humanity has. Large, physical manifestations of <a href="https://big.dk/#projects-king" target="_blank" rel="noopener noreferrer">architecture</a> can 
    bluntly show the reshaping of our world, but even innocuous seeds of knowledge can create impactful changes. 
    To design is to present a vision of the world and follow through with it. My passion is to help people through 
    creative and skillful design. So far, I've been able to explore building design at a <a href="http://smithandandersen.com/" target="_blank" rel="noopener noreferrer">consulting firm</a> firm,
    quality engineering at a <a href="https://www.futureadvisor.com/" target="_blank" rel="noopener noreferrer">financial technology startup</a>,
    and the complexities of network infrastructure at a <a href="https://www.shaw.ca/store/" target="_blank" rel="noopener noreferrer">telecoms company</a>.
    Someday, I hope to help people with my own design practice.<br/></p><span className="animated fadeInLeft"></span></span>    
      </div>
    );
  }
}
