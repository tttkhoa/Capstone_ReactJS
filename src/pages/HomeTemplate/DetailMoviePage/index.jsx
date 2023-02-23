import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actFetchDetailMovie } from "./duck/action";
import { Space, Tabs } from "antd";
import { useMediaQuery } from "react-responsive";
import moment from "moment/moment";
import "../../../sass/Components/circle.scss";

export default function DetailMoviePage() {
  const params = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.detailMovieReducer.data);
  const smallScreen = useMediaQuery({ query: "(max-width:992px)" });
  const [tabPosition, setTabPosition] = useState("left");

  console.log(data);
  useEffect(() => {
    dispatch(actFetchDetailMovie(params.id));
  }, []);

  const renderCinema = () => {
    return data?.heThongRapChieu.map((cinema, i) => {
      const id = String(i + 1);
      return {
        label: <img src={cinema.logo} width={50} className="rounded-circle"></img>,
        key: id,
        children: `Content of Tab ${id}`,
      };
    })
  }

  return (
    <div style={{ minHeight: "100vh" }} className="container mt-5">
      <div className="row">
        <div className="col-4">
          <img src={data?.hinhAnh} style={{ width: "300px" }} alt="" />
        </div>
        <div className="col-8">
          <p style={{fontSize:"15px"}}>Ngày chiếu: {moment(data?.ngayKhoiChieu).format('DD/MM/YYYY')}</p>
          <h3>{data?.tenPhim}</h3>
          <p>{data?.moTa}</p>
        </div>
      </div>

      <div className="mt-5">
        <Tabs
          tabPosition={tabPosition}
          items={renderCinema()}
        />

      </div>
    </div>
  );
}
