import React, { Component } from 'react';
import Abstract from './projects/Abstract';
import EverydayCal from './projects/EverydayCal';
import PlantProblemTool from './projects/PlantProblem';
import SolarCar from './projects/SolarCar';
import URA from './projects/URA';
import WarriorHome from './projects/WarriorHome';
import EWB from './projects/EWB';
import WorkMap from './projects/WorkMap';
import '../App.css';

export default class Projects extends Component {
  render() {    
    let buttonPpt = <button onClick={() => this.props.handleClickPpt()}
    className={!this.props.projectInfo[2] ? "main-button bounce" : "main-button bottom"}>
    {this.props.projectInfo[2] && <h2>> Return</h2>}
    {!this.props.projectInfo[2] && <span className="arrow right" />}</button>
    
    let buttonSolar = <button onClick={() => this.props.handleClickSolarCar()}
    className={!this.props.projectInfo[3] ? "main-button bounce" : "main-button bottom"}>
    {this.props.projectInfo[3] && <h2>> Return</h2>}
    {!this.props.projectInfo[3] && <span className="arrow right" />}</button>
   
    let buttonEverydayCal = <button onClick={() => this.props.handleClickEverydayCal()}
    className={!this.props.projectInfo[4] ? "main-button bounce" : "main-button bottom"}>
    {this.props.projectInfo[4] && <h2>> Return</h2>}
    {!this.props.projectInfo[4] && <span className="arrow right" />}</button>

    let buttonURA = <button onClick={() => this.props.handleClickURA()}
    className={!this.props.projectInfo[5] ? "main-button bounce" : "main-button bottom"}>
    {this.props.projectInfo[5] && <h2>> Return</h2>}
    {!this.props.projectInfo[5] && <span className="arrow right" />}</button>

    let buttonWarriorHome = <button onClick={() => this.props.handleClickWarriorHome()}
    className={!this.props.projectInfo[6] ? "main-button bounce" : "main-button bottom"}>
    {this.props.projectInfo[6] && <h2>> Return</h2>}
    {!this.props.projectInfo[6] && <span className="arrow right" />}</button>

    let buttonEWB = <button onClick={() => this.props.handleClickEWB()}
    className={!this.props.projectInfo[7] ? "main-button bounce" : "main-button bottom"}>
    {this.props.projectInfo[7] && <h2>> Return</h2>}
    {!this.props.projectInfo[7] && <span className="arrow right" />}</button>

    return (
      <div className={this.props.projectInfo[0] ? "container animated fadeInUpBig" : "container"}>
        {this.props.projectInfo[0] && <span><h2 className="project-title">Abstract</h2><hr /></span>}
        {this.props.projectInfo[0] && <Abstract/>}
        {this.props.projectInfo[0] && <span><h2 className="project-title" onClick={() => this.props.handleClickPpt()}>Plant Maintenance Tool{buttonPpt}</h2><hr /></span>}
        {this.props.projectInfo[2] && <PlantProblemTool button={buttonPpt}/>}
        {this.props.projectInfo[0] && <span><h2 className="project-title" onClick={() => this.props.handleClickSolarCar()}>Midnight Sun Solar Car{buttonSolar}</h2><hr /></span>}
        {this.props.projectInfo[3] && <SolarCar button={buttonSolar}/>}
        {this.props.projectInfo[0] && <span><h2 className="project-title" onClick={() => this.props.handleClickEverydayCal()}>The Everyday Calendar{buttonEverydayCal}</h2><hr /></span>}
        {this.props.projectInfo[4] && <EverydayCal button={buttonEverydayCal}/>}
        {this.props.projectInfo[0] && <span><h2 className="project-title" onClick={() => this.props.handleClickURA()}>Undergrad Research Assistant{buttonURA}</h2><hr /></span>}
        {this.props.projectInfo[5] && <URA button={buttonURA}/>}
        {this.props.projectInfo[0] && <span><h2 className="project-title"onClick={() => this.props.handleClickWarriorHome()}>Warrior Home{buttonWarriorHome}</h2><hr /></span>}
        {this.props.projectInfo[6] && <WarriorHome button={buttonWarriorHome}/>}
        {this.props.projectInfo[0] && <span><h2 className="project-title" onClick={() => this.props.handleClickEWB()}>Engineers Without Borders{buttonEWB}</h2><hr /></span>}
        {this.props.projectInfo[7] && <EWB button={buttonEWB}/>}
        {this.props.projectInfo[0] && <WorkMap/>}
      </div>
    );
  }
}
