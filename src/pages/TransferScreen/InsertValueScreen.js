import React, { Fragment } from 'react'
import GenericScreen from '../../components/GenericScreen'
import { Text } from 'react-native'

function InsertValueScreen({ navigation, route }) {

    const onClickButton = (inputText) => () => {
        navigation.navigate("ConfirmTransfer", { conta: route.params.item, value: inputText })
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