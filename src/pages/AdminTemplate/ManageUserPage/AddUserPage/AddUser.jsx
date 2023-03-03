import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { actAddUserList } from "./duck/action";

export default function AddUser() {
  const dispatch = useDispatch()
  const [state,setState] = useState({
    taiKhoan:'',
    matKhau:'',
    email:'',
    soDT:'',
    maNhom:'GP03',
    maLoaiNguoiDung:'QuanTri',
    hoTen:'',
  })

  const handleSubmitAdd = (e) => {
    e.preventDefault()
    dispatch(actAddUserList(state))
  }

  const handleOnChange = (e) => {
    const {name,value} = e.target;
    setState({...state,[name]:value})
  }
  console.log(state)

    return (
      <div className="px-3 py-4">
        <ol className="breadcrumb mb-4 p-2">
          <li className="breadcrumb-item">
            <NavLink to="/admin">Dashboard</NavLink>
          </li>
          <li className="breadcrumb-item">
            <NavLink to="/admin/manage-user">Manage User</NavLink>
          </li>
          <li className="breadcrumb-item active">Add User</li>
        </ol>

        <form className="text-black rounded py-2 text-center bg-white">
          <h2>Thêm Người Dùng</h2>
          <div style={{ width: "50%" }} className="mx-auto">
            <div className="my-4">
              <input className="form-control" name="taiKhoan" onChange={handleOnChange} placeholder="Tài khoản" />
            </div>
            <div className="my-4">
              <input className="form-control" name="matKhau" onChange={handleOnChange} placeholder="Mật khẩu" />
            </div>
            <div className="my-4">
              <input className="form-control" name="hoTen" onChange={handleOnChange} placeholder="Họ tên" />
            </div>
            <div className="my-4">
              <input className="form-control" name="soDT" onChange={handleOnChange} placeholder="Số điện thoại" />
            </div>
            <div className="my-4">
              <input className="form-control" name="email" onChange={handleOnChange} placeholder="Email" />
            </div>
            <div className="my-4">
              <input
                className="btn btn-success form-control "
                type="submit"
                value="Thêm người dùng"
                onClick={handleSubmitAdd}
              />
            {/* <input
                className="btn btn-warning ml-3 text-dark "
                type="submit"
                value="Lưu người dùng"
                onClick={handleSubmitSave}
              /> */}
            </div>
          </div>
        </form>
      </div>
    );
}
