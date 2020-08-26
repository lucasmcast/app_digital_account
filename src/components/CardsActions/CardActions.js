import React from 'react'
import styles from './styles'
import {View} from 'react-native'
import { CardDeposit } from './CardDeposit'
import { CardTransfer } from './CardTransfer'
import { CardPay } from './CardPay'

function CardsActions(props){
    return(
        <View>
            <CardDeposit></CardDeposit>
            <CardTransfer></CardTransfer>
            <CardPay></CardPay>
        </View>
    )
}

export default CardsActions;