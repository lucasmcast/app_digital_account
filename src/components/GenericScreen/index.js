import React, { Fragment, useState } from 'react'
import {
    View,
} from 'react-native'

import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { primaryColor } from '../../../res/colors'
import { TextInput, Text } from 'react-native'
import Button from '../Button'
import HeaderModal from '../HeaderModal'
function GenericScreen(props) {
    const [inputText, setInputText] = useState("")
    return (
        <Fragment>
            <HeaderModal onClickHide={props.onClickHide}></HeaderModal>
            <View style={styles.container}>
                <Text style={styles.textHeader}>{props.textHeader}</Text>
                <TextInput 
                    autoFocus={true} 
                    style={styles.textInput}
                    value={inputText}
                    onChangeText={(text)=> setInputText(text)}
                />
            </View>
            <Button
                name={props.nameButton} 
                onClick={
                    props.onClickButton ? 
                    props.onClickButton(inputText) : 
                    ()=>console.log(inputText)}
                style={styles.button}/>
        </Fragment>
    )

}

export default GenericScreen;