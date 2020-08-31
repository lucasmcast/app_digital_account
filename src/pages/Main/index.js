import React from 'react'
import {
    View
} from 'react-native'
import { CardAccount } from '../../components/CardAccount'
import styles from './styles'
import { CardsFeatures } from '../../components/CardsFeatures'
import { Header } from '../../components/Header'
import { StatusBar } from 'react-native'
import { Menu } from '../../components/Menu'

function Main(props) {

    return (
        <View style={styles.containerMain}>
            <StatusBar backgroundColor="#e63888" barStyle="light-content" />
            <CardsFeatures navigation={props.navigation}></CardsFeatures>
            <View style={styles.containerContent}>
                <Menu navigation={props.navigation} ></Menu>
                <CardAccount />
            </View>
            <View>
                <Header></Header>
            </View>

        </View>
    )
}

export default Main;