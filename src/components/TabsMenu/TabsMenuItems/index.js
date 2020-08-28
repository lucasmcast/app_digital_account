import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native'
import styles from './styles'

function TabsMenuItems(){
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

export default TabsMenuItems;