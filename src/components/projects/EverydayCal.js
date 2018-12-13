import React, { Component } from 'react';
import everydayCalPic from '../../img/EverydayCal.png';
import '../../App.css';

export default class EverydayCal extends Component {
  render() {
    return (
      <div className="animated fadeInUpBig">
        <p> > Inspired by <a href="https://www.kickstarter.com/projects/simonegiertz/the-every-day-calendar" target="_blank" rel="noopener noreferrer">Simone Giertz's kickstarter</a> and <a href="https://www.youtube.com/watch?v=-lpvy-xkSNA" target="_blank" rel="noopener noreferrer">video</a>.
    Part of my interests lie in lifestyle design,
and time well spent. After listening to <a href="http://www.tristanharris.com/" target="_blank" rel="noopener noreferrer">Tristan Harris</a> speak about time well spent, which
      vocalized many of my own concerns about the social media age, I realized that giving people control
      over their time is one of the most important issues of our current generation. As the attention economy is
      intent on taking more and more mind-share, we must take care of how we spend our time. Habit
formation falls under that umbrella.</p>
      <span className="img-container"><img src={everydayCalPic} alt="Everyday Calendar"/></span>
      <span className="project-button">{this.props.button}</span>
      </div>
    );
  }
}
