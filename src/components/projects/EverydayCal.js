import React, { Component } from 'react';
import everydayCalPic from '../../img/EverydayCal.png';
import '../../App.css';

export default class EverydayCal extends Component {
  render() {
    return (
      <div className="animated fadeInUpBig">
        <span><h2 className="project-title">The Everyday Calendar</h2><hr /></span>
        <span className="img-container"><img src={everydayCalPic} alt="Everyday Calendar"/></span>
        <span><h2><a href="https://jrmrsr.github.io/Everyday-Calendar/" target="_blank" rel="noopener noreferrer">Link</a></h2></span>
        <p>> Inspired by <a href="https://www.kickstarter.com/projects/simonegiertz/the-every-day-calendar" target="_blank" rel="noopener noreferrer">Simone Giertz's kickstarter</a> and <a href="https://www.youtube.com/watch?v=-lpvy-xkSNA" target="_blank" rel="noopener noreferrer">video</a>.
        After listening to <a href="http://www.tristanharris.com/" target="_blank" rel="noopener noreferrer">Tristan Harris</a> speak about time well spent, 
        which vocalized many of my own concerns about the social media age, I realized that giving people control over
        their time is one of the most important problems in our society. As the attention economy is intent on taking
        more and more mind-share, we must take care of how we spend our time. The web application aims to help users 
        track habits that work towards mindfulness while providing a minimalist visual display that encourages consistency.</p>
        <span className="project-button">{this.props.button}</span>
      </div>
    );
  }
}
