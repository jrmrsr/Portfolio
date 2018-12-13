import React, { Component } from 'react';
import Projects from './components/Projects';
import About from './components/About';
import Icons from './img';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutHeader: true,
      projects: false,
      aboutInfo: false,
      projectInfo: [true,false,false,false,false],
      hideNav: false
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    let currentHideNav = (window.innerWidth <= 812);
    if (currentHideNav !== this.state.hideNav) {
        this.setState({hideNav: currentHideNav});
    }
  }

  handleClickAbout = () => {
    this.setState({
      aboutHeader: true,
      projects: false,
      aboutInfo: false,
      projectInfo: [true,false,false,false,false]
    })
  }
  handleClickProjects = () => {
    this.setState({
      aboutHeader: false,
      projects: true,
      aboutInfo: false,
      projectInfo: [true,false,false,false,false]
    })
  }
  handleClickAboutInfo = () => {
    let info = !this.state.aboutInfo
    this.setState({
      aboutHeader: true,
      projects: false,
      aboutInfo: info,
      projectInfo: [true,false,false,false,false]
    })
  }
  handleClickAbstract = () => {
    let newProjectInfo = this.state.projectInfo.slice()
    newProjectInfo = [!this.state.projectInfo[0],!this.state.projectInfo[1],false,false,false]
    this.setState({
      projectInfo: newProjectInfo
    })
  }

  handleClickPpt = () => {
    let newProjectInfo = this.state.projectInfo.slice()
    newProjectInfo = [!this.state.projectInfo[0],false,!this.state.projectInfo[2],false,false]
    this.setState({
      projectInfo: newProjectInfo
    })
  }

  handleClickBike = () => {
    let newProjectInfo = this.state.projectInfo.slice()
    newProjectInfo = [!this.state.projectInfo[0],false,false,!this.state.projectInfo[3],false]
    this.setState({
      projectInfo: newProjectInfo
    })
  }

  handleClickEverydayCal = () => {
    let newProjectInfo = this.state.projectInfo.slice()
    newProjectInfo = [!this.state.projectInfo[0],false,false,false,!this.state.projectInfo[4]]
    this.setState({
      projectInfo: newProjectInfo
    })
  }
  
  handleClickEverydayCal = () => {
    let newProjectInfo = this.state.projectInfo.slice()
    newProjectInfo = [!this.state.projectInfo[0],false,false,false,!this.state.projectInfo[4]]
    this.setState({
      projectInfo: newProjectInfo
    })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className={this.state.hideNav ? "topmenu" : "sidebar"}>
        <div className={this.state.hideNav ? "off" : "container-full"}>
          {!this.state.hideNav && <span className="logo-container"><Icons name="logo" width={`100%`} height={`150px`} className="logo"/></span>}
        </div>
        {!this.state.hideNav && <hr/>}
          <button className="sidebar-button" 
            onClick={() => this.handleClickAbout()} 
            autoFocus
            // Using ID to get over mobile browser limitations with autofocus,
            // such that I can apply the right bgColor on page load
            id={this.state.aboutHeader ? "on" : ""}><h2>> About</h2></button>
          <button className="sidebar-button" onClick={() => this.handleClickProjects()}><h2>> Projects</h2></button>
          <span className="icons">
            {this.state.hideNav && <Icons name="logo" width={`40px`} height={`40px`} className="logo" viewBox="0 0 150 150"/>}
            <a href="https://github.com/jrmrsr" target="_blank" rel="noopener noreferrer"><Icons name="github" width={`40px`} className="sidebar-link"/></a>
            <a href="https://www.linkedin.com/in/jose-rondon-332b44107" target="_blank" rel="noopener noreferrer"><Icons name="linkedin" width={`30px`} fill={"#313131"} className="sidebar-link"/></a>
          </span>
        </div>
        <div className="main-body">
          {this.state.projects && <Projects
            projectInfo={this.state.projectInfo}
            handleClickAbstract={this.handleClickAbstract}
            handleClickBike={this.handleClickBike}
            handleClickPpt={this.handleClickPpt}
            handleClickEverydayCal={this.handleClickEverydayCal}
            />}
          {this.state.aboutHeader && <About
            handleClickAboutInfo={this.handleClickAboutInfo}
            aboutInfo={this.state.aboutInfo}
            aboutHeader={this.state.aboutHeader}
            />}
        </div>
        <div className="animation-area">
        </div>
      </div>
    );
  }
}

export default App;
