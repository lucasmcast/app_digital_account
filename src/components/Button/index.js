import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import styles from './styles'

function Button(props){
    return(
        <TouchableOpacity
            activeOpacity={props.disabled ? 1 : 0.3} 
            /* onPress={!disabled && onPress}  */
            style={styles.containerButton}
            onPress={
                props.disabled ? () => {}
                : props.onClick 
                ? props.onClick 
                : () => console.log("clicou")}
            >
            <Text style={
                [styles.textButton, 
                props.disabled ? {color: "gray"}:{}]}>{props.name ? props.name : "Button"}
            </Text>
        </TouchableOpacity>
    )
}

export default Button;