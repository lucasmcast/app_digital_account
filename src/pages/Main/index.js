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
import { fetchDataAccountById } from '../../../src/dao/fetchAPI'
import { addDataAccount } from '../../../src/redux/actions'
import {connect} from 'react-redux'

function Main({navigation, route, addDataAccount}) {
    const login = route.params.login

    const conta = fetchDataAccountById(login.id)
    addDataAccount(conta)

    return (
        <View style={styles.containerMain}>
            <StatusBar backgroundColor="#e63888" barStyle="light-content" />
            <CardsFeatures  conta={conta} navigation={navigation}></CardsFeatures>
            <View style={styles.containerContent}>
                <Menu urlFoto={login.foto} navigation={navigation} ></Menu>
                <CardAccount />
            </View>
            <View>
                <Header nome={login.nome}></Header>
            </View>

        </View>
    )
}


export default connect(null, {addDataAccount})(Main);