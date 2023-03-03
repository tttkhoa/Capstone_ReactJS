import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";
import { useFormik } from "formik";
import moment from "moment/moment";
import { useDispatch } from "react-redux";
import { actAddMovieList } from "./duck/action";

export default function AddMovie() {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const [image,setImg] = useState('')
  const dispatch = useDispatch()
  
  const formik = useFormik({
    initialValues:{
      tenPhim:'',
      trailer:'',
      moTa:'',
      ngayKhoiChieu:'',
      dangChieu:false,
      sapChieu:false,
      hot:false,
      danhGia:0,
      hinhAnh:{},
    },
    onSubmit:(values) => {
      console.log(values)
      values.maNhom = "GP03";
      //Tạo đối tượng formData => Đưa giá trị values từ formik vào formData
      let formData = new FormData()
      // formData.append('tenPhim',formik.values.tenPhim)
      // console.log(formData.get('tenPhim'))
      for (let key in values) {
        if (key != 'hinhAnh'){
          formData.append(key,values[key])
        } else {
          formData.append('File',values.hinhAnh,values.hinhAnh.name)
        }
      }
      //Gọi api gửi các giá trị formData về backend xử lý
      dispatch(actAddMovieList(formData))
    }
  })

  const handleChangeDatePicker = (value) => {
    let ngayKhoiChieu = moment(value).format('DD/MM/YYYY');
    formik.setFieldValue("ngayKhoiChieu",ngayKhoiChieu)
  }

  console.log(formik)

  const handleChangeSwitch = (name) => {
    return (value) => {
      console.log(value)
      formik.setFieldValue(name,value)
    }
  }

  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name,value)
    }
  }

  const handleChangeFile = (e) => {
    let file = e.target.files[0];
    if(file.type === "image/png" || file.type === "image/jpeg"||  file.type === "image/gif"||  file.type === "image|| png"){
      let reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onload = (e) => {
        setImg(e.target.result)
      }
    }
    formik.setFieldValue('hinhAnh',file)

    // formik.setErrors : validate
  } 

  return (
    <div className="px-3 py-4 container">
      <ol className="breadcrumb mb-0 p-2">
        <li className="breadcrumb-item">
          <NavLink to="/admin/add-movie">Dashboard</NavLink>
        </li>
        <li className="breadcrumb-item">
          <NavLink to="/admin/manage-movie">Manage Movie</NavLink>
        </li>
        <li className="breadcrumb-item active">Add Movie</li>
      </ol>
      <h2 className="text-black rounded py-2 text-left bg-white text-center">Thêm Phim</h2>

      <Form 
      onSubmitCapture={formik.handleSubmit}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{
        maxWidth: "100%",
      }}
    >

      <Form.Item label="Tên Phim">
        <Input  name="tenPhim" onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Trailer">
        <Input  name="trailer" onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Mô tả">
        <Input  name="moTa" onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Ngày khởi chiếu:">
        <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} />
      </Form.Item>
      <Form.Item label="Sắp chiếu" valuePropName="checked" >
        <Switch onChange={handleChangeSwitch("sapChieu")}/>
      </Form.Item>
      <Form.Item label="Đang chiếu" valuePropName="checked">
        <Switch  onChange={handleChangeSwitch("dangChieu")} />
      </Form.Item>
      <Form.Item label="Hot" valuePropName="checked">
        <Switch onChange={handleChangeSwitch("hot")} />
      </Form.Item>
      <Form.Item label="Đánh giá">
        <InputNumber onChange={handleChangeInputNumber("danhGia")} min={1} max={10} />
      </Form.Item>
      <Form.Item label="Hình ảnh">
        <input type="file" onChange={handleChangeFile} accept="image/png,image/jpeg,image/gif,image,png"  />
        <img className="my-2" alt="" src={image} style={{width:200,height:200}} />
      </Form.Item>
      <Form.Item label="">
        <button className="btn btn-success " style={{marginLeft:"29%"}} type="submit">Thêm phim</button>
      </Form.Item>
    </Form>
    </div>
  )
}
