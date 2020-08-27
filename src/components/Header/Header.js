import React from 'react';
import {TouchableOpacity, Image, View, Text } from 'react-native'
import styles from './styles';
import {icon_seta} from '../../../res/icon_card'

function Header(props) {
    return (
        <View style={styles.containerHeader}>
            <TouchableOpacity>
                <View>
                    <Image></Image>
                    <Text style={styles.textNameConta}>Lucas</Text>
                </View>
                <Image style={styles.iconSeta} source={icon_seta}></Image>
            </TouchableOpacity>
        </View>
    )
}

export default Header;