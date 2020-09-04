import React from 'react'
import { View, Text } from 'react-native';
import HeaderAbstract from '../../components/HeaderAbstract';
import Button from '../../components/Button';
import styles from './styles';

function ToDeposit({ navigation}) {

    return (
        <View style={styles.container}>
            <HeaderAbstract 
                onClickHide={() => navigation.goBack()}
                title="Efetuar Depósito"
            />
            <View style={styles.containerDeposit}>
            </View>
            <Button 
                name="Voltar"
                onClick={() => navigation.goBack()}    
            >

            </Button>
        </View>
    )
}

export default ToDeposit;