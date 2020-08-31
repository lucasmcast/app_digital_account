import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'


function CardsAccounts({ item, navigation }) {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("InsertValue", { item: item })}
            style={styles.container}
        >
            <Text style={styles.textAccount}>{item.nomeFavorecido}</Text>
            <Icon name="keyboard-arrow-right" size={20} />
        </TouchableOpacity>
    )
}

export default CardsAccounts;