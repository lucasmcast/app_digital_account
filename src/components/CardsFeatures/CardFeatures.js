import React from 'react'
import styles from './styles'
import {View} from 'react-native'
import {CardDeposit, CardTransfer, CardPay} from './ItemsCards'

function CardsActions(props){
    console.log(props)
    return(
        <View style={styles.containerCardFeatures}>
            <CardDeposit></CardDeposit>
            <CardTransfer navigation={props.navigation}></CardTransfer>
            <CardPay></CardPay>
        </View>
    )
}

export default CardsActions;