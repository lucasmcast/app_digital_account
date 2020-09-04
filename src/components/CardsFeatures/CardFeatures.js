import React from 'react'
import styles from './styles'
import {View} from 'react-native'
import {CardDeposit, CardTransfer, CardPay} from './ItemsCards'

function CardsActions({navigation}){
    return(
        <View style={styles.containerCardFeatures}>
            <CardDeposit navigation={navigation}></CardDeposit>
            <CardTransfer navigation={navigation}></CardTransfer>
            <CardPay  navigation={navigation}></CardPay>
        </View>
    )
}

export default CardsActions;