import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'
import { icon_cartao, icon_transferBlack, icon_depositBlack } from '../../../../../res/icon_card'
import {formatMoney} from '../../../../utils'
function CardExtract({ item }) {

    let icon_transaction;

    switch (item.status) {
        case "Compra":
            icon_transaction = icon_cartao;
            break;
        case "Transferência":
            icon_transaction = icon_transferBlack;
            break;
        case "Depósito":
            icon_transaction = icon_depositBlack
            break;
        default:
            icon_transaction = icon_cartao
    }

    return (
        <View style={styles.containerCardExtract}>
            <View style={styles.containerStart}>
                <Image
                    style={styles.iconStatus}
                    source={icon_transaction}>
                </Image>
                <Text style={styles.lineStart}></Text>
            </View>
            <View style={styles.containerDetails}>
                <Text style={styles.textStatus}>{item.status}</Text>
                <Text>{item.estabelecimento}</Text>
                <Text>R$ {formatMoney(item.valor)}</Text>
            </View>
            <Text style={styles.textData}>{item.date}</Text>

        </View>
    )
}

export default CardExtract;