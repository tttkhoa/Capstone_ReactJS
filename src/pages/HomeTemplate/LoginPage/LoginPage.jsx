import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
    };
  }
  render() {
    return (
      <div className="container my-5">
        <div className="login row">
          <div className="col-lg-6 col-md-5 d-none d-md-flex align-items-center justify-content-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/879/539/original/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg"
              alt="..."
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-lg-6 col-md-7 login__main">
            <h3>Chào mừng trở lại !</h3>
            <form>
              <label>Tài khoản hoặc Email</label>
              <input
                className="form-control"
                name="username"
                placeholder="Tài khoản hoặc Email"
              />
              <label>Mật Khẩu</label>
              <div className="position-relative">
                <input
                  className="form-control"
                  name="password"
                  type={this.state.showPassword ? "text" : "password"}
                  placeholder="Mật khẩu"
                />
                <div
                  onClick={() =>
                    this.setState({
                      showPassword: !this.state.showPassword,
                    })
                  }
                  className="position-absolute"
                  style={{
                    top: "1px",
                    right: "1px",
                    bottom: "1px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    padding: "6px 10px",
                    background: "#425fec",
                  }}
                >
                  {this.state.showPassword ? "Ẩn" : "Hiện"}
                </div>
              </div>
              <input
                style={{ marginTop: "24px" }}
                className="btn btn-success"
                type="submit"
                value="Đăng Nhập"
              />
              {/* alert */}
              {/* <div className="alert alert-danger mt-4">
                Tài khoản hoặc mật khẩu không chính xác.
              </div> */}
              <div className="mt-4">
                <p className="text-right mb-3">
                  Chưa có tài khoản,{" "}
                  <NavLink
                    to="/register"
                    style={{ color: "#fff", fontWeight: "bold" }}
                  >
                    Đăng kí?
                  </NavLink>
                </p>
                <p className="text-right mb-3">
                  <NavLink
                    to="/forgot-password"
                    style={{ color: "#fff", fontWeight: "bold" }}
                  >
                    Quên mật khẩu?
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
