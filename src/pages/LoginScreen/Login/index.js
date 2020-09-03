import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Switch } from 'react-native'
import styles from './styles'
import { fetchLogin } from '../../../dao/fetchAPI'
import { addLogin } from '../../../../src/redux/actions'
import { connect } from 'react-redux'

function LoginContainer(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isEnabled, setIsEnabled] = useState(false);


    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    function validateUser(login) {
        if (login !== "Error") {
            props.onPress(login)
            props.addLogin(login)
        } else {
            alert("Erro no Login")
        }
    }

    return (
        <View style={styles.containerLogin}>
            <Text style={styles.textLogin}>Email</Text>
            <TextInput
                style={styles.inputLogin}
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <Text style={styles.textLogin}>Senha:</Text>
            <TextInput
                secureTextEntry={true}
                style={styles.inputLogin}
                onChangeText={(text) => setPassword(text)}
                value={password}
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
                        let login = fetchLogin(email, password);
                        validateUser(login)
                        setEmail("")
                        setPassword("")
                    }}
                >
                    <Text style={{ color: "#FFF", fontSize: 18, fontWeight: "bold" }}>Login</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default connect(null, { addLogin })(LoginContainer);