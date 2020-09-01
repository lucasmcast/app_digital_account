/**
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @since 1.0.0
 */

import { conta, extrato, getLogin, contasCadastradas} from "../../res/data";

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

export const fetchAccountsRegistedById = (id) =>{
    let accounts = contasCadastradas[id.toString()]
    return accounts
}