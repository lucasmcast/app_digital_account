import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Switch } from 'react-native'
import styles from './styles'
import { login } from '../../../../res/data'


function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    function validateUser() {
        if (login.email === email) {
            if (login.password === password) {
                console.log("Usuario autenticado")
                props.onPress()
            } else {
                alert("Autenticação invalida")
            }
        } else {
            alert("Autenticação invalida")
        }
    }

    return (
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
            <View style={styles.containerButtons}>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#000000" : "#f4f3f4"}
                    ios_backgroundColor="red"
                    value={isEnabled}
                    onValueChange={toggleSwitch}
                />
                <Text>Manter Conectado</Text>
                <TouchableOpacity
                    style={styles.buttonLogin}
                    onPress={() => {
                        validateUser()
                    }}
                >
                    <Text style={{ color: "#FFF", fontSize: 18, fontWeight: "bold" }}>Login</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Login;