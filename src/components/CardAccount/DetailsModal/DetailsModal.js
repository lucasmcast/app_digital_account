import React from 'react'
import {
    Alert,
    View,
    Modal,
    Text,
    FlatList
} from 'react-native'

import styles from './styles'
import { conta } from '../../../../res/data'
import CardExtract from './CardExtract';
import {textSaldoDisponivel} from '../../../../res/colors'
import HeaderModal from '../../HeaderModal';
import {icon_conta} from '../../../../res/icon_card'

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
                   <HeaderModal onClickHide={props.onClickHide} icon={icon_conta}/>
                    <FlatList
                        refreshControl={console.log("Atualizado")}
                        onRefresh={()=>{console.log("Atualizado")}}
                        refreshing={false}
                        data={conta.extratos}
                        keyExtractor={(item) => item.id}
                        ListHeaderComponent={
                            <View style={styles.modalView}>
                                <Text style={{color: textSaldoDisponivel}}>Saldo disponível</Text>
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