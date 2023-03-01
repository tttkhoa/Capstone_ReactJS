import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class EditMovie extends Component {
  render() {
    return (
      <div className="px-3 py-4">
        <ol class="breadcrumb mb-4 p-2">
          <li class="breadcrumb-item">
            <NavLink to="/admin">DashBoard</NavLink>
          </li>
          <li class="breadcrumb-item">
            <NavLink to="/admin/add-user">Add user</NavLink>
          </li>
          <li class="breadcrumb-item active">Add</li>
        </ol>

        <form className="text-black rounded py-2 text-center bg-white">
          <h2>Thêm Người Dùng</h2>
          <div style={{ width: "50%" }} className="mx-auto">
            <div className="my-4">
              <input className="form-control" placeholder="Tài khoản" />
            </div>
            <div className="my-4">
              <input className="form-control" placeholder="Mật khẩu" />
            </div>
            <div className="my-4">
              <input className="form-control" placeholder="Họ và tên" />
            </div>
            <div className="my-4">
              <input className="form-control" placeholder="Số điện thoại" />
            </div>
            <div className="my-4">
              <input className="form-control" placeholder="Email" />
            </div>
            <div className="my-4">
              <input
                className="btn btn-success form-control"
                type="submit"
                value="Thêm người dùng"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
