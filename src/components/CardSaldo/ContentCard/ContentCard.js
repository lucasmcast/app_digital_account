import React from 'react'
import styles from './styles'
import {View, Text} from 'react-native'

function ContentCard(props) {
    return (
        <View style={styles.containerContentCard}>
            <Text >Saldo Disponivel:</Text>
            <Text style={styles.textSaldo}>2.000,50</Text>
        </View>
    )
}

export default ContentCard;