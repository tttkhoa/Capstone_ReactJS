import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { actfetchSeatList } from "./duck/action";
import { useParams } from "react-router-dom";
import { CloseOutlined, UserOutlined } from "@ant-design/icons";
import { CHANGE_TAB, SEAT_BOOK } from "./duck/types";
import { first, sortBy } from "lodash";
import { ThongTinDatVe } from "../../../_core/models/thongTinDatVe";
import { actBookSeat } from "./BookTicket/action";
import { Tabs } from "antd";
import { actFetchUserInfo } from "./UserInfo/action";
import moment from "moment/moment";

function CheckoutPage() {
  const dispatch = useDispatch();
  const { data, seatListBooking } = useSelector(
    (state) => state.seatListReducer
  );

  const params = useParams();
  useEffect(() => {
    dispatch(actfetchSeatList(params.id));
  }, []);

  console.log(data);
  const { thongTinPhim, danhSachGhe } = data;
  const user = JSON.parse(localStorage.getItem("UserAdmin"));
  console.log(seatListBooking);

  const renderSeat = () => {
    return danhSachGhe?.map((seat, index) => {
      let classVipSeat = seat.loaiGhe === "Vip" ? "vip-seat" : "";
      let classBookedSeat = seat.daDat === true ? "booked-seat" : "";
      let classBookingSeat = "";
      let indexBookingSeat = seatListBooking.findIndex(
        (bookingSeat) => bookingSeat.maGhe === seat.maGhe
      );
      if (indexBookingSeat !== -1) {
        classBookingSeat = "booking-seat";
      }

      let classMySeat = "";
      if (user.taiKhoan === seat.taiKhoanNguoiDat) {
        classMySeat = "my-seat";
      }

      return (
        <Fragment key={index}>
          <button
            disabled={seat.daDat}
            onClick={() => {
              dispatch({ type: SEAT_BOOK, payload: seat });
            }}
            className={`normal-seat ${classVipSeat} ${classBookedSeat} ${classBookingSeat} ${classMySeat}  text-center `}
          >
            {seat.daDat ? (
              classMySeat != "" ? (
                <UserOutlined style={{ marginBottom: "7.5px" }} />
              ) : (
                <CloseOutlined style={{ marginBottom: "7.5px" }} />
              )
            ) : (
              seat.stt
            )}
          </button>
          {(index + 1) % 11 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    <div className="container" style={{ minHeight: "100vh" }}>
      <div className="row">
        <div className="col-8">
          <div className="d-flex flex-column align-items-center mt-5">
            <div
              style={{ width: "80%", height: 10 }}
              className="bg-dark w-100"
            ></div>
            <div className="trapezoid text-center">
              <h3>Màn hình</h3>
            </div>
            <div>{renderSeat()}</div>
            <div className="mt-5 w-full">
              <table className="table">
                <thead>
                  <tr>
                    <th>Ghế thường</th>
                    <th>Ghế VIP</th>
                    <th>Ghế đang chọn</th>
                    <th>Ghế đã được mua</th>
                    <th>Ghế người dùng đặt</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td>
                      <button className="normal-seat"></button>
                    </td>
                    <td>
                      <button className="normal-seat vip-seat"></button>
                    </td>
                    <td>
                      <button className="normal-seat booking-seat"></button>
                    </td>
                    <td>
                      <button className="normal-seat booked-seat">
                        <CloseOutlined style={{ marginBottom: "7.5px" }} />
                      </button>
                    </td>
                    <td>
                      <button className="normal-seat my-seat">
                        <UserOutlined style={{ marginBottom: "7.5px" }} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-4">
          <h3 className="text-center text-success">
            {seatListBooking
              .reduce((total, seat, index) => {
                return (total += seat.giaVe);
              }, 0)
              .toLocaleString()}{" "}
            VNĐ
          </h3>
          <hr style={{ margin: "10px" }} />
          <h3 style={{ fontSize: "25px" }}>{thongTinPhim.tenPhim}</h3>
          <p>
            Địa điểm: {thongTinPhim.diaChi} - {thongTinPhim.tenCumRap}
          </p>
          <p>
            Ngày chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} -{" "}
            {thongTinPhim.tenRap}
          </p>
          <hr />
          <div className="row">
            <div className="col text-danger">
              <span>Ghế: </span>
              {sortBy(seatListBooking, ["stt"]).map((bookingSeat, index) => {
                return (
                  <span key={index} className="text-info mr-1">
                    {bookingSeat.stt}
                  </span>
                );
              })}
            </div>
            <div className="text-right">
              <span className="text-success">
                {seatListBooking
                  .reduce((total, seat, index) => {
                    return (total += seat.giaVe);
                  }, 0)
                  .toLocaleString()}{" "}
                VNĐ
              </span>
            </div>
          </div>
          <hr />
          <div>
            <p className="text-primary">Email:</p>
            <p>{user.email}</p>
          </div>
          <hr />
          <div>
            <p className="text-primary">Số điện thoại:</p>
            <p>{user.soDT}</p>
          </div>
          <hr style={{ margin: "10px" }} />
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <div
              onClick={() => {
                const thongTinDatVe = new ThongTinDatVe();
                thongTinDatVe.danhSachVe = seatListBooking;
                thongTinDatVe.maLichChieu = params.id;
                console.log(thongTinDatVe);
                dispatch(actBookSeat(thongTinDatVe));
              }}
              className="text-white bg-success w-100 text-center py-2 font-weight-bold"
              style={{ cursor: "pointer" }}
            >
              ĐẶT VÉ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const onChange = (key) => {
};

const Payment = () => {
  const dispatch = useDispatch()
  const {tabActive} = useSelector(state => state.seatListReducer)

  return (
    <div >
      <Tabs className="tabs-checkout" defaultActiveKey="1" activeKey={tabActive} items={items} onChange={(key) => {
        dispatch({
          type:CHANGE_TAB,
          number:key
        })
      }} />;
    </div>
  );
};

const items = [
  {
    key: "1",
    label: `01.Chọn ghế & Thanh toán`,
    children: (
      <div>
        <CheckoutPage />
      </div>
    ),
  },
  {
    key: "2",
    label: `02.Kết quả đặt vé`,
    children: (
      <div>
        <ResultPayment />
      </div>
    ),
  },
];

function ResultPayment() {
  const dispatch = useDispatch()
  const {data} = useSelector(state => state.userInfoReducer)
  
  useEffect(() => {
    dispatch(actFetchUserInfo())
  },[])
  
  const renderTicketItem = () => {
    return data?.thongTinDatVe.map((ticket,index) => {
      const seats = first(ticket.danhSachGhe)
      return  <div key={index} className="col-sm-12 col-md-6 col-lg-4 col-xl-6 mb-4"><div className="card text-white card-has-bg click-col">
      <img className="card-img d-none" src="https://source.unsplash.com/600x900/?tech,street" alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?" />
      <div className="card-img-overlay d-flex flex-column">
        <div className="card-body">
          <h6 className="card-title mt-0 ">
            <a className="text-white d-flex align-items-center" herf="#"> 
             <img className="mr-3 " src={ticket.hinhAnh} alt="Generic placeholder image" style={{maxWidth: "100px"}} />
             <div>
              <h5 className="text-warning">{ticket.tenPhim}</h5>
              <p><span  className="text-warning">Địa điểm: </span> {seats.tenHeThongRap}</p>
             </div>
            </a>
          </h6>
          <p style={{fontSize:"16px"}}>
                <span className="text-warning">Tên rạp: </span> {seats.tenCumRap} - <span className="text-warning">Ghế: </span>  {ticket.danhSachGhe.map((seat,index) => {
                  return <span key={index}> {seat.tenGhe} </span>
                } )}
             </p>
          <small><i className="far fa-clock" /> Ngày đặt: {moment(ticket.ngayDat).format('DD-MM-YYYY')} - Giờ chiếu:  {moment(ticket.ngayDat).format('hh:mm A')}</small>
        </div>
        <div className="card-footer">
          <div className="media">
            <div className="media-body">
              <h6 className="my-0 text-white d-block">{data.hoTen}</h6>
              <small>Email: {data.email}</small>
            </div>
          </div>
        </div>
      </div>
    </div></div>
    })
  }

  console.log(data)
  return (
  <div className="container" id="checkout">
    <div className="row">
      <div className="col text-center mb-5">
        <h1 className="display-4">Lịch sử đặt vé</h1>
        <p className="lead">Hãy xem thông tin đặt vé để có trải nghiệm phim tốt nhất! </p>
      </div>
    </div>
    <div className="row">
    {renderTicketItem()}
    </div>
  </div>

  );
}

export default Payment;
