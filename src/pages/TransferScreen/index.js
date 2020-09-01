import React, { useState } from 'react'
import {
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native'

import styles from './styles'
import CardsAccounts from './CardsAccounts';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { primaryColor } from '../../../res/colors'
import HeaderModal from '../../components/HeaderModal';
import {connect} from 'react-redux'
import {fetchAccountsRegistedById} from '../../../src/dao/fetchAPI'

function TransferScreen({navigation, login}) {

    const contasCadastradas = fetchAccountsRegistedById(login.id)
    
    return (
        <View >
            <HeaderModal onClickHide={()=> navigation.navigate("Main")}/>
            <TouchableOpacity
                style={styles.containerHeaderNewContact}
                onPress={() => navigation.navigate("NumberRegister")}
            >
                <View style={styles.containerNewContact}>
                    <Icon
                        style={styles.iconAddPerson}
                        name="person-add"
                        size={30}
                        color={primaryColor}
                    />
                    <Text style={styles.textAddNewContact}>Transferir para novo contato</Text>
                </View>

                <Icon
                    style={styles.iconKeyBoard}
                    name="keyboard-arrow-right"
                    size={20} />
            </TouchableOpacity>
            <FlatList
                refreshControl={console.log("Atualizado")}
                onRefresh={() => { console.log("Atualizado") }}
                refreshing={false}
                data={contasCadastradas}
                keyExtractor={(item) => item.numberRegister}
                renderItem={({ item }) =>
                    <CardsAccounts navigation={navigation} item={item} />
                }
            />
        </View>
    )

}

const mapStateToProps = (state) => {
    return(
        {login: state.rootLogin.login}
    )
}

export default connect(mapStateToProps)(TransferScreen);