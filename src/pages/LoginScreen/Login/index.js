import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import styles from './styles'
import {login} from '../../../../res/data'


function Login(props){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function validateUser(){
        if(login.email === email){
            if(login.password === password){
                console.log("Usuario autenticado")
                props.onPress()
            }else{
                alert("Autenticação invalida")
            }
        }else{
            alert("Autenticação invalida")
        }
    }

    return(
        <View style={styles.containerLogin}>
            <Text style={styles.textLogin}>Email</Text>
            <TextInput 
                style={styles.inputLogin}
                onChangeText={(text) => setEmail(text)}
            />
            <Text style={styles.textLogin}>Senha:</Text>
            <TextInput 
                secureTextEntry={true} 
                style={styles.inputLogin}
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity 
                style={styles.buttonLogin}
                onPress={() => {
                    validateUser()
                }}
            >
                <Text style={{color: "#FFF", fontSize: 18, fontWeight: "bold"}}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login;