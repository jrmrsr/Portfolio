import React, { Component } from 'react';
import '../App.css';

export default class About extends Component {
  render() {
    let button =<button onClick={() => this.props.handleClickAboutInfo()} 
                  className={!this.props.aboutInfo ? "main-button bounce" : "main-button bottom"}>
                  {this.props.aboutInfo && <h2>> Return</h2>}
                  {!this.props.aboutInfo && <span className="arrow right"/>}
                </button>
    
    const aboutMe = <p className="animated fadeInLeft" style={{marginTop:0}}>
    > I believe that the way we shape our environment is the most powerful tool humanity has. Large, physical 
    manifestations of <a href="https://big.dk/#projects-king" target="_blank" rel="noopener noreferrer">architecture</a> bluntly show the 
    reshaping of our world, but even innocuous seeds of knowledge can create impactful changes. To design 
    is to present a vision of the world and follow through with it. As such, design thinking is applied in 
    product design, architecture, engineering, art, policy, and many other areas.</p>;

    const moreAboutMe = <p className="animated fadeInLeft"> > I want to help people through proper design. I am still looking for my voice as a designer, but the 
    common thread that I keep in mind is my own desire to help. So far, some areas that I've been able to 
    explore are building design at a <a href="http://smithandandersen.com/" target="_blank" rel="noopener noreferrer">consulting firm</a>, quality engineering at a <a href="https://www.futureadvisor.com/" target="_blank" rel="noopener noreferrer">financial technology startup</a>, 
    and the complexities of network infrastructure at a <a href="https://www.shaw.ca/store/" target="_blank" rel="noopener noreferrer">telecoms company</a>. Although these experiences have 
    been short and sweet, they have been integral to the development of my own vision for the world. 
    It's clear to me that deliberate design practices can make the world a better place, and it's up to us 
    to engage in informed design, regardless of our specialization. Someday, I hope to help people with 
    my own design practice.<br/>{button}</p>;

    const header = <h1 className="main-header-text animated fadeInLeft">My name is Jose Rondon and I am an aspiring engineer.{button}</h1>;

    return (
      <div className="container animated fadeInLeft">
        <div className="container-buttons">
          {this.props.aboutInfo ? "" : header}
          {this.props.aboutInfo && aboutMe}
          {this.props.aboutInfo && moreAboutMe}
        </div>
      </div>
    );
  }
}
