import React from 'react'
import styles from './styles'
import {Image, TouchableOpacity, Text} from 'react-native'
import {icon_pay} from '../../../../res/icon_card'


function CardPay(props){
    return(
        <TouchableOpacity style={styles.containerCardPay}>
            <Image style={styles.imagePay}source={icon_pay}></Image>
            <Text style={styles.textPay}>Pagamentos</Text>
        </TouchableOpacity>
    )
}

export default CardPay;