import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './styles'
import { HeaderCard } from './HeaderCard'
import { ContentCard } from './ContentCard'
import { FooterCard } from './FooterCard'
import DetailsModal from './DetailsModal/DetailsModal'
import { Animated } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import {formatMoney} from '../../utils'

function CardAccount({ dataAccount }) {
    let offset = 0;
    const translateY = new Animated.Value(0)

    function onHandlerStateChange(event) {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            let opened = false;
            const { translationY } = event.nativeEvent;

            offset += translationY;

            if (translationY >= 100) {
                opened = true;
            } else {
                translateY.setValue(offset);
                translateY.setOffset(0);
                offset = 0;
            }

            Animated.timing(translateY, {
                toValue: opened ? 380 : 0,
                duration: 200,
                useNativeDriver: true,
            }).start(() => {
                offset = opened ? 380 : 0;
                translateY.setOffset(offset);
                translateY.setValue(0);
            });
        }
    }

    const animatedEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translationY: translateY,
                },
            },
        ],
        { useNativeDriver: true },
    )

    const [modalVisible, setModalVisible] = useState(false)
    return (
        <PanGestureHandler
            onGestureEvent={animatedEvent}
            onHandlerStateChange={onHandlerStateChange}
        >
            <Animated.View
                style={[styles.containerCardSaldo,
                {
                    transform: [{
                        translateY: translateY.interpolate({
                            inputRange: [-350, 0, 300],
                            outputRange: [-50, 0, 300],
                            extrapolate: 'clamp',
                        }),
                    }],
                },]
                }
            >
                <DetailsModal
                    account={dataAccount}
                    onClickHide={event => { setModalVisible(false) }}
                    modalVisible={modalVisible}>
                </DetailsModal>
                <HeaderCard></HeaderCard>
                <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                >
                    <ContentCard item={formatMoney(dataAccount.saldoDisponivel)}></ContentCard>
                </TouchableOpacity>
                <FooterCard item={dataAccount.lastTransaction}></FooterCard>

            </Animated.View>
        </PanGestureHandler>
    )
}

const mapStateToProps = (state) => {
    return (
        { dataAccount: state.rootDataAccount.dataAccount }
    )
}

export default connect(mapStateToProps)(CardAccount);