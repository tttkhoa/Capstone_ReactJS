import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <div id="layoutSidenav_nav">
        <nav
          className="sb-sidenav accordion sb-sidenav-dark"
          id="sidenavAccordion"
        >
          <div className="sb-sidenav-menu">
            <div className="nav">
              <div className="sb-sidenav-menu-heading">Quản Trị</div>
              <NavLink className="nav-link" to="add-movie">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tachometer-alt" />
                </div>
                Quản lí phim
              </NavLink>
              <NavLink className="nav-link" to="add-user">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tachometer-alt" />
                </div>
                Quản lí người dùng
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
