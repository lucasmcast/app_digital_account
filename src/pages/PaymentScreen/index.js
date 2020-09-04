import React, { Fragment, useState } from 'react'
import HeaderAbstract from '../../components/HeaderAbstract'
import { View, Text, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { Alert } from "react-native";
import { TextInputMask } from 'react-native-masked-text'
import { icon_barCode } from '../../../res/icon_card'
import styles from './styles'
import Button from '../../components/Button'
import {updateBalance} from '../../redux/actions'
import {connect} from 'react-redux'
import {formatMoney} from '../../utils'

function PaymentScreen({ navigation, saldo, updateBalance }) {
    const [barCode, setBarCode] = useState('')
    const [valueInput, setValueInput] = useState('')
    const [errorInput, setErrorInput] = useState(false)
    const [moneyField, setMoneyField] = useState(0)

    let numberValue = 0

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
                        <Text>Código de Barras</Text>
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
                            onChangeText={(text)=> {
                                numberValue = text.replace("R", "")
                                    .replace("$", "")
                                    .replace(".", "")
                                    .replace('.', "")
                                    .replace(",", ".");


                                if (saldo >= numberValue) {
                                    setMoneyField(numberValue)
                                    setErrorInput(false)
                                    setValueInput(text)

                                } else {
                                    setErrorInput(true)
                                }
                                
                            }}
                            value={valueInput}
                            style={{
                                width:"100%" ,
                                backgroundColor: "white", 
                                padding:10, fontSize: 20,
                            }} type="money"
                        />
                        {errorInput ? <Text style={{ color: "red" }}>Saldo Insuficiente</Text> : <Text></Text>}
                        <Text>Saldo disponível: R$ {formatMoney(saldo)}</Text>
                    </View>

                </View>
                <Button 
                    onClick={()=> {
                        if(moneyField !== 0 & barCode !== ''){
                            updateBalance(1, moneyField)
                            navigation.navigate("Main")
                        }else if(moneyField === 0){
                            Alert.alert("Digite um valor válido")   
                        }else if(barCode ===''){
                            Alert.alert("Código de barras esta me branco") 
                        }
                    }}
                    disabled={errorInput} 
                    name="Confirmar">
                    
                </Button>

            </KeyboardAvoidingView>
        </Fragment>
    )
}
const mapStateToProps= (state) => {
    return(
        {saldo: state.rootDataAccount.dataAccount.saldoDisponivel}
    )
}

export default connect(mapStateToProps, {updateBalance})(PaymentScreen);