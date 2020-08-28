import React from 'react'
import {
    View
} from 'react-native'
import { CardAccount } from '../CardAccount'
import styles from './styles'
import { CardsFeatures } from '../CardsFeatures'
import { Header } from '../Header'
import { StatusBar } from 'react-native'
import { LoginScreen } from '../LoginScreen'
import { TabsMenu } from '../TabsMenu'

function Main(props) {
    return (
        <View style={styles.containerMain}>
            <StatusBar backgroundColor="#e63888" barStyle="light-content" />
            <View>
                <Header></Header>
                <TabsMenu></TabsMenu>
            </View>
            <CardAccount></CardAccount>
            <CardsFeatures></CardsFeatures>
            {/* <LoginScreen></LoginScreen> */}
        </View>
    )
}

export default Main;