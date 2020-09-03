import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'

function Item(props) {
    return (
        <View style={styles.containerItem}>
            <Icon name={props.icon} size={30} color="#000" />
            <Text>{props.text}</Text>
        </View>
    )
}

export default Item;