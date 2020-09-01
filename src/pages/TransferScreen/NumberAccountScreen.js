import React from 'react'
import GenericScreen from '../../components/GenericScreen'

function NumberAccountScreen({ navigation, route }) {
    const conta = route.params.conta
    const onClickButton = (inputText) => () => {
        conta.numeroConta = inputText
        navigation.navigate("InsertValue", { conta: conta })
    }

    return (
        <GenericScreen
            variant="accountNumber"
            onClickHide={() => navigation.navigate("NumberAgencyScreen")}
            textHeader="Qual o numero da Conta?"
            onClickButton={onClickButton}
            nameButton="Confirmar"
        />
    )
}
export default NumberAccountScreen;