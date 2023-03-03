import * as ActionType from "./types"
import api from "../../../../../utils/apiUtil"

export const fetchTheatre = () => {
    return (dispatch) => {
       dispatch(actTheatreRequest());
       
       api.get(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP03`)
       .then((result) => {
        dispatch(actTheatreSuccess(result.data.content))
       })
       .catch((error) => {
        dispatch(actTheatreFail(error))
       })
    }
}

export const actFetchInfoTheatre = () => {
    return api.get("QuanLyRap/LayThongTinHeThongRap")
}

export const actFetchInfoCinemaByTheatre = (maheThongRap) => {
    return api.get(`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maheThongRap}`)
}

export const actCreateShowMovie = (thongTinLichChieu) => {
    return api.post(`QuanLyDatVe/TaoLichChieu`,thongTinLichChieu)
}

const actTheatreRequest = () => {
    return {
        type:ActionType.THEATRE_REQUEST
    }
}

const actTheatreSuccess = (data) => {
    return {
        type:ActionType.THEATRE_SUCCESS,
        payload:data
    }
}

const actTheatreFail = (error) => {
    return {
        type:ActionType.THEATRE_FAIL,
        payload:error
    }
}
