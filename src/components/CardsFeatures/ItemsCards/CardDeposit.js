import React from 'react'
import styles from '../styles'
import {Image, Text, TouchableOpacity} from 'react-native'
import {icon_deposit} from '../../../../res/icon_card'

function CardDeposit({navigation}){
    return(
        <TouchableOpacity 
            style={styles.containerItemsCards}
            onPress={()=> navigation.navigate("DepositScreen") }
        >
            <Image style={styles.imageItemsCards}source={icon_deposit}></Image>
            <Text style={styles.textItemsCards}>Depositar</Text>
        </TouchableOpacity>
    )
}

export default CardDeposit;