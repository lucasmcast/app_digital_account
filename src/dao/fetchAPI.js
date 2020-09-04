/**
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @since 1.0.0
 */

import { contas, extrato, getLogin, contasCadastradas, banks, getExtractByAccountAndDate } from "../../res/data";

/**
 * Example Request
 * 
 * /login
 * 
 */

const BASEURL = 'http://dataapi.lucas-martins.com/api/v1'

/**
 * 
 * @param {EndPoint} endpoint 
 */
export const fetchLogin = (email, password) => {
    
   /*  const rawResponse = await fetch(`${BASEURL}/authentication`, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(login)
    });
    const content = await rawResponse.json();

    console.log(content); */

    let loginAccess = getLogin(email, password)
    return loginAccess;
}


export const fetchDataAccountById = (id) => {
    let account = contas[id.toString()]
    return account;
}

export const fetchExtractByAccountAndDate = (numberAccount, date) => {
    let extracts = getExtractByAccountAndDate(numberAccount, date)
    return extracts
}

export const fetchAccountsRegistedById = (id) => {
    let accounts = contasCadastradas[id.toString()]
    return accounts
}

export const fetchBanks = () => {
    return banks;
}