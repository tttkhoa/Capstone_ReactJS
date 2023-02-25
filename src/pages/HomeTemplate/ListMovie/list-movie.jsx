import React,{useEffect} from "react";
import {useSelector, useDispatch } from "react-redux";
import Movie from "./Movie/Movie";
import { actFetchListMovie } from "./duck/action";
import Heading from "../../../Components/Heading";
import Skeleton from "../../../Components/Skeleton";

export default function ListMovie() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.listMovieReducer.data)
  useEffect(() => {
    dispatch(actFetchListMovie())
  },[])
    

  const renderMovieList = () => {
    if (data) {
      return data.map((movie) => {
        return (
          <div key={movie.maPhim} className="col-6 col-md-3 mt-3">
            <Movie movie={movie} />
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

  return (
    <div className="container">
        <Heading heading="Phim hot nhất" />
        <div className="list-movie">
          <div className="row">{renderMovieList()}</div>
        </div>
      </div>
  )
}

