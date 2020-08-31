import { ADD_LOGIN, ADD_DATA_ACCOUNT } from "../actionsTypes";
import { conta } from "../../../res/data";

const initialState = {
    dataAccount: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_DATA_ACCOUNT: {
            const account = action.payload.dataAccount
            return { ...state, dataAccount: account }
        }
        default:
            return state;
    }
}