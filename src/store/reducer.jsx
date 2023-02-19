import { combineReducers } from "redux";
import  carouselReducer from "../pages/HomeTemplate/HomePage/Carousel/duck/reducer";
import theatreReducer from "../pages/HomeTemplate/HomePage/Theatre/duck/reducer";

const rootReducer = combineReducers({carouselReducer,theatreReducer})

export default rootReducer;