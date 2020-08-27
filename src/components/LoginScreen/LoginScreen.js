import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import styles from './styles'
import { womanLogin } from '../../../res/imagesLogin'
import WelcomeLogin from './WelcomeLogin'
import Login from './Login'

function LoginScreen(props) {
    return (
        <View style={styles.containerLogin}>
            <Image style={styles.imageWoman}
                source={womanLogin}>
            </Image>

            <WelcomeLogin></WelcomeLogin>
            <Login></Login>
            <View>

            </View>

        </View >
    )
}

export default LoginScreen;