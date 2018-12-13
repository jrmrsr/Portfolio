import React, { Component } from 'react';
import Abstract from './projects/Abstract';
import Bike from './projects/Bike';
import EverydayCal from './projects/EverydayCal';
import PlantProblemTool from './projects/PlantProblem';
import '../App.css';

export default class Projects extends Component {
  render() {
    let buttonAbstract = <button onClick={() => this.props.handleClickAbstract()}
    className={!this.props.projectInfo[1] ? "main-button bounce" : "main-button bottom"}>
    {this.props.projectInfo[1] && <h2>> Return</h2>}
    {!this.props.projectInfo[1] && <span className="arrow right" />}</button>
    
    let buttonPpt = <button onClick={() => this.props.handleClickPpt()}
    className={!this.props.projectInfo[2] ? "main-button bounce" : "main-button bottom"}>
    {this.props.projectInfo[2] && <h2>> Return</h2>}
    {!this.props.projectInfo[2] && <span className="arrow right" />}</button>
    
    let buttonBike = <button onClick={() => this.props.handleClickBike()}
    className={!this.props.projectInfo[3] ? "main-button bounce" : "main-button bottom"}>
    {this.props.projectInfo[3] && <h2>> Return</h2>}
    {!this.props.projectInfo[3] && <span className="arrow right" />}</button>
   
    let buttonEverydayCal = <button onClick={() => this.props.handleClickEverydayCal()}
    className={!this.props.projectInfo[4] ? "main-button bounce" : "main-button bottom"}>
    {this.props.projectInfo[4] && <h2>> Return</h2>}
    {!this.props.projectInfo[4] && <span className="arrow right" />}</button>

    return (
      <div className={this.props.projectInfo[0] ? "container animated fadeInUpBig" : "container"}>
        {this.props.projectInfo[0] && <span><h2 className="project-title">Abstract{buttonAbstract}</h2><hr /></span>}
        {this.props.projectInfo[1] && <Abstract button={buttonAbstract}/>}
        {this.props.projectInfo[0] && <span><h2 className="project-title">Plant Maintenance Tool{buttonPpt}</h2><hr /></span>}
        {this.props.projectInfo[2] && <PlantProblemTool button={buttonPpt}/>}
        {this.props.projectInfo[0] && <span><h2 className="project-title">Bike <em>- Ongoing</em>{buttonBike}</h2><hr /></span>}
        {this.props.projectInfo[3] && <Bike button={buttonBike}/>}
        {this.props.projectInfo[0] && <span><h2 className="project-title">The Everyday Calendar{buttonEverydayCal}</h2><hr /></span>}
        {this.props.projectInfo[4] && <EverydayCal button={buttonEverydayCal}/>}
      </div>
    );
  }
}
