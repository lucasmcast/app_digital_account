import React from 'react'
import {View, Text} from 'react-native'
import styles from './styles'

function WelcomeLogin(props){
    return(
        <View style={styles.continerWelcomerLogin}>
            <Text style={styles.textWelcome}>Bem-vindo ao</Text>
            <Text style={styles.textMsg}>Banco digital feito para você</Text>
        </View>
    )
}

export default WelcomeLogin;