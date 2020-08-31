import { ADD_LOGIN, DEL_LOGIN } from "../actionsTypes";
import { login } from "../../../res/data";

const initialState = {
    login: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_LOGIN: {
            const login = action.payload.login
            return { ...state, login: login }
        }
        case DEL_LOGIN: {
            return { login: undefined }
        }
        default:
            return state;
    }
}