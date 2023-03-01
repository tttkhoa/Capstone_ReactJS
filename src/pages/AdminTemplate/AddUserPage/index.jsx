import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function AddUserPage() {
  const initialState = [
    {
      maNhom: "GP01",
      taiKhoan: "tranhieu96",
      email: "hieuquahay0@gmail.com",
      soDt: "0338022004",
      hoTen: "Tran Van Hieu",
    },
    {
      maNhom: "GP01",
      taiKhoan: "tranhieu96",
      email: "hieuquahay0@gmail.com",
      soDt: "0338022004",
      hoTen: "Tran Van Hieu",
    },
  ];
  const [users, setUsers] = useState(initialState);

  return (
    <div className="px-3 py-4">
      <ol class="breadcrumb mb-4 p-2">
        <li class="breadcrumb-item">
          <NavLink to="/admin">DashBoard</NavLink>
        </li>
        <li class="breadcrumb-item active">Add User</li>
      </ol>

      <form className="text-black rounded py-2 text-center bg-white">
        <h2>Quản lí Người dùng</h2>
        <NavLink to="add">
          <button className="btn btn-success my-3">Thêm mới người dùng</button>
        </NavLink>
        <div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Mã Nhóm</th>
                <th>Tài Khoản</th>
                <th>Email</th>
                <th>Họ Tên</th>
                <th>Số ĐT</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr key={user.maNhom}>
                    <td width="10%">{user.maNhom}</td>
                    <td width="10%">{user.taiKhoan}</td>
                    <td width="20%">
                      <p>{user.email}</p>
                    </td>
                    <td width="30%" style={{ maxWidth: "5vw" }}>
                      <p>{user.hoTen}</p>
                    </td>
                    <td width="10%">
                      <p>{user.soDt}</p>
                    </td>
                    <td width="20%">
                      <img
                        className="mx-1"
                        width={20}
                        height={20}
                        src="https://www.svgrepo.com/show/304506/edit-pen.svg"
                        alt="edit"
                      />

                      <img
                        className="mx-1"
                        width={20}
                        height={20}
                        src="https://icon-library.com/images/delete-icon-png/delete-icon-png-19.jpg"
                        alt="edit"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
}
