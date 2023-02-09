import React, { Component } from "react";

export default class Movie extends Component {
  render() {
    const { url, name } = this.props;
    return (
      <div className="movie">
        <div className="movie__image">
          <img src={url} alt="avatar" />
        </div>
        <div className="movie__name">
          <h5>{name}</h5>
        </div>
        <div className="movie__info">
          <a href="chi_tiet">
            <img width="100" src="./assets/images/play.png" alt="play" />
          </a>
        </div>
      </div>
    );
  }
}
