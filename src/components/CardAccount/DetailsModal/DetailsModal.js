import React from 'react'
import {
    Alert,
    View,
    Modal,
    Text,
    FlatList
} from 'react-native'

import styles from './styles'
import HeaderDetailsModal from './HeaderDetailsModal';
import { conta } from '../../../../res/data'
import CardExtract from './CardExtract';

function DetailsModal(props) {
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={props.modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={{ flex: 1 }}>
                    <HeaderDetailsModal onClickHide={props.onClickHide} />

                    <FlatList
                        data={conta.extratos}
                        keyExtractor={(item) => item.id}
                        ListHeaderComponent={
                            <View style={styles.modalView}>
                                <Text style={{color: "#FFFFFF"}}>Saldo disponível</Text>
                                <Text style={styles.textStyle}>R$ {conta.saldoDisponivel}</Text>
                            </View>
                        }
                        renderItem={({ item }) =>
                            <CardExtract item={item} />
                        }
                    />
                </View>
            </Modal>
        </View>
    )

}

export default DetailsModal;