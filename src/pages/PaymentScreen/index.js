import React, { Fragment, useState } from 'react'
import HeaderAbstract from '../../components/HeaderAbstract'
import { View, Text, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TextInputMask } from 'react-native-masked-text'
import { icon_barCode } from '../../../res/icon_card'
import styles from './styles'
import Button from '../../components/Button'

function PaymentScreen({ navigation }) {
    const [barCode, setBarCode] = useState('')
    const [valueInput, setValueInput] = useState('')

    return (
        <Fragment>
            <HeaderAbstract
                onClickHide={() => navigation.navigate("Main")}
                title="Realizar Pagamento"
            />
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={{ flexGrow: 1 }}
            >
                <View style={styles.container}>
                    <View >
                        <Text>Codigo de Barras</Text>
                        <View style={styles.containerBarCode}>
                            <TextInputMask 
                                style={styles.inputsContainer} 
                                type="custom" 
                                value={barCode}
                                options={{
                                    mask: '9999.9999.999999 99999 99'
                                }}
                                onChangeText={(text) => setBarCode(text)}
                            />
                            <TouchableOpacity>
                                <Image style={styles.imageBarCode} source={icon_barCode} />
                            </TouchableOpacity>
                        </View>
                        <Text>Valor do pagamento:</Text>
                        <TextInputMask 
                            onChangeText={(text)=> setValueInput(text)}
                            value={valueInput}
                            style={{
                                width:"100%" ,
                                backgroundColor: "white", 
                                padding:10, fontSize: 20,
                            }} type="money"
                        />
                    </View>

                </View>
                <Button name="Confirmar"></Button>

            </KeyboardAvoidingView>
        </Fragment>
    )
}

export default PaymentScreen;