import * as ActionType from "./types"
import api from "../../../../../utils/apiUtil";

export const fetchCarousel = () => {
    return (dispatch) => {
        dispatch(actCarouselRequest())

        api.get("https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner")
        .then((result) => {
            dispatch(actCarouselSuccess(result.data.content))
        })
        .catch((error) => {
            dispatch(actCarouselFail(error))
        })
    }
}

export const actCarouselRequest = () => {
    return {
        type:ActionType.CAROUSEL_REQUEST
    }
}

export const actCarouselSuccess = (data) => {
    return {
        type:ActionType.CAROUSEL_SUCCESS,
        payload:data,
    }
}

export const actCarouselFail = (error) => {
    return {
        type:ActionType.CAROUSEL_REQUEST,
        payload:error
    }
}