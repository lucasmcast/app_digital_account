import React from 'react'
import GenericScreen from '../../components/GenericScreen'

function FullNameScreen({ navigation, route }) {
    const conta = route.params.conta
    const onClickButton = (inputText) => () => {
        conta.nomeFavorecido = inputText
        console.log(conta, " ", inputText)
        navigation.navigate("BanksScreen", {conta: conta})
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