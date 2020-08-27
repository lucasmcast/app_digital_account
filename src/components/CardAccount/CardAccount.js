import React, { useState, Fragment } from 'react'
import { View, TouchableOpacity } from 'react-native'
import styles from './styles'
import { HeaderCard } from './HeaderCard'
import { ContentCard } from './ContentCard'
import { FooterCard } from './FooterCard'
import DetailsModal from './DetailsModal/DetailsModal'
import {conta} from '../../../res/data'

function CardAccount(props) {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <Fragment>
            <View style={styles.containerCardSaldo}>
                <DetailsModal
                    onClickHide={event => { setModalVisible(false) }}
                    modalVisible={modalVisible}>
                </DetailsModal>
                <HeaderCard></HeaderCard>
                <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                >
                    <ContentCard item={conta.saldoDisponivel}></ContentCard>
                </TouchableOpacity>
                <FooterCard item={conta.lastTransaction}></FooterCard>

            </View>
        </Fragment>
    )
}

export default CardAccount;