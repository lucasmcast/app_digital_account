import React from 'react'
import styles from './styles'
import { View, Text } from 'react-native'

function FooterCard({ item }) {
    return (
        <View style={styles.containerFooterCard}>
            <Text>Ultima transação:</Text>
            <View>
                <Text>{"item.status"} {"item.estabelecimento"} - R$ {"       "}</Text>
            </View>

        </View>
    )
}

export default FooterCard;