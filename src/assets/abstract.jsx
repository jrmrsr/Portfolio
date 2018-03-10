import React, { Component } from "react";

class Abstract extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1 className="abstract">Hello</h1>
      </div>
    );
  }
}

export default Abstract;
