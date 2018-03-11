import React, { Component } from "react";
import Abstract from "./assets/abstract";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bottomBarHeight: 0,
      bottomBarWidth: 0,
      rightBarHeight: 0,
      rightBarWidth: 0,
      backgroundColor: "#003cff"
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
    let content = document.getElementById("content");
    let style = content.currentStyle || window.getComputedStyle(content);

    let bottomHeight =
      window.innerHeight - content.offsetHeight - parseInt(style.marginTop);
    let bottomWidth = window.innerWidth - parseInt(style.marginLeft);
    let rightHeight = window.innerHeight - parseInt(style.marginTop);
    let rightWidth =
      window.innerWidth - content.offsetWidth - parseInt(style.marginLeft);

    this.setState({
      bottomBarHeight: bottomHeight,
      bottomBarWidth: bottomWidth,
      rightBarHeight: rightHeight,
      rightBarWidth: rightWidth
    });
  }
  render() {
    console.log(this.state);

    return (
      <div className="container">
        <div id="content" className="content">
          <Abstract />
        </div>
        <div className="section-bottom">
          <div
            id="shape-bottom"
            className="inner-section-bottom"
            style={{
              height: this.state.bottomBarHeight,
              width: this.state.bottomBarWidth,
              borderBottomWidth:this.state.bottomBarHeight,
              borderLeftWidth: this.state.bottomBarWidth,
              borderLeftColor: "#003cff",
              borderBottomColor: "transparent"
            }}
          />
          <div
            id="section-right-area"
            className="section-right"
            style={{
              height: this.state.rightBarHeight,
              width: this.state.rightBarWidth
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
