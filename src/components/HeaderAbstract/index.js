import React, { Fragment } from 'react'
import { View, Text } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderModal from '../HeaderModal';
import { primaryColor } from '../../../res/colors'

function HeaderAbstract(props) {
    return (
        <Fragment>
            <HeaderModal onClickHide={props.onClickHide} color={primaryColor}></HeaderModal>
            <View style={styles.container}>

                <View style={styles.containerText}>
                    <Text style={styles.textHeader}>Confirmar Transferencia</Text>
                </View>

                <View style={styles.containerIcon}>
                    <Icon name="bank-transfer" size={40} color="#FFF" />
                </View>
            </View>
        </Fragment>
    )
}

export default HeaderAbstract;