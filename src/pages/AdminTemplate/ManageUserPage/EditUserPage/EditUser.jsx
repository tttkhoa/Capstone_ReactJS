import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { actEditUser } from "./duck/action";
import { actUpdateUser } from "./UpdateUser/action";
import { useFormik } from "formik";
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

export default function EditUser() {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const dispatch = useDispatch();
  const data = useSelector((state) => state.editUserReducer.data);
  const navigate = useNavigate();

  const params = useParams();
  useEffect(() => {
    dispatch(actEditUser(params.id));
  }, []);

  const formik = useFormik({
    //Dùng để edit form
    enableReinitialize: true,
    initialValues: {
      taiKhoan: data?.taiKhoan,
      matKhau: data?.matKhau,
      email: data?.email,
      soDT: data?.soDT,
      maNhom: "GP03",
      maLoaiNguoiDung: "QuanTri",
      hoTen: data?.hoTen,
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(actUpdateUser(values, navigate));
    },
  });

  return (
    <div className="px-3 py-4">
      <ol className="breadcrumb mb-4 p-2">
        <li className="breadcrumb-item">
          <NavLink to="/admin">DashBoard</NavLink>
        </li>
        <li className="breadcrumb-item">
          <NavLink to="/admin/manage-user">Manage User</NavLink>
        </li>
        <li className="breadcrumb-item active">Edit User</li>
      </ol>


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
        <Form.Item label="Tài khoản">
          <Input
            name="taiKhoan"
            onChange={formik.handleChange}
            value={formik.values.taiKhoan}
          />
        </Form.Item>
        <Form.Item label="Mật khẩu">
          <Input
            name="matKhau"
            onChange={formik.handleChange}
            value={formik.values.matKhau}
          />
        </Form.Item>
        <Form.Item label="Họ tên">
          <Input
            name="hoTen"
            onChange={formik.handleChange}
            value={formik.values.hoTen}
          />
        </Form.Item>
        <Form.Item label="Số điện thoại">
          <Input
            name="soDT"
            onChange={formik.handleChange}
            value={formik.values.soDT}
          />
        </Form.Item>
        <Form.Item label="Email">
          <Input
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Form.Item>
        <Form.Item label="">
          <button
            className="btn btn-warning text-dark "
            style={{ marginLeft: "29%" }}
            type="submit"
          >
            Cập nhật thông tin người dùng
          </button>
        </Form.Item>
      </Form>
    </div>
  );
}
