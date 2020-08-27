import React from 'react'
import styles from './styles'
import { Text, Image, View, TouchableOpacity } from 'react-native'
import { icon_backScreen, icon_conta } from '../../../../../res/icon_card'

function HeaderDetailsModal(props) {
    return (
        <TouchableOpacity
            style={styles.containerIconHeaderModal}
            onPress={()=>{
                props.onClickHide()
            }}
        >
            <Image style={styles.icon_backScreen} source={icon_backScreen}></Image>
            <Image style={styles.icon_conta} source={icon_conta}></Image>
        </TouchableOpacity>
    )
}

export default HeaderDetailsModal;