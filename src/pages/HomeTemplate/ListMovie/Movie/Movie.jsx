import React from "react";
import { NavLink } from "react-router-dom";

export default function Movie(props) {
  return (
    <div className="movie">
        <div className="movie__image">
          <img src={props.movie.hinhAnh} alt="avatar" />
        </div>
        <div className="movie__name">
          <h5>{props.movie.tenPhim}</h5>
          <NavLink to={`/detail/${props.movie.maPhim}`} className="btn_detail btn">
          <h5>Chi tiết</h5>
          </NavLink>
        </div>
        <div className="movie__info">
            <img width="100" src="./assets/images/play.png" alt="play" />
        </div>

      </div>
  )
}

