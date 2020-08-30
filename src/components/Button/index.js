import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import styles from './styles'

function Button(props){
    return(
        <TouchableOpacity 
            style={styles.containerButton}
            onPress={props.onClick ? props.onClick : () => console.log("Clicou")}
            >
            <Text style={styles.textButton}>{props.name ? props.name : "Button"}</Text>
        </TouchableOpacity>
    )
}

export default Button;