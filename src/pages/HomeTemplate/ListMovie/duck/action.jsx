import * as ActionType from "./types"
import api from "../../../../utils/apiUtil";

export const actFetchListMovie = (tenPhim="") => {
    return (dispatch) => {
        dispatch(actListMovieRequest());

        if(tenPhim.trim() !== ''){
            api.get(`QuanLyPhim/LayDanhSachPhim?maNhom=GP03&tenPhim=${tenPhim}`)
            .then((result) => {
                dispatch(actListMovieSuccess(result.data.content))
            })
            .catch((error) => {
                dispatch(actListMovieFail(error))
            })
        } else {
        api.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP03")
        .then((result) => {
            dispatch(actListMovieSuccess(result.data.content))
        })
        .catch((error) => {
            dispatch(actListMovieFail(error))
        })
        }

    }
}

export const actListMovieRequest = () => {
    return {
        type: ActionType.LIST_MOVIE_REQUEST
    }
}

export const actListMovieSuccess = (data) => {
    return {
        type:ActionType.LIST_MOVIE_SUCCESS,
        payload:data
    }
}

export const actListMovieFail = (error) => {
    return {
        type:ActionType.LIST_MOVIE_FAIL,
        payload:error
    }
}