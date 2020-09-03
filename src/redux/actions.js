/**
 * Actions for redux
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @since 1.0.0
 */

import { ADD_LOGIN, ADD_DATA_ACCOUNT, DEL_LOGIN, GET_LOGIN } from "./actionsTypes";

export const login = (email, password) => ({
    type: GET_LOGIN,
    payload: {
        email, password
    }
})

export const addLogin = (login) => ({
    type: ADD_LOGIN,
    payload: {
        login
    }
})

export const addDataAccount = (dataAccount) => ({
    type: ADD_DATA_ACCOUNT,
    payload: {
        dataAccount
    }
})

export const delLogin = () => ({
    type: DEL_LOGIN
})

