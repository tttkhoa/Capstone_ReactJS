import * as ActionType from "./types"
import api from "../../../../../utils/apiUtil"
import { actFetchListMovie } from "../../../../HomeTemplate/ListMovie/duck/action"


export const actUpdateMovie = (formData,navigate) => {

    return (dispatch) => {
        dispatch(actUpdateMovieRequest())

        api.post("QuanLyPhim/CapNhatPhimUpload",formData)
        .then((result) => {
            dispatch(actUpdateMovieSuccess(result.data.content))
            alert('Cập nhật phim thành công!')
            dispatch(actFetchListMovie())
            navigate("/admin/manage-movie",{replace:true})
        })
        .catch((error) => {
            dispatch(actUpdateMovieFail(error))
        })
    }
}

const actUpdateMovieRequest = () => {
    return {
        type:ActionType.UPDATE_MOVIE_REQUEST
    }
}

const actUpdateMovieSuccess = (data) => {
    return {
        type:ActionType.UPDATE_MOVIE_SUCCESS,
        payload:data,
    }
}

const actUpdateMovieFail = (error) => {
    return {
        type:ActionType.UPDATE_MOVIE_FAIL,
        payload:error,
    }
}
