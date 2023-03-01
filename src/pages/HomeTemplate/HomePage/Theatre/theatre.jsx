import React, { Fragment } from "react";
import Heading from "../../../../Components/Heading";
import { Space, Tabs } from "antd";
import { useState, useEffect } from "react";
import { fetchTheatre } from "./duck/action";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import moment from "moment/moment";
import { useMediaQuery } from "react-responsive";

export default function Theatre() {
  const smallScreen = useMediaQuery({ query: "(max-width:992px)" });
  const [tabPosition, setTabPosition] = useState("left");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.theatreReducer.data);

  useEffect(() => {
    dispatch(fetchTheatre());
  }, []);

  const renderCinema = () => {
    return data?.map((cinema, i) => {
      const id = String(i + 1);
      return {
        label: (
          <img src={cinema.logo} width={50} className="rounded-circle"></img>
        ),
        key: id,
        children: (
          <Tabs
            tabPosition={smallScreen ? "top" : "left"}
            items={cinema.lstCumRap?.map((cumRap, i) => {
              const id = String(i + 1);
              return {
                label: (
                  <div className="d-flex">
                    <img
                      src={cumRap.hinhAnh}
                      width={50}
                      style={{ borderRadius: "3px", border: "1px solid black" }}
                    />
                    <div className="ml-2 text-left">
                      <span className="theatre-name"> {cumRap.tenCumRap} </span>
                      <p className="text-danger">Chi tiết</p>
                    </div>
                  </div>
                ),
                key: id,
                children: <div>
                  {cumRap.danhSachPhim?.slice(0, 6).map((movie, index) => {
                    return <Fragment key={index}>
                      <div className="d-flex">
                        <img src={movie.hinhAnh} width={70} height={70} alt={movie.tenPhim} />
                        <div className="ml-2">
                          <h5>{movie.tenPhim}</h5>
                          <p style={{ borderRight: "1px solid black", display: "inline", paddingRight: "5px" }}>
                            <span style={{ fontWeight: "500" }}> Thời lượng phim:</span>  120 phút</p>
                          <p style={{ display: "inline" }}> <span style={{ fontWeight: "500" }}> Địa chỉ:</span>  {cumRap.diaChi}</p>

                          <div className="row ">
                            {movie.lstLichChieuTheoPhim?.slice(0, 10).map((lichChieu, index) => {
                              return <NavLink className="col-xl-2 col-4 " key={index} to={`/checkout/${lichChieu.maLichChieu}`}>
                                {moment(lichChieu.ngayChieuGioChieu).format('hh:mmA')}
                              </NavLink>
                            })}
                          </div>
                        </div>
                      </div>
                      <hr />
                    </Fragment>
                  })}
                </div>
              };
            })}
          />
        ),
      };
    });
  };


  return (
    <div className="container">
      <Heading heading="Lịch chiếu phim" />

      <Space
        style={{
          marginBottom: 24,
        }}
      ></Space>
      <Tabs tabPosition={smallScreen ? "top" : "left"} items={renderCinema()} />
    </div>
  );
}
