import api from "../../../../utils/apiUtil"
import * as ActionType from "./types"

export const actUserRegister = (user) => {
    return (dispatch) => {
        dispatch(actUserRegisterRequest())

        api.post("QuanLyNguoiDung/DangKy",user)
        .then((result) => {
                localStorage.setItem("User",JSON.stringify(result.data.content))
                dispatch(actUserRegisterSuccess(result.data.content))
        })
        .catch((error) => {
            dispatch(actUserRegisterFail(error))
        })
    }
}

export const actUserRegisterRequest = () => {
    return {
        type:ActionType.REGISTER_USER_REQUEST,
    }
}

export const actUserRegisterSuccess = (data) => {
    return {
        type:ActionType.REGISTER_USER_SUCCESS,
        payload:data
    }
}

export const actUserRegisterFail = (error) => {
    return {
        type:ActionType.REGISTER_USER_FAIL,
        payload:error
    }
}