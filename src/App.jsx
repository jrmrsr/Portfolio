import React, { Component } from "react";
import Abstract from "./assets/abstract";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentHeight: 0,
      contentWidth: 0
    };

    this.contentSize = this.contentSize.bind(this);
  }

  componentDidMount() {
    this.contentSize();
    window.addEventListener("resize", this.contentSize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.contentSize.bind(this));
  }

  contentSize() {
    let height =
      document.getElementById("section-right-area").offsetHeight - 50;
    let width =
      document.getElementById("inner-section-bottom").offsetWidth - 50;

    this.setState({ contentHeight: height, contentWidth: width });
  }
  render() {
    console.log(this.state);

    return (
      <div>
        <div className="section-bottom">
          <div id="inner-section-bottom" className="inner-section-bottom">
            <div id="triangle-topright" />
            <div id="rectangle-bottom" />
          </div>
          <div id="section-right-area" className="section-right">
            <div id="triangle-bottomleft-right" />
            <div id="rectangle-right" />
          </div>
          <div id="triangle-bottomleft-bottom" />
          <div
            className="content"
            style={{
              height: this.state.contentHeight,
              width: this.state.contentWidth
            }}
          >
            <Abstract />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
