import React from 'react'
import styles from '../styles'
import {Image, Text, TouchableOpacity} from 'react-native'
import {icon_deposit} from '../../../../res/icon_card'

function CardDeposit(props){
    return(
        <TouchableOpacity style={styles.containerItemsCards}>
            <Image style={styles.imageItemsCards}source={icon_deposit}></Image>
            <Text style={styles.textItemsCards}>Depósitos</Text>
        </TouchableOpacity>
    )
}

export default CardDeposit;