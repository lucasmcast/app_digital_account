import React from 'react'
import styles from './styles'
import { Text, Image, View } from 'react-native'
import { icon_conta } from '../../../../res/icon_card/'

function HeaderCard(props) {
    return (
        <View style={styles.containerIconConta}>
            <Image style={styles.icon_conta} source={icon_conta}></Image>
            <Text>Conta</Text>
        </View>
    )
}


export default HeaderCard;