import React from 'react'
import {
    View,
    Image,
    Text
} from 'react-native'
import styles from './styles'
import { HeaderCard } from './HeaderCard'
import { ContentCard } from './ContentCard'
import { FooterCard } from './FooterCard'

function CardSaldo(props){
    return(
        <View style={styles.containerCardSaldo}>
            <HeaderCard></HeaderCard>
            <ContentCard></ContentCard>
            <FooterCard></FooterCard>
        </View>
    )
}

export default CardSaldo;