import React from 'react'
import GenericScreen from '../../components/GenericScreen'

function FullNameScreen({ navigation, route }) {
    const conta = route.params.conta
    console.log("Conta", route)

    const onClickButton = (inputText) => () => {
        conta.nomeFavorecido = inputText
        console.log(conta, " ", inputText)
        /* navigation.navigate("FullName", {numberRegister: numberRegister, name: inputText}) */
    }
    return (
        <GenericScreen
            onClickHide={() => navigation.navigate("NumberRegister")}
            textHeader="Qual o nome completo do favorecido?"
            onClickButton={onClickButton}
            nameButton="Confirmar"
        />
    )
}
export default FullNameScreen;