import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import { addPerson, iconHelp } from '../../../../res/imagesLogin'

function FooterLogin(props) {
    return (
        <View style={styles.containerFooter}>
            <View style={styles.cardFooter}>
                <TouchableOpacity>
                    <Image style={styles.iconFooter} source={addPerson}></Image>
                </TouchableOpacity>
                <Text style={styles.textFooter}>Abrir conta grátis</Text>
            </View>
            <View style={styles.cardFooter}>
                <TouchableOpacity>
                    <Image style={styles.iconFooter} source={iconHelp}></Image>
                </TouchableOpacity>
                <Text style={styles.textFooter}>Dúvidas</Text>
            </View>
        </View>

    )
}

export default FooterLogin;