import React, { Fragment } from 'react'
import GenericScreen from '../../components/GenericScreen'
import { Text } from 'react-native'

function InsertValueScreen({ navigation, route }) {
    console.log(route)
    const onClickButton = (inputText) => () => {
        console.log(numberRegister, " ", inputText)
        /* navigation.navigate("FullName", {numberRegister: numberRegister, name: inputText}) */
    }
    return (
        <Fragment>
            <GenericScreen
                onClickHide={() => navigation.navigate("TransferScreen")}
                textHeader={`Qual o valor a ser transferido para ${route.params.item.nomeFavorecido}?`}
                onClickButton={onClickButton}
                nameButton="Confirmar"
            />
        </Fragment>
    )
}

export default InsertValueScreen;