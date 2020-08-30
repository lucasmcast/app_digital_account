import React, { useState } from 'react'
import {TouchableOpacity } from 'react-native'
import styles from './styles'
import { HeaderCard } from './HeaderCard'
import { ContentCard } from './ContentCard'
import { FooterCard } from './FooterCard'
import DetailsModal from './DetailsModal/DetailsModal'
import { conta } from '../../../res/data'
import { Animated } from 'react-native'

function CardAccount(props) {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <Animated.View style={styles.containerCardSaldo}>
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

        </Animated.View>
    )
}

export default CardAccount;