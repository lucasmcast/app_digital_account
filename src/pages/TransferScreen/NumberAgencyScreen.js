import React from 'react'
import GenericScreen from '../../components/GenericScreen'

function NumberAgencyScreen({ navigation, route }) {
    const conta = route.params.conta
    const onClickButton = (inputText) => () => {
        conta.agencia = inputText
        navigation.navigate("NumberAccountScreen", { conta: conta })
    }

    return (
        <GenericScreen
            variant="agencyNumber"
            onClickHide={() => navigation.navigate("BanksScreen")}
            textHeader="Qual o numero da Agência?"
            onClickButton={onClickButton}
            nameButton="Confirmar"
        />
    )
}
export default NumberAgencyScreen;