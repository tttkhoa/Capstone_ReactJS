import * as ActionType from "./types"

const initialState = {
    loading:false,
    data:null,
    error:null,
}

const editMovieReducer = (state = initialState , action) => {
    switch (action.type) {
        case ActionType.EDIT_MOVIE_REQUEST:{
            state.loading = true;
            state.data = null;
            state.error = null;
            return {...state}
        }
        case ActionType.EDIT_MOVIE_SUCCESS:{
            state.loading = false;
            state.data = action.payload;
            state.error = null
            return {...state}
        }
        case ActionType.EDIT_MOVIE_FAIL:{
            state.loading = false;
            state.data = null;
            state.error = action.payload
            return {...state}
        }
        default:
            return {...state}
    }
}

export default editMovieReducer;