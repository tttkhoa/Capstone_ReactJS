import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function RegisterPage() {
  const [data, setData] = useState({
    showPassword: false,
    logError: [],
    account: "",
    password: "",
    fullname: "",
    email: "",
    phoneNumber: "",
  });

  const validate = {
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

  const validateHandle = (isValidate, type) => {
    return isValidate
      ? setData({
          ...data,
          logError: data.logError.filter((validated) => {
            return validated !== validate[type]["msgError"];
          }),
        })
      : setData({
          ...data,
          logError: [...data.logError, validate[type]["msgError"]],
        });
  };

  const handleForm = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const validateForm = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "username":
        if (!validate.forAccount.regex.test(value)) {
          return validateHandle(false, "forAccount");
        } else {
          return validateHandle(true, "forAccount");
        }
        break;
      case "password":
        if (!validate.forPassword.regex.test(value)) {
          return validateHandle(false, "forPassword");
        } else {
          return validateHandle(true, "forPassword");
        }
        break;
      case "email":
        if (!validate.forEmail.regex.test(value)) {
          return validateHandle(false, "forEmail");
        } else {
          return validateHandle(true, "forEmail");
        }
        break;
      case "phoneNumber":
        if (!validate.forPhone.regex.test(value)) {
          return validateHandle(false, "forPhone");
        } else {
          return validateHandle(true, "forPhone");
        }
        break;
      default:
        setData({ ...data });
        break;
    }
  };

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
              onChange={handleForm}
              autoFocus
              onBlur={validateForm}
            />
            <label>Mật Khẩu</label>
            <div className="position-relative">
              <input
                className="form-control"
                name="password"
                type={data.showPassword ? "text" : "password"}
                placeholder="Mật khẩu"
                onChange={handleForm}
                onBlur={validateForm}
              />
              <div
                onClick={() =>
                  setData({
                    showPassword: !data.showPassword,
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
                {data.showPassword ? "Ẩn" : "Hiện"}
              </div>
            </div>
            <label>Họ và tên của bạn</label>
            <input
              className="form-control"
              name="fullname"
              placeholder="Họ và tên của bạn"
              onChange={handleForm}
              onBlur={validateForm}
            />
            <label>Email</label>
            <input
              className="form-control"
              name="email"
              placeholder="Email của bạn"
              onChange={handleForm}
              onBlur={validateForm}
            />
            <label>Số điện thoại</label>
            <input
              className="form-control"
              name="phoneNumber"
              placeholder="Số điện thoại"
              onChange={handleForm}
              onBlur={validateForm}
            />

            <input
              style={{ marginTop: "24px" }}
              className="btn btn-success"
              disabled={data.logError.length > 0}
              type="submit"
              value="Đăng Ký"
            />

            {data.logError.length > 0 ? (
              <ul className="alert alert-danger mt-4">
                {[...new Set(data.logError)].map((error, index) => {
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