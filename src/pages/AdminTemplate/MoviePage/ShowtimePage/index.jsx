import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Button, Checkbox, Form, Input,Cascader ,DatePicker, Space,InputNumber,Select} from "antd";
import { actFetchInfoTheatre,actFetchInfoCinemaByTheatre,actCreateShowMovie} from "../../../HomeTemplate/HomePage/Theatre/duck/action";
import { useFormik } from "formik";
import moment from "moment/moment";

export default function ShowtimePage() {
  const params = useParams()
  const [componentDisabled, setComponentDisabled] = useState(true);

  const formik = useFormik({
    initialValues:{
      maPhim:params.id,
      ngayChieuGioChieu:'',
      maRap:'',
      giaVe:'',
    },
    onSubmit: async (values) => {
      console.log(values)
      try {
        const result = await actCreateShowMovie(values)
        alert(result.data.content)
      }
      catch(error){
        console.log(error.response?.data)
      }
    }
  })
  const [state,setState] = useState({
    heThongRapChieu:[],
    cumRapChieu:[]
  })  

  console.log(state.heThongRapChieu)

  useEffect( () => {
    const fetchData = async () => {
      try {
        let result = await actFetchInfoTheatre()
        setState({...state,heThongRapChieu:result.data.content})
  
      } catch (error){
        console.log(error)
      }
    }
    fetchData()
  },[]) 


  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChangeHeThongRap = async (value) => {
    console.log(value);
    // Từ hệ thống rạp call api lấy thông tin rạp
    try {
      const result = await actFetchInfoCinemaByTheatre(value);

      setState({
        ...state,cumRapChieu:result.data.content
      })
    } catch (error) {
      console.log(error.response?.data)
    }
  };

  const convertSelectHeThongRap = () => {
    return state.heThongRapChieu?.map((heThongRap,index) => {
      return {label:heThongRap.tenHeThongRap,value:heThongRap.maHeThongRap}
    })
  }

  const handleChangeCumRap = (value) => {
    formik.setFieldValue('maRap',value)
  }

  const handleChangeLichChieu = (value, dateString) => {
    formik.setFieldValue('ngayChieuGioChieu',moment(value).format('DD/MM/YYYY hh:mm:ss'))
    console.log('onChangeDate: ', moment(value).format('DD/MM/YYYY hh:mm:ss'));
  };

  const onOk = (value) => {
    formik.setFieldValue('ngayChieuGioChieu',moment(value).format('DD/MM/YYYY hh:mm:ss'))
    console.log('onOk: ', moment(value).format('DD/MM/YYYY hh:mm:ss'));
  };

  const onChangeInputNumber = (value) => {
    formik.setFieldValue('giaVe',value)
  };

  let film = {}
  if(localStorage.getItem('film')){
    film = JSON.parse(localStorage.getItem('film'))
  }

  return (
    <div className="px-3 py-4">
      <ol className="breadcrumb mb-4 p-2">
        <li className="breadcrumb-item">
          <NavLink to="/admin">Dashboard</NavLink>
        </li>
        <li className="breadcrumb-item">
          <NavLink to="/admin/manage-movie">Manage Movie</NavLink>
        </li>
        <li className="breadcrumb-item active">Showtime</li>
      </ol>


      <form className="text-black rounded py-2 text-center bg-white">
        <h2>Tạo lịch chiếu phim: <span className="text-danger">{params.tenPhim}</span></h2>
      </form>

    <div className="d-flex justify-content-center">
    <img src={film.hinhAnh} width="250"  alt="" />
    <Form
        name="basic"
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        onSubmitCapture={formik.handleSubmit}
      >

        <Form.Item
          label="Hệ thống rạp"
        >
          <Select options={
            // state.heThongRapChieu?.map((heThongRap,index) => ({label:heThongRap.tenHeThongRap,value:heThongRap.tenHeThongRap}))
            convertSelectHeThongRap()
            } 
            onChange={handleChangeHeThongRap} 
            placeholder="Chọn hệ thống rạp" />
        </Form.Item>

        <Form.Item
          label="Cụm rạp"
        >
          <Select options={state.cumRapChieu?.map((cumRap,index) => ({label:cumRap.tenCumRap,value:cumRap.maCumRap}))} onChange={handleChangeCumRap} placeholder="Chọn cụm rạp"/>
        </Form.Item>

        <Form.Item
          label="Ngày chiếu giờ chiếu"
        >
           <DatePicker  format="DD/MM/YYYY hh:mm:ss" showTime onChange={handleChangeLichChieu} onOk={onOk} />
        </Form.Item>


        <Form.Item
          label="Giá vé"
        >
          <InputNumber min={75000} max={150000} onChange={onChangeInputNumber} />
        </Form.Item>


        <Form.Item label="">
        <Button htmlType="submit" className="btn-success" style={{marginLeft:"42%"}} type="submit">Tạo lịch chiếu</Button>
      </Form.Item>
      </Form>
    </div>

    </div>

  );
}
