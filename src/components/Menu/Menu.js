import React from 'react';
import { ScrollView, View } from 'react-native'
import MenuItems from './MenuItems';
import styles from './styles'

function TabsMenu(props) {
    return (
        <View style={styles.containerMenu}>
            <MenuItems urlFoto={props.urlFoto} navigation={props.navigation}></MenuItems>
        </View>
    )
}

export default TabsMenu;