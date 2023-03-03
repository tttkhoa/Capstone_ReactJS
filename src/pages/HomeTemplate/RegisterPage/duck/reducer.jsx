import * as ActionType from "./types"

const initialState = {
    loading:false,
    data:null,
    error:null,
}

const registerUserReducer = (state = initialState , action) => {
    switch (action.type) {
        case ActionType.REGISTER_USER_REQUEST:{
            state.loading = true;
            state.data = null;
            state.error = null;
            return {...state}
        }
        case ActionType.REGISTER_USER_SUCCESS:{
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return {...state}
        }
        case ActionType.REGISTER_USER_FAIL:{
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return {...state}
        }
        default:
            return {...state}
    }
}

export default registerUserReducer;