import { combineReducers } from "redux";
import  carouselReducer from "../pages/HomeTemplate/HomePage/Carousel/duck/reducer";
import theatreReducer from "../pages/HomeTemplate/HomePage/Theatre/duck/reducer";
import listMovieReducer from "../pages/HomeTemplate/ListMovie/duck/reducer";
import detailMovieReducer from "../pages/HomeTemplate/DetailMoviePage/duck/reducer";
import authReducer from "../pages/AdminTemplate/AuthPage/duck/reducer";
import userLoginReducer from "../pages/HomeTemplate/LoginPage/duck/reducer";
import seatListReducer from "../pages/CheckoutTemplate/CheckoutPage/duck/reducer";
import bookTicketReducer from "../pages/CheckoutTemplate/CheckoutPage/BookTicket/reducer";
import userInfoReducer from "../pages/CheckoutTemplate/CheckoutPage/UserInfo/reducer";

const rootReducer = combineReducers({carouselReducer,theatreReducer,listMovieReducer,detailMovieReducer,authReducer,userLoginReducer,seatListReducer,bookTicketReducer,userInfoReducer})

export default rootReducer;