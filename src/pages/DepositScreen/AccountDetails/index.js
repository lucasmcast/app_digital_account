import React from 'react'
import { View, Text } from 'react-native';
import HeaderAbstract from '../../../components/HeaderAbstract';
import Button from '../../../components/Button';
import styles from './styles';
import Item from './Item';
import {connect} from 'react-redux'

function AccountDetails({ navigation, dataAccount }) {
    console.log(dataAccount)
    return (
        <View style={styles.container}>
            <HeaderAbstract 
                onClickHide={() => navigation.goBack()}
                title="Dados da Conta"
            />
            <View style={styles.containerInfo}>
                <Item icon="bank" text={dataAccount.numeroConta}/>
                <Item icon="account" text={dataAccount.nomeCompleto}/>
            </View>
            <Button 
                name="Voltar"
                onClick={() => navigation.goBack()}    
            >

            </Button>
        </View>
    )
}
const mapStateToProps = (state) => {
    return(
        {dataAccount : state.rootDataAccount.dataAccount}
    )
}
export default connect(mapStateToProps)(AccountDetails);