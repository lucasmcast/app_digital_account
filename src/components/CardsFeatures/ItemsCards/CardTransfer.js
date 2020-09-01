import React, { Fragment,useState } from 'react'
import styles from '../styles'
import { Image, TouchableOpacity, Text } from 'react-native'
import { icon_transfer } from '../../../../res/icon_card'

function CardTransfer(props) {
    return (
        <Fragment>
            <TouchableOpacity 
                style={styles.containerItemsCards}
                onPress={()=> props.navigation.navigate("TransferScreen")}            
            >
                <Image style={styles.imageItemsCards} source={icon_transfer}></Image>
                <Text style={styles.textItemsCards}>Transferir</Text>
            </TouchableOpacity>
        </Fragment>

    )
}

export default CardTransfer;