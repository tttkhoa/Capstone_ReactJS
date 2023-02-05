import React, { Component } from "react";
import Movie from "./Movie";
import axios from "axios";
import Heading from "../Components/Heading";
import Skeleton from "../Components/Skeleton";
export default class ListMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: [],
      loading: true,
    };
  }
  componentDidMount() {
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "get",
      headers: {
        accept: "application/json",
        TokenCyberSoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOSIsIkhldEhhblN0cmluZyI6IjI0LzA3LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MDE1NjgwMDAwMCIsIm5iZiI6MTY2MTcwNjAwMCwiZXhwIjoxNjkwMzA0NDAwfQ.v3QBEWqiclIwpSJXtVil8Lu30xYH1J5FT82rQrUyv1c",
      },
    })
      .then((result) =>
        this.setState({
          ...this.state,
          loading: false,
          data: result.data.content,
        })
      )
      .catch((error) =>
        this.setState({
          ...this.state,
          loading: false,
          error,
        })
      );
  }

  renderMovieList = () => {
    if (this.state.data.length !== 0) {
      return this.state.data.map((movie) => {
        return (
          <div key={movie.maPhim} className="col-6 col-md-3 mt-3">
            <Movie url={movie.hinhAnh} name={movie.tenPhim} />
          </div>
        );
      });
    } else {
      return Array(12)
        .fill(0)
        .map((_, index) => {
          return (
            <div key={index} className="col-6 col-md-3 mt-3">
              <Skeleton />
            </div>
          );
        });
    }
  };

  render() {
    return (
      <div className="container">
        <Heading heading="Phim hot nhất" />
        <div className="list-movie">
          <div className="row">{this.renderMovieList()}</div>
        </div>
      </div>
    );
  }
}
