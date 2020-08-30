import React from 'react'
import styles from './styles'
import {Image, TouchableOpacity } from 'react-native'
import { icon_backScreen} from '../../../res/icon_card'

function HeaderModal(props) {
    return (
        <TouchableOpacity
            style={styles.containerIconHeaderModal}
            onPress={()=>{
                props.onClickHide()
            }}
        >
            <Image style={styles.iconBackScreen} source={icon_backScreen}></Image>
            <Image style={styles.iconHeader} source={props.icon ? props.icon : ""}></Image>
        </TouchableOpacity>
    )
}

export default HeaderModal;