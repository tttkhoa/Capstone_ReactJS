import api from "../../../../utils/apiUtil"
import * as ActionType from "./types"

export const actAuthLogin = (user,navigate) => {
    return (dispatch) => {
        dispatch(actAuthRequest())

        api.post("QuanLyNguoiDung/DangNhap",user)
        .then((result) => {
            // if (result.data.content.maLoaiNguoiDung === "KhachHang"){
            //     return Promise.reject({
            //         response:{
            //             data:{
            //                 content:"Bạn không có quyền truy cập!"
            //             }
            //         }
            //     })
            // }
            if (result.data.content.maLoaiNguoiDung === "QuanTri"){
                localStorage.setItem("UserAdmin",JSON.stringify(result.data.content))

                dispatch(actAuthSuccess(result.data.content))
    
                navigate("/admin/dashboard",{replace:true})
            } else if (result.data.content.maLoaiNguoiDung === "KhachHang"){
                localStorage.setItem("User",JSON.stringify(result.data.content))

                dispatch(actAuthSuccess(result.data.content))

                navigate("/",{replace:true})
                alert("Bạn không có quyền truy cập!")
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

    
            // localStorage.setItem("UserAdmin",JSON.stringify(result.data.content))

            // dispatch(actAuthSuccess(result.data.content))

            // navigate("/admin/dashboard",{replace:true})
        })


        .catch((error) => {
            dispatch(actAuthFail(error))
        })
    }
}

export const actAuthRequest = () => {
    return {
        type:ActionType.AUTH_REQUEST
    }
}

export const actAuthSuccess = (data) => {
    return {
        type:ActionType.AUTH_SUCCESS,
        payload:data
    }
}

export const actAuthFail = (error) => {
    return {
        type:ActionType.AUTH_FAIL,
        payload:error
    }
}