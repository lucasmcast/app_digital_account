import React from 'react'
import GenericScreen from '../../components/GenericScreen'

function FullNameScreen({navigation, route}){
    const numberRegister = route.params.numberRegister

    const onClickButton = (inputText) => () =>{
        console.log(numberRegister, " ",  inputText)
        /* navigation.navigate("FullName", {numberRegister: numberRegister, name: inputText}) */
    }
    return(
        <GenericScreen 
            onClickHide={() => navigation.navigate("NumberRegister")}
            textHeader="Qual o nome completo do favorecido?"
            onClickButton={onClickButton}
            nameButton="Confirmar"
        />
    )
}
export default FullNameScreen;