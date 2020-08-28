import React from 'react'
import styles from './styles'
import {View} from 'react-native'
import {CardDeposit, CardTransfer, CardPay} from './ItemsCards'

function CardsActions(props){
    return(
        <View style={styles.containerCardFeatures}>
            <CardDeposit></CardDeposit>
            <CardTransfer></CardTransfer>
            <CardPay></CardPay>
        </View>
    )
}

export default CardsActions;