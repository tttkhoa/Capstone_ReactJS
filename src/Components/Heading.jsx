import React, { Component } from "react";

export default class Heading extends Component {
  render() {
    return (
      <h2 className="heading py-4">
        <img src="./assets/images/chapter.png" alt="chapter" />
        {this.props.heading}
      </h2>
    );
  }
}
