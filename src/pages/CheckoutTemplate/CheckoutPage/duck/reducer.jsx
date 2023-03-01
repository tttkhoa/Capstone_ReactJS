import * as ActionType from "./types"
import { ThongTinLichChieu } from "../../../../_core/models/thongTinPhongVe";

const initialState = {
    loading:false,
    data:new (ThongTinLichChieu),
    seatListBooking:[],
    tabActive:"1",
    error:null,
}

const seatListReducer = (state = initialState , action) => {
    switch (action.type) {
        case ActionType.SEAT_LIST_REQUEST:{
            state.loading = true;
            state.data = new (ThongTinLichChieu);
            state.error = null
            return {...state}
        }
        case ActionType.SEAT_LIST_SUCCESS:{
            state.loading = false;
            state.data = action.payload;
            state.error = null
            return {...state}
        }
        case ActionType.SEAT_LIST_FAIL:{
            state.loading = false;
            state.data = null;
            state.error = action.payload
            return {...state}
        }
        case ActionType.SEAT_BOOK:{
            let seatListBooking = [...state.seatListBooking];
            let index = seatListBooking.findIndex(seatBooking => seatBooking.maGhe === action.payload.maGhe)
            if(index !== -1){
                seatListBooking.splice(index,1)
            } else {
                seatListBooking.push(action.payload)
            }
            return {...state,seatListBooking}
        }
        case ActionType.SEAT_BOOK_DONE:{
            state.seatListBooking = []
            return {...state}
        }

        case ActionType.AUTO_CHANGE_TAB:{
            state.tabActive = "2";
            return {...state}
        }

        case ActionType.CHANGE_TAB:{
            state.tabActive = action.number
        return {...state}
        }
        default:
            return {...state}
    }
}

export default seatListReducer;