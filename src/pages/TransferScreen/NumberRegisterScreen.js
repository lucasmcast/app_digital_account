import React from 'react'
import GenericScreen from '../../components/GenericScreen'

function NumberRegister({ navigation }) {
    const conta = {}
    const onClickButton = (inputText) => () => {
        conta.numberRegister = inputText
        navigation.navigate("FullName", { conta: conta })
    }

    return (
        <GenericScreen
            onClickHide={() => navigation.navigate("TransferScreen")}
            textHeader="Qual o numero de CPF ou CNPJ?"
            onClickButton={onClickButton}
            nameButton="Confirmar"
        />
    )
}
export default NumberRegister;