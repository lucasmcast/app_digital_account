import React from 'react'
import styles from './styles'
import {View, Text} from 'react-native'

function FooterCard(props){
    return(
        <View style={styles.containerFooterCard}>
            <Text>Ultima transação:</Text>
            <Text>Mercado do Silveira LTDA - R$300,00</Text>
        </View>
    )
}

export default FooterCard;