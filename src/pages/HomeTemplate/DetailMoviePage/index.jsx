import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actFetchDetailMovie } from "./duck/action";
import { Space, Tabs } from "antd";
import { useMediaQuery } from "react-responsive";
import moment from "moment/moment";
import Skeleton from "../../../Components/Skeleton";

export default function DetailMoviePage() {
  const arrTitle = [{ title: "Lịch chiếu" }];

  const params = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.detailMovieReducer.data);
  const smallScreen = useMediaQuery({ query: "(max-width:992px)" });
  const superSmallScreen = useMediaQuery({ query: "(max-width:350px)" });
  const [tabPosition, setTabPosition] = useState("left");

  console.log(data);
  useEffect(() => {
    dispatch(actFetchDetailMovie(params.id));
  }, []);

  const renderCinema = () => {
    return data?.heThongRapChieu.map((cinema, i) => {
      const id = String(i + 1);
      return {
        label: (
          <img src={cinema.logo} key={i} width={50} className="rounded-circle"></img>
        ),
        key: id,
        children: (
          <div>
            {cinema.cumRapChieu?.map((cumRap, index) => {
              return (
                <div>
                  <div key={index} className="row mt-3">
                    <img
                      className=""
                      src={cumRap.hinhAnh}
                      width={70}
                      height={70}
                      alt=""
                    />
                    <div className="ml-2">
                      <p
                        style={{
                          fontSize: "17px",
                          fontWeight: "600",
                          marginBottom: "3px",
                        }}
                      >
                        {cumRap.tenCumRap}
                      </p>
                      <p style={{ color: "gray", marginBottom: "0" }}>
                        {cumRap.diaChi}
                      </p>
                      <div className="row">
                    {cumRap.lichChieuPhim?.map((lichChieu, index) => {
                      return (
                        <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index} className="col-xl-6 col-4">
                          {moment(lichChieu.ngayChieuGioChieu).format("hh:mmA")}
                        </NavLink>
                      );
                    })}
                  </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ),
      };
    });
  };

  return (
    <div
      style={{ minHeight: "100vh" }}
      className="container mt-5 text-white text-center"
    >
      <div className="row">
        <div className="col-lg-4 col-md-12 col-12">
          <div
            className="mx-auto position"
            style={{
              width: superSmallScreen ? "250px" : "300px",
            }}
          >
            <img src={data?.hinhAnh} className="img-fluid" alt="" />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <button
              onClick={() => (window.location.href = data.trailer)}
              className="btn btn-success my-4 mx-2"
            >
              Xem Trailer
            </button>
            <button className="btn btn-success my-4 mx-2">Yêu Thích</button>
          </div>
        </div>
        <div className="col-lg-8 col-md-12 col-12">
          <p style={{ fontSize: "15px" }} className="mb-2">
            Ngày chiếu: {moment(data?.ngayKhoiChieu).format("DD/MM/YYYY")}
          </p>
          <h3>{data?.tenPhim}</h3>
          <p>{data?.moTa}</p>
        </div>
      </div>

      <div className="text-white">
        <Tabs
          defaultActiveKey="1"
          centered
          items={arrTitle.map((item, i) => {
            const id = String(i + 1);
            return {
              label: `${item.title}`,
              key: id,
              children: (
                <Tabs
                  tabPosition={smallScreen ? "top" : "left"}
                  items={renderCinema()}
                />
              ),
            };
          })}
        />
      </div>
    </div>
  );
}
