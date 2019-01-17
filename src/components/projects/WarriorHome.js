import React, { Component } from 'react';
import '../../App.css';

export default class WarriorHome extends Component {
  render() {
    return (
      <div className="animated fadeInUpBig">
        <span><h2 className="project-title">Warrior Home</h2><hr /></span>
        <p>> As part of the Race to Zero Competition, The Warrior Home Design Team aimed to design a net-zero
            energy home that could be built by Habitat for Humanity. The challenge was to use building technology
            and materials that could meet the ambitious sustainability goal while also creating a home that a
            low-income community could afford. My focus was on the architectural design of the home, working
            with a team to create a space that perpetuates our vision of an inviting community space. Using
            design and architecture principles, the team succeeded in its design, winning first place in its
            category of the competition.</p>
        <span className="project-button">{this.props.button}</span>
      </div>
    );
  }
}
