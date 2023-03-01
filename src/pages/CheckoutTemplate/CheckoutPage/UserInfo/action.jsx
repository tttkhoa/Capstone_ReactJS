import * as ActionType from "./types"
import api from "../../../../utils/apiUtil";

export const actFetchUserInfo = () => {
    return (dispatch) => {
        dispatch(actUserInfoRequest());

        api.post("QuanLyNguoiDung/ThongTinTaiKhoan")
        .then((result) => {
            dispatch(actUserInfoSuccess(result.data.content))
        })
        .catch((error) => {
            dispatch(actUserInfoFail(error))
        })

    }
}

export const actUserInfoRequest = () => {
    return {
        type:ActionType.USER_INFO_REQUEST
    }
}

export const actUserInfoSuccess = (data) => {
    return {
        type:ActionType.USER_INFO_SUCCESS,
        payload:data,
    }
}
export const actUserInfoFail = (error) => {
    return {
        type:ActionType.USER_INFO_FAIL,
        payload:error
    }
}