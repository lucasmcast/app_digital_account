import React from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import styles from './styles'

function Login(props){
    return(
        <View style={styles.containerLogin}>
            <Text style={styles.textLogin}>Email</Text>
            <TextInput style={styles.inputLogin}></TextInput>
            <Text style={styles.textLogin}>Senha:</Text>
            <TextInput secureTextEntry={true} style={styles.inputLogin}></TextInput>
            <TouchableOpacity 
                style={styles.buttonLogin}
            >
                <Text style={{color: "#FFF", fontSize: 18, fontWeight: "bold"}}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login;