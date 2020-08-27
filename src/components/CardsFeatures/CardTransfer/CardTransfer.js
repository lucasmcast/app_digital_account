import React from 'react'
import styles from './styles'
import {Image, TouchableOpacity, Text} from 'react-native'
import {icon_transfer} from '../../../../res/icon_card'

function CardTransfer(props){
    return(
        <TouchableOpacity style={styles.containerCardTransfer}>
            <Image style={styles.imageTransfer}source={icon_transfer}></Image>
            <Text style={styles.textTransfer}>Transferências</Text>
        </TouchableOpacity>
    )
}

export default CardTransfer;