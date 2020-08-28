import React from 'react'
import styles from '../styles'
import {Image, TouchableOpacity, Text} from 'react-native'
import {icon_pay} from '../../../../res/icon_card'

function CardPay(props){
    return(
        <TouchableOpacity style={styles.containerItemsCards}>
            <Image style={styles.imageItemsCards}source={icon_pay}></Image>
            <Text style={styles.textItemsCards}>Pagar</Text>
        </TouchableOpacity>
    )
}

export default CardPay;