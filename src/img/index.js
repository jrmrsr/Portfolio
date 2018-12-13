import React from 'react';
import Github from './Github.js';
import LinkedIn from './LinkedIn.js';
import Logo from './Logo.js';

const Icon = props => {
  switch(props.name) {
    case "github":
      return <Github {...props} />;
    case "linkedin":
      return <LinkedIn {...props} />;
    case "logo":
      return <Logo {...props} />;
    default:
      return <div />;
  }
}

export default Icon;