import React, { Component } from 'react';
import Projects from './components/Projects';
import About from './components/About';
import EverydayCal from './components/projects/EverydayCal';
import PlantProblemTool from './components/projects/PlantProblem';
import SolarCar from './components/projects/SolarCar';
import URA from './components/projects/URA';
import WarriorHome from './components/projects/WarriorHome';
import EWB from './components/projects/EWB';
import AboutMe from './components/projects/AboutMe';
import Icons from './img';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <header className="App-header">
          </header>
          <div className={this.state.hideNav ? "topmenu" : "sidebar"}>
            <div className={this.state.hideNav ? "off" : "container-full"}>
              {!this.state.hideNav && <span className="logo-container"><Icons name="logo" width={`100%`} height={`150px`} className="logo"/></span>}
            </div>
            {!this.state.hideNav && <hr/>}
              <Link to="/" className={this.state.hideNav ? "link-button" : ""}><button className="sidebar-button" 
                autoFocus
                // Using ID to get over mobile browser limitations with autofocus,
                // such that I can apply the right bgColor on page load
                id={this.state.aboutHeader ? "on" : ""}
                ><h2>> About</h2></button></Link>
              <Link to="/Projects" className={this.state.hideNav ? "link-button" : ""}><button className="sidebar-button"><h2>> Projects</h2></button></Link>
              <span className="icons">
                {this.state.hideNav && <Icons name="logo" width={`40px`} height={`40px`} className="logo" viewBox="0 0 150 150"/>}
                <a href="https://github.com/jrmrsr" target="_blank" rel="noopener noreferrer"><Icons name="github" width={`40px`} className="sidebar-link"/></a>
                <a href="https://www.linkedin.com/in/jose-rondon-332b44107" target="_blank" rel="noopener noreferrer"><Icons name="linkedin" width={`30px`} fill={"#313131"} className="sidebar-link"/></a>
              </span>
            </div>
          <Switch>
            <div className="main-body">
              <Route path="/Projects" component={Projects} />
              <Route exact path="/" component={About}/>
              <Route path="/About" component={AboutMe} />
              <Route path="/PPT" component={PlantProblemTool}/>
              <Route path="/MidnightSun" component={SolarCar}/>
              <Route path="/EverydayCalendar" component={EverydayCal}/>
              <Route path="/URA" component={URA}/>
              <Route path="/WarriorHome" component={WarriorHome}/>
              <Route path="/EWB" component={EWB}/>
            </div>
          </Switch>
          <div className="animation-area"/>
        </div>
      </Router>
    );
  }
}

export default App;
