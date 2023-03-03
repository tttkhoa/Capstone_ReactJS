import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { actEditUser } from "./duck/action";
import { actUpdateUser } from "./UpdateUser/action";

export default function EditUser () {
  const dispatch = useDispatch()
  const data = useSelector(state => state.editUserReducer.data)
  const navigate = useNavigate()

  const [state,setState] = useState({
    taiKhoan:data?.taiKhoan,
    matKhau:data?.matKhau,
    email:data?.email,
    soDT:data?.soDT,
    maNhom:'GP03',
    maLoaiNguoiDung:'QuanTri',
    hoTen:data?.hoTen,
  })

  const params = useParams()
  useEffect(() => {
    dispatch(actEditUser(params.id))
  },[])

  const handleOnChange = (e) => {
    const {name,value} = e.target
    setState({...state,[name]:value})
  } 

  console.log(state)


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(actUpdateUser(state,navigate))
  }

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

        <form className="text-black rounded py-2 text-center bg-white">
          <h2>Chỉnh sửa Người Dùng</h2>
          <div style={{ width: "50%" }} className="mx-auto">
          <div className="my-4">
              <input className="form-control" name="taiKhoan" onChange={handleOnChange} placeholder="Tài khoản" value={state.taiKhoan} />
            </div>
            <div className="my-4">
              <input className="form-control" name="matKhau" onChange={handleOnChange} value={state.matKhau} placeholder="Mật khẩu" />
            </div>
            <div className="my-4">
              <input className="form-control" name="hoTen" onChange={handleOnChange} value={state.hoTen} placeholder="Họ tên" />
            </div>
            <div className="my-4">
              <input className="form-control" name="soDT" onChange={handleOnChange} value={state.soDT} placeholder="Số điện thoại" />
            </div>
            <div className="my-4">
              <input className="form-control" name="email" onChange={handleOnChange} value={state.email} placeholder="Email" />
            </div>
            <div className="my-4">
              <input
                className="btn btn-warning form-control "
                type="submit"
                value="Cập nhật người dùng"
                onClick={handleSubmit}
              />
            </div>
          </div>
        </form>
      </div>
    );
}
