import * as ActionType from "./types"
import api from "../../../../../utils/apiUtil"
import { actFetchListMovie } from "../../../../HomeTemplate/ListMovie/duck/action"


export const actDeleteMovie = (maPhim) => {

    return (dispatch) => {
        dispatch(actDeleteMovieRequest())

        api.delete(`QuanLyPhim/XoaPhim?MaPhim=${maPhim}`)
        .then((result) => {
            dispatch(actDeleteMovieSuccess(result.data.content))
            alert('Xóa phim thành công!')
            dispatch(actFetchListMovie())
        })
        .catch((error) => {
            dispatch(actDeleteMovieFail(error))
        })
    }
}

const actDeleteMovieRequest = () => {
    return {
        type:ActionType.DELETE_MOVIE_REQUEST
    }
}

const actDeleteMovieSuccess = (data) => {
    return {
        type:ActionType.DELETE_MOVIE_SUCCESS,
        payload:data,
    }
}

const actDeleteMovieFail = (error) => {
    return {
        type:ActionType.DELETE_MOVIE_FAIL,
        payload:error,
    }
}
