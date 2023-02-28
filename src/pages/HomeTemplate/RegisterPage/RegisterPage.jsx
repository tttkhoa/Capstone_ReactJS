import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      logError: [],
      account: "",
      password: "",
      fullname: "",
      email: "",
      phoneNumber: "",
    };
  }

  validate = {
    forAccount: {
      regex: /^.{6,}$/,
      msgError: "Tài khoản tối thiểu 6 kí tự.",
    },
    forPassword: {
      regex: /^.{6,}$/,
      msgError: "Mật khẩu tối thiểu 6 kí tự.",
    },
    forEmail: {
      regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      msgError: "Email bạn điền chưa đúng dịnh dạng.",
    },
    forPhone: {
      regex: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
      msgError: "Số điện thoại của bạn không đúng.",
    },
  };

  validateHandle = (isValidate, type) => {
    return isValidate
      ? this.setState({
          ...this.state,
          logError: this.state.logError.filter((validated) => {
            return validated !== this["validate"][type]["msgError"];
          }),
        })
      : this.setState({
          ...this.state,
          logError: [
            ...this.state.logError,
            this["validate"][type]["msgError"],
          ],
        });
  };

  handleForm = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  validateForm = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "username":
        if (!this.validate.forAccount.regex.test(value)) {
          return this.validateHandle(false, "forAccount");
        } else {
          return this.validateHandle(true, "forAccount");
        }
        break;
      case "password":
        if (!this.validate.forPassword.regex.test(value)) {
          return this.validateHandle(false, "forPassword");
        } else {
          return this.validateHandle(true, "forPassword");
        }
        break;
      case "email":
        if (!this.validate.forEmail.regex.test(value)) {
          return this.validateHandle(false, "forEmail");
        } else {
          return this.validateHandle(true, "forEmail");
        }
        break;
      case "phoneNumber":
        if (!this.validate.forPhone.regex.test(value)) {
          return this.validateHandle(false, "forPhone");
        } else {
          return this.validateHandle(true, "forPhone");
        }
        break;
      default:
        this.setState({ ...this.state });
        break;
    }
  };

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
            <h3>Đăng Ký Thành Viên !</h3>
            <form>
              <label>Tài khoản</label>
              <input
                className="form-control"
                name="username"
                placeholder="Tài khoản hoặc Email"
                onChange={this.handleForm}
                autoFocus
                onBlur={this.validateForm}
              />
              <label>Mật Khẩu</label>
              <div className="position-relative">
                <input
                  className="form-control"
                  name="password"
                  type={this.state.showPassword ? "text" : "password"}
                  placeholder="Mật khẩu"
                  onChange={this.handleForm}
                  onBlur={this.validateForm}
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
              <label>Họ và tên của bạn</label>
              <input
                className="form-control"
                name="fullname"
                placeholder="Họ và tên của bạn"
                onChange={this.handleForm}
                onBlur={this.validateForm}
              />
              <label>Email</label>
              <input
                className="form-control"
                name="email"
                placeholder="Email của bạn"
                onChange={this.handleForm}
                onBlur={this.validateForm}
              />
              <label>Số điện thoại</label>
              <input
                className="form-control"
                name="phoneNumber"
                placeholder="Số điện thoại"
                onChange={this.handleForm}
                onBlur={this.validateForm}
              />

              <input
                style={{ marginTop: "24px" }}
                className="btn btn-success"
                disabled={this.state.logError.length > 0}
                type="submit"
                value="Đăng Ký"
              />

              {this.state.logError.length > 0 ? (
                <ul className="alert alert-danger mt-4">
                  {[...new Set(this.state.logError)].map((error, index) => {
                    return <li key={index}>{error}</li>;
                  })}
                </ul>
              ) : (
                ""
              )}

              <div className="mt-4">
                <p className="text-right mb-3">
                  Đã có tài khoản,{" "}
                  <NavLink
                    to="/login"
                    style={{ color: "#fff", fontWeight: "bold" }}
                  >
                    Đăng nhập?
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
