import React from 'react'
import {
    View
} from 'react-native'
import { CardSaldo } from '../CardSaldo'
import styles from './styles'
import { CardsActions } from '../CardsActions'

function Main(props){
    return(
        <View style={styles.containerMain}>
            <CardsActions></CardsActions>
            <CardSaldo></CardSaldo>
        </View>
    )
}

export default Main;