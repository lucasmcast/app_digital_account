import React from 'react'
import styles from './styles'
import { Image, TouchableOpacity } from 'react-native'
import { icon_backScreen } from '../../../res/icon_card'
import { highLightsColor } from '../../../res/colors'
import Icon from 'react-native-vector-icons/MaterialIcons'

function HeaderModal(props) {
    return (
        <TouchableOpacity
            activeOpacity={1}
            style={
                [styles.containerIconHeaderModal,
                props.color ? { backgroundColor: props.color } : { backgroundColor: highLightsColor }]
            }
            onPress={() => {
                props.onClickHide()
            }}
        >
            <Icon name="arrow-back" size={30} color={props.color ? highLightsColor: "black"}/>
            <Image style={styles.iconHeader} source={props.icon ? props.icon : ""}></Image>
        </TouchableOpacity>
    )
}

export default HeaderModal;