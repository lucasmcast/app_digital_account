import { ADD_LOGIN, ADD_DATA_ACCOUNT, UPDATE_BALANCE } from "../actionsTypes";
import { conta } from "../../../res/data";
import { Alert } from "react-native";

const initialState = {
    dataAccount: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_DATA_ACCOUNT: {
            const account = action.payload.dataAccount
            return { ...state, dataAccount: account }
        }
        case UPDATE_BALANCE: {
            const {typeTransaction, value} = action.payload
            let account = state.dataAccount
            if(value ===0){
                Alert.alert("Digite um valor valido")
            }
            if(typeTransaction === 1){  
                account.saldoDisponivel -= value
                return {...state, dataAccount: account}
            }
        }
        default:
            return state;
    }
}