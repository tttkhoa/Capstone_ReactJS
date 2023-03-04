import api from "../../../../utils/apiUtil"
import * as ActionType from "./types"
import { actAuthSuccess } from "../../../AdminTemplate/AuthPage/duck/action"

export const actUserLogin = (user,navigate) => {
    return (dispatch) => {
        dispatch(actUserLoginRequest())

        api.post("QuanLyNguoiDung/DangNhap",user)
        .then((result) => {
            if (result.data.content.maLoaiNguoiDung === "KhachHang"){
                localStorage.setItem("User",JSON.stringify(result.data.content))

                dispatch(actUserLoginSuccess(result.data.content))

                navigate(-1)
                // navigate("/",{replace:true})
            } else if (result.data.content.maLoaiNguoiDung === "QuanTri")  {
                localStorage.setItem("UserAdmin",JSON.stringify(result.data.content))
                dispatch(actAuthSuccess(result.data.content))
                navigate(-1)
            }
            else {
                return Promise.reject({
                    response:{
                        data:{
                            content:"Bạn không có quyền truy cập!"
                        }
                    }
                })
            }
        })


        .catch((error) => {
            dispatch(actUserLoginFail(error))
        })
    }
}

export const actUserLoginRequest = () => {
    return {
        type:ActionType.USER_LOGIN_REQUEST
    }
}

export const actUserLoginSuccess = (data) => {
    return {
        type:ActionType.USER_LOGIN_SUCCESS,
        payload:data
    }
}

export const actUserLoginFail = (error) => {
    return {
        type:ActionType.USER_LOGIN_FAIL,
        payload:error
    }
}