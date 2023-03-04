import { combineReducers } from "redux";
import carouselReducer from "../pages/HomeTemplate/HomePage/Carousel/duck/reducer";
import theatreReducer from "../pages/HomeTemplate/HomePage/Theatre/duck/reducer";
import listMovieReducer from "../pages/HomeTemplate/ListMovie/duck/reducer";
import detailMovieReducer from "../pages/HomeTemplate/DetailMoviePage/duck/reducer";
import authReducer from "../pages/AdminTemplate/AuthPage/duck/reducer";
import userLoginReducer from "../pages/HomeTemplate/LoginPage/duck/reducer";
import seatListReducer from "../pages/CheckoutTemplate/CheckoutPage/duck/reducer";
import bookTicketReducer from "../pages/CheckoutTemplate/CheckoutPage/BookTicket/reducer";
import userInfoReducer from "../pages/CheckoutTemplate/CheckoutPage/UserInfo/reducer";
import registerUserReducer from "../pages/HomeTemplate/RegisterPage/duck/reducer";
import addMovieReducer from "../pages/AdminTemplate/MoviePage/AddMoviePage/duck/reducer";
import editMovieReducer from "../pages/AdminTemplate/MoviePage/EditMoviePage/duck/reducer";
import updateMovieReducer from "../pages/AdminTemplate/MoviePage/EditMoviePage/UpdateMovie/reducer";
import deleteMovieReducer from "../pages/AdminTemplate/MoviePage/ManageMoviePage/DeleteMovie/reducer";
import listUserReducer from "../pages/AdminTemplate/ManageUserPage/ListUser/reducer";
import addUserReducer from "../pages/AdminTemplate/ManageUserPage/AddUserPage/duck/reducer";
import editUserReducer from "../pages/AdminTemplate/ManageUserPage/EditUserPage/duck/reducer";
import updateUserReducer from "../pages/AdminTemplate/ManageUserPage/EditUserPage/UpdateUser/reducer";
import deleteUserReducer from "../pages/AdminTemplate/ManageUserPage/DeleteUser/reducer";

const rootReducer = combineReducers({carouselReducer,theatreReducer,listMovieReducer,detailMovieReducer,authReducer,userLoginReducer,seatListReducer,bookTicketReducer,userInfoReducer,registerUserReducer,addMovieReducer,editMovieReducer,updateMovieReducer,deleteMovieReducer,listUserReducer,addUserReducer,editUserReducer,updateUserReducer,deleteUserReducer})

export default rootReducer;