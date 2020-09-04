import React, { Fragment } from 'react'
import {View, TouchableOpacity, Text} from 'react-native'
import HeaderAbstract from '../../components/HeaderAbstract'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'
import {primaryColor} from '../../../res/colors'

function DepositScreen({ navigation }) {
    return (
        <Fragment>
            <HeaderAbstract
                onClickHide={() => navigation.navigate("Main")}
                title="Realizar Depósito"
            />
            <View style={styles.container}>
                <TouchableOpacity 
                    onPress={()=> navigation.navigate("AccountDetails")}
                    style={styles.containerButton}
                
                >
                    <Text style={styles.textContainer}>Dados da Conta</Text>
                    <Icon name="keyboard-arrow-right" color={primaryColor} size={30} />
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={()=> navigation.navigate("ToDeposit")}
                    style={styles.containerButton}>
                    <Text style={styles.textContainer}>Efetuar Depósito</Text>
                    <Icon name="keyboard-arrow-right" color={primaryColor} size={30} />
                </TouchableOpacity>
            </View>
        </Fragment>

    )
}

export default DepositScreen;