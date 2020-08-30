import React, { useState } from 'react'
import {
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native'

import styles from './styles'
import { contasCadastradas } from '../../../res/data'
import CardsAccounts from './CardsAccounts';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { primaryColor } from '../../../res/colors'
import { icon_transfer } from '../../../res/icon_card'
import HeaderModal from '../../components/HeaderModal';

function TransferScreen({navigation}) {
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
                keyExtractor={(item) => item.cpf}
                renderItem={({ item }) =>
                    <CardsAccounts navigation={navigation} item={item} />
                }
            />
        </View>
    )

}

export default TransferScreen;