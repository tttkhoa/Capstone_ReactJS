import * as ActionType from "./types";
import api from "../../../../utils/apiUtil"

export const actFetchDetailMovie = (maPhim) => {
    return (dispatch) => {
        dispatch(detailMovieRequest())

        api.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
        .then((result) => {
            dispatch(detailMovieSuccess(result.data.content))
        })
        .catch((error) => {
            dispatch(detailMovieFail(error))
        })
    }
}

export const detailMovieRequest = () => {
    return {
        type: ActionType.DETAIL_MOVIE_REQUEST
    }
}

export const detailMovieSuccess = (data) => {
    return {
        type: ActionType.DETAIL_MOVIE_SUCCESS,
        payload:data
    }
}

export const detailMovieFail = (error) => {
    return {
        type: ActionType.DETAIL_MOVIE_FAIL,
        payload:error
    }
}