import * as ActionType from "./types"
import api from "../../../../../utils/apiUtil"

export const actAddUserList = (user) => {
    return (dispatch) => {
        dispatch(actAddUserRequest())

        api.post("QuanLyNguoiDung/ThemNguoiDung",user)
        .then((result) => {
            dispatch(actAddUserSuccess(result.data.content))
            alert("Thêm người dùng thành công!")
        })
        .catch((error) => {
            dispatch(actAddUserFail(error))
        })
    }
}

const actAddUserRequest = () => {
    return {
        type:ActionType.ADD_USER_REQUEST
    }
}

const actAddUserSuccess = (data) => {
    return {
        type:ActionType.ADD_USER_SUCCESS,
        payload:data,
    }
}

const actAddUserFail = (error) => {
    return {
        type:ActionType.ADD_USER_FAIL,
        payload:error,
    }
}
