import * as ActionType from "./types"
import api from "../../../../../utils/apiUtil"
import { actFetchListUser } from "../../ListUser/action"

export const actUpdateUser = (userEdit,navigate) => {

    return (dispatch) => {
        dispatch(actUpdateUserRequest())

        api.put("QuanLyNguoiDung/CapNhatThongTinNguoiDung",userEdit)
        .then((result) => {
            dispatch(actUpdateUserSuccess(result.data.content))
            alert('Cập nhật người dùng thành công!')
            dispatch(actFetchListUser())
            navigate("/admin/manage-user",{replace:true})
        })
        .catch((error) => {
            dispatch(actUpdateUserFail(error))
        })
    }
}

const actUpdateUserRequest = () => {
    return {
        type:ActionType.UPDATE_USER_REQUEST
    }
}

const actUpdateUserSuccess = (data) => {
    return {
        type:ActionType.UPDATE_USER_SUCCESS,
        payload:data,
    }
}

const actUpdateUserFail = (error) => {
    return {
        type:ActionType.UPDATE_USER_FAIL,
        payload:error,
    }
}
