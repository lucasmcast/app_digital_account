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
            <View>
                <Header></Header>
            </View>
            <View style={styles.containerContent}>
                <Menu navigation={props.navigation} ></Menu>
                <CardAccount/>
            </View>
            <CardsFeatures navigation={props.navigation}></CardsFeatures>
        </View>
    )
}

export default Main;