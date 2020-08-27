import React from 'react'
import styles from './styles'
import {View, Text} from 'react-native'

function ContentCard({item}) {
    return (
        <View style={styles.containerContentCard}>
            <Text style={styles.textDescricao}>Saldo Disponivel:</Text>
            <Text style={styles.textSaldo}>R$ {item}</Text>
        </View>
    )
}

export default ContentCard;