import React from 'react'
import { View, Text } from 'react-native';
import HeaderAbstract from '../../../components/HeaderAbstract';
import Button from '../../../components/Button';
import ItemConfirm from './ItemConfirm';
import styles from './styles';

function ConfirmTransfer({ navigation, route }) {
    const conta = route.params.conta
    const value = route.params.value
    console.log(conta)
    return (
        <View style={styles.container}>
            <HeaderAbstract onClickHide={() => navigation.navigate("InsertValue")}></HeaderAbstract>
            <View style={styles.containerInfo}>
                <ItemConfirm icon="bank" text={conta.numeroConta}></ItemConfirm>
                <ItemConfirm icon="bank" text={conta.agencia}></ItemConfirm>
                <ItemConfirm icon="account" text={conta.nomeFavorecido}></ItemConfirm>
                <ItemConfirm icon="format-list-numbered" text={conta.cpf}></ItemConfirm>
                <ItemConfirm icon="cash" text={`R$ ${value}`}></ItemConfirm>
            </View>
            <Button name="Confirmar"></Button>
        </View>
    )
}

export default ConfirmTransfer;