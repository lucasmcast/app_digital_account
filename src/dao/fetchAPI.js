/**
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @since 1.0.0
 */

import { login, conta, extrato, getLogin } from "../../res/data";

/**
 * Example Request
 * 
 * /login
 * 
 */


/**
 * 
 * @param {EndPoint} endpoint 
 */
export const fetchLogin = (email, password) => {
    let loginAccess = getLogin(email, password)
    return loginAccess;
}

export const fetchDataAccountById = (id) => {
    console.log("FETCH DO ID", id)
    let account = conta[id.toString()]
    return account;
}

export const fetchExtractByAccount = (numberAccount) => {
    let extract = extrato[numberAccount]
    return extract
}