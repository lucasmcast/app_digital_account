import React from 'react'
import HeaderModal from '../../../components/HeaderModal';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { fetchBanks } from '../../../dao/fetchAPI'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'

function BankScreen({ navigation, route }) {
    const banks = fetchBanks();
    const conta = route.params.conta
    return (
        <View>
            <HeaderModal
                onClickHide={() => navigation.navigate("FullName")}
            />
            <Text style={styles.textHeader}>Selecione o banco</Text>
            <FlatList
                style={styles.containerFlatList}
                refreshControl={console.log("Atualizado")}
                onRefresh={() => { console.log("Atualizado") }}
                refreshing={false}
                data={banks}
                keyExtractor={(item) => item.numeroBanco.toString()}
                renderItem={({ item }) =>
                    <TouchableOpacity
                        style={styles.containerItems}
                        onPress={() => {
                            conta.banco = item;
                            navigation.navigate("NumberAgencyScreen", {conta: conta})
                        }}
                        >
                        <View>
                            <Text style={styles.textBank}>{item.nome}</Text>
                            <Text style={styles.textNumberBank}>{item.numeroBanco}</Text>
                        </View>
                        <View>
                            <Icon name="keyboard-arrow-right" size={20} />
                        </View>
                    </TouchableOpacity>

                }
            >
            </FlatList>
        </View>
    )
}

export default BankScreen;