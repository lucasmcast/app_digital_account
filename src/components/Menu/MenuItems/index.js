import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native'
import styles from './styles'

function MenuItems(){
    return(
        <View>
            <TouchableOpacity>
                <Image></Image>
                <Text>Conta</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image></Image>
                <Text>Conta</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image></Image>
                <Text>Conta</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image></Image>
                <Text>Conta</Text>
            </TouchableOpacity>
        </View>
    )

}

export default MenuItems;