import React from 'react'
import GenericScreen from '../../components/GenericScreen'

function NumberRegister({navigation}){

    const onClickButton = (inputText) => () =>{
        navigation.navigate("FullName", {numberRegister: inputText})
    }

    return(
        <GenericScreen 
            onClickHide={() => navigation.navigate("TransferScreen")}
            textHeader="Qual o numero de CPF ou CNPJ?"
            onClickButton={onClickButton}
            nameButton="Confirmar"
        />
    )
}
export default NumberRegister;