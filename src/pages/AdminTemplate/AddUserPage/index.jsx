import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function AddUserPage() {
  const initialState = [
    {
      maPhim: 1314,
      hinhAnh: "",
      tenPhim: "Tàu khựa",
      moTa: "testdaidaidaiestdaidaidaiestdaidaidaiestdaidaidaiestdaidaidaiestdaidaidaiestdaidaidaiestdaidaidai",
    },
    {
      maPhim: 1314,
      hinhAnh: "",
      tenPhim: "Tàu khựa",
      moTa: "",
    },
  ];
  const [movies, setMovies] = useState(initialState); // => sửa lại thành user

  return (
    <div className="px-3 py-4">
      <ol class="breadcrumb mb-4 p-2">
        <li class="breadcrumb-item">
          <NavLink to="/admin">DashBoard</NavLink>
        </li>
        <li class="breadcrumb-item active">Add User</li>
      </ol>

      <form className="text-black rounded py-2 text-center bg-white">
        <h2>Quản lí Phim</h2>
        <div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Mã Phim</th>
                <th>Hình Ảnh</th>
                <th>Tên Phim</th>
                <th>Mô Tả</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => {
                return (
                  <tr key={movie.maPhim}>
                    <td width="10%">{movie.maPhim}</td>
                    <td width="10%">
                      <img
                        width={50}
                        height={50}
                        className="rounded"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        src={
                          movie.hinhAnh ||
                          "https://file.qdnd.vn/data/images/0/2021/02/25/vuongha/bo%20gia%20comback.png?dpi=150&quality=100&w=575"
                        }
                        alt="mota"
                      />
                    </td>
                    <td width="20%">
                      <p>{movie.tenPhim}</p>
                    </td>
                    <td width="40%" style={{ maxWidth: "5vw" }}>
                      <p>{movie.moTa}</p>
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
