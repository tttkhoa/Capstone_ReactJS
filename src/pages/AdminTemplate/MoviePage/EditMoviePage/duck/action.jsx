import * as ActionType from "./types"
import api from "../../../../../utils/apiUtil"

export const actEditMovie = (maPhim) => {
    return (dispatch) => {
        dispatch(actEditMovieRequest())

        api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
        .then((result) => {
            dispatch(actEditMovieSuccess(result.data.content))
        })
        .catch((error) => {
            dispatch(actEditMovieFail(error))
        })
    }
}

const actEditMovieRequest = () => {
    return {
        type:ActionType.EDIT_MOVIE_REQUEST
    }
}

const actEditMovieSuccess = (data) => {
    return {
        type:ActionType.EDIT_MOVIE_SUCCESS,
        payload:data,
    }
}

const actEditMovieFail = (error) => {
    return {
        type:ActionType.EDIT_MOVIE_FAIL,
        payload:error,
    }
}
