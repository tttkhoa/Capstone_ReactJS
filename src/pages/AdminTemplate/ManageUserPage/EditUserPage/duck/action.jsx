import * as ActionType from "./types"
import api from "../../../../../utils/apiUtil"

export const actEditUser = (taiKhoan) => {
    return (dispatch) => {
        dispatch(actEditUserRequest())

        api.post(`QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`)
        .then((result) => {
            dispatch(actEditUserSuccess(result.data.content))
        })
        .catch((error) => {
            dispatch(actEditUserFail(error))
        })
    }
}

const actEditUserRequest = () => {
    return {
        type:ActionType.EDIT_USER_REQUEST
    }
}

const actEditUserSuccess = (data) => {
    return {
        type:ActionType.EDIT_USER_SUCCESS,
        payload:data,
    }
}

const actEditUserFail = (error) => {
    return {
        type:ActionType.EDIT_USER_FAIL,
        payload:error,
    }
}
