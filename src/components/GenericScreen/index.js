import React, { Fragment, useState } from 'react'
import {
    View,
} from 'react-native'

import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { primaryColor } from '../../../res/colors'
import { Platform, Text, KeyboardAvoidingView, TextInput } from 'react-native'
import Button from '../Button'
import HeaderModal from '../HeaderModal'
import { TextInputMask } from 'react-native-masked-text'
import { toTitleCase, formatMoney } from '../../utils'

function GenericScreen(props) {
    const [inputText, setInputText] = useState("")
    const [typeNumberRegister, setTypeNumberRegister] = useState("cpf")
    const [errorInput, setErrorInput] = useState(false)
    const [moneyField, setMoneyField] = useState(0)
    let numberValue = 0

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{ flexGrow: 1 }}
        >

            <Fragment>
                <HeaderModal onClickHide={props.onClickHide}></HeaderModal>
                <View style={styles.container}>
                    <Text style={styles.textHeader}>{props.textHeader}</Text>
                    {props.variant === "money"

                        ?
                        <TextInputMask
                            type={'money'}
                            autoFocus={true}
                            style={styles.textInput}
                            value={inputText}
                            onChangeText={(text) => {
                                numberValue = text.replace("R", "")
                                    .replace("$", "")
                                    .replace(".", "")
                                    .replace('.', "")
                                    .replace(",", ".");


                                if (props.balance >= numberValue) {
                                    setMoneyField(numberValue)
                                    setErrorInput(false)
                                    setInputText(text)

                                } else {
                                    setErrorInput(true)
                                }


                            }}
                        />
                        : props.variant === 'numberRegister'
                            ?
                            <TextInputMask
                                type={typeNumberRegister}
                                autoFocus={true}
                                style={styles.textInput}
                                value={inputText}
                                onChangeText={(text) => {
                                    if (text.length < 14) {
                                        setInputText(text)
                                        setTypeNumberRegister('cpf')
                                    } else {
                                        setTypeNumberRegister('cnpj')
                                        setInputText(text)
                                    }

                                }}
                            />
                            : props.variant === "agencyNumber"
                                ?
                                <TextInputMask
                                    type={'custom'}
                                    autoFocus={true}
                                    style={styles.textInput}
                                    value={inputText}
                                    options={{
                                        mask: '9999'
                                    }}
                                    onChangeText={(text) => {
                                        setInputText(toTitleCase(text))
                                    }}
                                />
                                : props.variant === "accountNumber"
                                    ?
                                    <TextInputMask
                                        type={'custom'}
                                        autoFocus={true}
                                        style={styles.textInput}
                                        value={inputText}
                                        options={{
                                            /**
                                             * mask: (String | required | default '')
                                             * the mask pattern
                                             * 9 - accept digit.
                                             * A - accept alpha.
                                             * S - accept alphanumeric.
                                             * * - accept all, EXCEPT white space.
                                            */
                                            mask: '99.9999-9'
                                        }}
                                        onChangeText={(text) => {
                                            setInputText(toTitleCase(text))
                                        }}
                                    />
                                    :
                                    <TextInput
                                        autoFocus={true}
                                        style={styles.textInput}
                                        value={inputText}
                                        onChangeText={(text) => {
                                            setInputText(toTitleCase(text))
                                        }}
                                    />
                    }
                    {errorInput ? <Text style={{ color: "red" }}>Saldo Insuficiente</Text> : <Text></Text>}
                    {props.variant === 'money' ?
                        <Text>Saldo disponível: R$ {formatMoney(props.balance)}</Text> :
                        <Text />
                    }

                </View>

                <Button
                    name={props.nameButton}
                    disabled={errorInput}
                    onClick={
                        props.variant === 'money' ?
                            props.onClickButton(moneyField) :
                            props.onClickButton ?
                                props.onClickButton(inputText) :
                                () => console.log(inputText)}
                    style={styles.button} />
            </Fragment>
        </KeyboardAvoidingView>
    )

}

export default GenericScreen;