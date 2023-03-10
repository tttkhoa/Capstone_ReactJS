import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { actAuthLogin } from "./duck/action";

export default function AuthPage() {
  const dispatch = useDispatch();
  const props = useSelector((state) => state.authReducer);
  const [state, setState] = useState({ taiKhoan: "", matKhau: "" });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actAuthLogin(state, navigate));
  };

  const renderNoti = () => {
    const { error } = props;
    return (
      error && (
        <div className="alert alert-danger">{error.response.data.content}</div>
      )
    );
  };

  const [password, setPassword] = useState(false);

  if (localStorage.getItem("UserAdmin")) {
    return <Navigate replace to="/admin" />;
  } else if (localStorage.getItem("User")) {
    alert("Bạn không có quyền truy cập")
    return <Navigate replace to="/" />;
  }

  return (
    // <div className="container">
    //   <div className="row">
    //     <div className="col-md-6 mx-auto">
    //       <h3>Login</h3>
    //       {renderNoti()}
    //       <form onSubmit={handleSubmit}>
    //         <div className="form-group">
    //           <label htmlFor="">Tài khoản</label>
    //           <input
    //             type="text"
    //             className="form-control"
    //             name="taiKhoan"
    //             onChange={handleOnChange}
    //           />
    //         </div>
    //         <div className="form-group">
    //           <label htmlFor="">Mật khẩu</label>
    //           <input
    //             type="text"
    //             className="form-control"
    //             name="matKhau"
    //             onChange={handleOnChange}
    //           />
    //         </div>
    //         <button type="submit" className="btn btn-success">
    //           Login
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>

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
          <form onSubmit={handleSubmit}>
            <label>Tài khoản hoặc Email</label>
            {renderNoti()}
            <input
              className="form-control"
              name="taiKhoan"
              onChange={handleOnChange}
              placeholder="Tài khoản hoặc Email"
            />
            <label>Mật Khẩu</label>
            <div className="position-relative">
              <input
                className="form-control"
                name="matKhau"
                onChange={handleOnChange}
                type={password ? "text" : "password"}
                placeholder="Mật khẩu"
              />
              <div
                onClick={() =>
                  // this.setState({
                  //   showPassword: !this.state.showPassword,
                  // })
                  setPassword(!password)
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
                {password ? "Ẩn" : "Hiện"}
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
