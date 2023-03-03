import * as ActionType from "./types"
import api from "../../../../utils/apiUtil"
import { actFetchListUser } from "../ListUser/action"

export const actDeleteUser = (taiKhoan) => {

    return (dispatch) => {
        dispatch(actDeleteUserRequest())

        api.delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
        .then((result) => {
            dispatch(actDeleteUserSuccess(result.data.content))
            alert('Xóa người dùng thành công!')
            dispatch(actFetchListUser())
        })
        .catch((error) => {
            dispatch(actDeleteUserFail(error))
        })
    }
}

const actDeleteUserRequest = () => {
    return {
        type:ActionType.DELETE_USER_REQUEST
    }
}

const actDeleteUserSuccess = (data) => {
    return {
        type:ActionType.DELETE_USER_SUCCESS,
        payload:data,
    }
}

const actDeleteUserFail = (error) => {
    return {
        type:ActionType.DELETE_USER_FAIL,
        payload:error,
    }
}
