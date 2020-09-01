import React, { Fragment } from 'react'
import GenericScreen from '../../components/GenericScreen'
import { Text } from 'react-native'
import {connect} from 'react-redux'


function InsertValueScreen({ navigation, route, saldoDisponivel }) {

    const onClickButton = (inputText) => () => {
        navigation.navigate("ConfirmTransfer", { conta: route.params.conta, value: inputText })
    }
    return (
        <Fragment>
            <GenericScreen
                variant="money"
                balance={saldoDisponivel}
                onClickHide={() => navigation.navigate("TransferScreen")}
                textHeader={`Qual o valor a ser transferido para ${route.params.conta.nomeFavorecido}?`}
                onClickButton={onClickButton}
                nameButton="Confirmar"
            />
        </Fragment>
    )
}
const mapStateToProps =(state) => {
    return(
        {saldoDisponivel : state.rootDataAccount.dataAccount.saldoDisponivel}
    )
}
export default connect(mapStateToProps)(InsertValueScreen);