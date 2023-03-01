import * as ActionType from "./types"
import api from "../../../../utils/apiUtil"

export const actfetchSeatList = (maPhongVe) => {
    return (dispatch) => {
        dispatch(actSeatListRequest())

        api.get(`https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maPhongVe}`)
        .then((result) => {
            dispatch(actSeatListSuccess(result.data.content))
        })
        .catch((error) => {
            dispatch(actSeatListFail(error))
        })
    }
}

const actSeatListRequest = () => {
    return {
        type:ActionType.SEAT_LIST_REQUEST
    }
}

const actSeatListSuccess = (data) => {
    return {
        type:ActionType.SEAT_LIST_SUCCESS,
        payload:data,
    }
}

const actSeatListFail = (error) => {
    return {
        type:ActionType.SEAT_LIST_FAIL,
        payload:error,
    }
}
