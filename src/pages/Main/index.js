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
import { connect } from 'react-redux'

function Main(props) {
    console.log("PROPS DO MAIN", props.login)
    let conta;
    if (props.login) {
        conta = fetchDataAccountById(props.login.id)
        props.addDataAccount(conta)
    }

    console.log("id DO MAIN", conta)

    return (
        props.login ?
            <View style={styles.containerMain}>
                <StatusBar backgroundColor="#e63888" barStyle="light-content" />
                <CardsFeatures navigation={props.navigation}></CardsFeatures>
                <View style={styles.containerContent}>
                    <Menu urlFoto={props.login.foto} navigation={props.navigation} ></Menu>
                    <CardAccount />
                </View>
                <View>
                    <Header></Header>
                </View>

            </View>
            : props.navigation.navigate("Login")
    )
}

const mapStateToProps = (state) => {
    return (
        { login: state.rootLogin.login }
    )
}
export default connect(mapStateToProps, { addDataAccount })(Main);