import React from 'react'
import {
    View
} from 'react-native'
import { CardAccount } from '../CardAccount'
import styles from './styles'
import { CardsFeatures } from '../CardsFeatures'
import { Header } from '../Header'
import { StatusBar } from 'react-native'
import { Menu } from '../Menu'

function Main(props) {
    return (
        <View style={styles.containerMain}>
            <StatusBar backgroundColor="#e63888" barStyle="light-content" />
            <View>
                <Header></Header>
                <Menu></Menu>
            </View>
            <CardAccount></CardAccount>
            <CardsFeatures></CardsFeatures>
        </View>
    )
}

export default Main;