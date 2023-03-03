import * as ActionType from "./types"
import api from "../../../../../utils/apiUtil"

export const actAddMovieList = (formData) => {
    return (dispatch) => {
        dispatch(actAddMovieRequest())

        api.post("QuanLyPhim/ThemPhimUploadHinh",formData)
        .then((result) => {
            dispatch(actAddMovieSuccess(result.data.content))
            alert("Thêm phim thành công!")
        })
        .catch((error) => {
            dispatch(actAddMovieFail(error))
        })
    }
}

const actAddMovieRequest = () => {
    return {
        type:ActionType.ADD_MOVIE_REQUEST
    }
}

const actAddMovieSuccess = (data) => {
    return {
        type:ActionType.ADD_MOVIE_SUCCESS,
        payload:data,
    }
}

const actAddMovieFail = (error) => {
    return {
        type:ActionType.ADD_MOVIE_FAIL,
        payload:error,
    }
}
