import { combineReducers } from "redux";
import  carouselReducer from "../pages/HomeTemplate/HomePage/Carousel/duck/reducer";
import theatreReducer from "../pages/HomeTemplate/HomePage/Theatre/duck/reducer";
import listMovieReducer from "../pages/HomeTemplate/ListMovie/duck/reducer";
import detailMovieReducer from "../pages/HomeTemplate/DetailMoviePage/duck/reducer";
import authReducer from "../pages/AdminTemplate/AuthPage/duck/reducer";

const rootReducer = combineReducers({carouselReducer,theatreReducer,listMovieReducer,detailMovieReducer,authReducer})

export default rootReducer;