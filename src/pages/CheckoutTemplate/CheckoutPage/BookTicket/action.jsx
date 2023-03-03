import * as ActionType from "./types"
import api from "../../../../utils/apiUtil";
import { actfetchSeatList } from "../duck/action";
import { AUTO_CHANGE_TAB, SEAT_BOOK_DONE } from "../duck/types";
import { actFetchUserInfo } from "../UserInfo/action";


export const actBookSeat = (thongTinDatVe) => {
    return (dispatch) => {
        dispatch(actBookTicketRequest());

        api.post("QuanLyDatVe/DatVe",thongTinDatVe)
        .then((result) => {
             dispatch(actBookTicketSuccess(result.data.content))
             dispatch(actfetchSeatList(thongTinDatVe.maLichChieu))
             dispatch(actFetchUserInfo())
             dispatch({type:SEAT_BOOK_DONE})
            //  dispatch({type:AUTO_CHANGE_TAB})

        })
        .catch((error) => {
            dispatch(actBookTicketFail(error))
        })

    }
}

export const actBookTicketRequest = () => {
    return {
        type:ActionType.BOOK_TICKET_REQUEST
    }
}

export const actBookTicketSuccess = (data) => {
    return {
        type:ActionType.BOOK_TICKET_SUCCESS,
        payload:data,
    }
}
export const actBookTicketFail = (error) => {
    return {
        type:ActionType.BOOK_TICKET_FAIL,
        payload:error
    }
}