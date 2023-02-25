import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { actAuthLogin } from "./duck/action";

export default function AuthPage() {
  const dispatch = useDispatch()
  const props = useSelector((state) => state.authReducer);
  const [state,setState] = useState({taiKhoan:"",matKhau:""})
  const navigate = useNavigate()

  const handleOnChange = (e) => {
    const {value,name} = e.target
    setState({...state,[name]:value})
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actAuthLogin(state,navigate))
  };
  
  const renderNoti = () => {
    const {error} = props;
    return (
      error && (
        <div className="alert alert-danger">
          {error.response.data.content}
        </div>
      )
    )
  };

  if (localStorage.getItem("UserAdmin")) return <Navigate replace to="/admin/dashboard"/>


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h3>Login</h3>
          {renderNoti()}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="">Tài khoản</label>
              <input
                type="text"
                className="form-control"
                name="taiKhoan"
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Mật khẩu</label>
              <input
                type="text"
                className="form-control"
                name="matKhau"
                onChange={handleOnChange}
              />
            </div>
            <button type="submit" className="btn btn-success">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
