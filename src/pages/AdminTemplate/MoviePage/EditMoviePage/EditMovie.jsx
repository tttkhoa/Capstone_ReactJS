import React,{useEffect, useState} from "react";
import { NavLink, useParams } from "react-router-dom";
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
import dayjs from 'dayjs';
import { useDispatch, useSelector } from "react-redux";
import { actEditMovie } from "./duck/action";
import { actUpdateMovie } from "./UpdateMovie/action";
import { useNavigate } from "react-router-dom"

export default function EditMovie() {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  
  const navigate = useNavigate()
  const params = useParams();
  const [image,setImg] = useState('')
  const dispatch = useDispatch()
  const data = useSelector(state => state.editMovieReducer.data)
  useEffect(() => {
    dispatch(actEditMovie(params.id))
  },[])
  // console.log(data)

  const formik = useFormik({
    //Dùng để edit form
    enableReinitialize:true,
    initialValues:{
      maPhim:data?.maPhim,
      tenPhim:data?.tenPhim,
      trailer:data?.trailer,
      moTa:data?.moTa,
      ngayKhoiChieu:data?.ngayKhoiChieu,
      dangChieu:data?.dangChieu,
      sapChieu:data?.sapChieu,
      hot:data?.hot,
      maNhom:"GP03",
      danhGia:data?.danhGia,
      hinhAnh:null,
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
          if (values.hinhAnh != null){
            formData.append('File',values.hinhAnh,values.hinhAnh.name)
          }
        }
      }
      dispatch(actUpdateMovie(formData,navigate))
    }
  })

  const handleChangeDatePicker = (value) => {
    let ngayKhoiChieu = dayjs(value).format("DD/MM/YYYY")
    formik.setFieldValue("ngayKhoiChieu",ngayKhoiChieu)
  }

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

  const handleChangeFile = async (e) => {
    //Lấy file ra từ e
    let file = e.target.files[0];
    if(file.type === "image/png" || file.type === "image/jpeg"||  file.type === "image/gif"||  file.type === "image/png" || file.type === "image/jpg"){
        //Đem dữ liệu file lưu vào formik
        await formik.setFieldValue('hinhAnh',file)
        //Tạo đối tượng để đọc file
        let reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = (e) => {
          setImg(e.target.result)//Img base 64
        }
    }
    // formik.setErrors : validate
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
        <li className="breadcrumb-item active">Edit Movie</li>
      </ol>

      <form className="text-black rounded py-2 text-center bg-white">
        <h2>Chỉnh sửa phim</h2>
      </form>

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
        <Input  name="tenPhim" onChange={formik.handleChange} value={formik.values.tenPhim} />
      </Form.Item>
      <Form.Item label="Trailer">
        <Input  name="trailer" onChange={formik.handleChange} value={formik.values.trailer} />
      </Form.Item>
      <Form.Item label="Mô tả">
        <Input  name="moTa" onChange={formik.handleChange} value={formik.values.moTa} />
      </Form.Item>
      <Form.Item label="Ngày khởi chiếu:">
        <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} value={dayjs(formik.values.ngayKhoiChieu)}  />
      </Form.Item>
      <Form.Item label="Sắp chiếu" valuePropName="checked" >
        <Switch onChange={handleChangeSwitch("sapChieu")} checked={formik.values.sapChieu}/>
      </Form.Item>
      <Form.Item label="Đang chiếu" valuePropName="checked">
        <Switch  onChange={handleChangeSwitch("dangChieu")} checked={formik.values.dangChieu} />
      </Form.Item>
      <Form.Item label="Hot" valuePropName="checked">
        <Switch onChange={handleChangeSwitch("hot")} checked={formik.values.hot} />
      </Form.Item>
      <Form.Item label="Đánh giá">
        <InputNumber onChange={handleChangeInputNumber("danhGia")} min={1} max={10} value={formik.values.danhGia} />
      </Form.Item>
      <Form.Item label="Hình ảnh">
        <input type="file" onChange={handleChangeFile} accept="image/png,image/jpeg,image/gif,image,png,image/jpg"  />
        <img className="my-2" alt="" src={image === "" ? data?.hinhAnh : image} style={{width:200,height:200}} />
      </Form.Item>
      <Form.Item label="">
        <button className="btn btn-success " style={{marginLeft:"29%"}} type="submit">Cập nhật phim</button>
      </Form.Item>
    </Form>
    </div>
  );
}
