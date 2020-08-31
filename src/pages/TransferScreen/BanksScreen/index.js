import React from 'react'
import { View } from 'react-native';
import HeaderModal from '../../../components/HeaderModal';
import { FlatList } from 'react-native-gesture-handler';
import { } from '../../../../res/data'

function BankScreen(props) {
    return (
        <View>
            <HeaderModal></HeaderModal>
            <FlatList

            >

            </FlatList>
        </View>
    )
}

export default BankScreen;