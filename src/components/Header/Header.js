import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native'
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Header({ nome }) {
    return (
        <View style={styles.containerHeader}>
            <TouchableOpacity>
                <Text style={styles.textNameConta}>{nome}</Text>
            </TouchableOpacity>
            <Icon name="keyboard-arrow-down" size={30} color="#FFF" />
        </View>
    )
}

export default Header;