import * as ActionType from "./types"
import api from "../../../../utils/apiUtil";

export const actFetchListUser = (tuKhoa="") => {
    return (dispatch) => {
        dispatch(actListUserRequest());

        if(tuKhoa.trim() !== ''){
            api.get(`QuanLyNguoiDung/TimKiemNguoiDung?maNhom=GP03&tuKhoa=${tuKhoa}`)
            .then((result) => {
                dispatch(actListUserSuccess(result.data.content))
            })
            .catch((error) => {
                dispatch(actListUserFail(error))
            })
        } else {
        api.get("QuanLyNguoiDung/LayDanhSachNguoiDung?maNhom=GP03")
        .then((result) => {
            dispatch(actListUserSuccess(result.data.content))
        })
        .catch((error) => {
            dispatch(actListUserFail(error))
        })
        }

    }
}

export const actListUserRequest = () => {
    return {
        type: ActionType.LIST_USER_REQUEST
    }
}

export const actListUserSuccess = (data) => {
    return {
        type:ActionType.LIST_USER_SUCCESS,
        payload:data
    }
}

export const actListUserFail = (error) => {
    return {
        type:ActionType.LIST_USER_FAIL,
        payload:error
    }
}