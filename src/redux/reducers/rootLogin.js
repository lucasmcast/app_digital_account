import { ADD_LOGIN, DEL_LOGIN } from "../actionsTypes";

const initialState = {
    login: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_LOGIN: {
            const login = action.payload.login
            console.log("Login", state)
            return {...state, login: login}
        }
        case DEL_LOGIN: {
            console.log("DEL LOGIN", state)
            return {login: {}}
        }
        default:
            return state;
    }
}