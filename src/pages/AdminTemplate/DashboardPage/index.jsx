import React from "react";
import { NavLink } from "react-router-dom";

export default function DashboardPage() {
  return (
    <div className="px-3 py-4">
      <ol class="breadcrumb mb-4 p-2">
        <li class="breadcrumb-item active">Dashboard</li>
      </ol>
      <div className="row justify-content-center mt-5">
        <div className="col-xl-3 col-md-6">
          <div className="card bg-primary text-white mb-4">
            <div className="card-body">Quản lí Phim</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <NavLink
                className="small text-white stretched-link"
                to="manage-movie"
              >
                Tới Trang Quản lí
              </NavLink>
              <div className="small text-white">
                <i className="fas fa-angle-right" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-warning text-white mb-4">
            <div className="card-body">Quản lí Người Dùng</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <NavLink
                className="small text-white stretched-link"
                to="manage-user"
              >
                Tới Trang Quản lí
              </NavLink>
              <div className="small text-white">
                <i className="fas fa-angle-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
