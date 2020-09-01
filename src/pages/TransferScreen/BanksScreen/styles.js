import { StyleSheet } from "react-native"
import {primaryColor, textColor} from '../../../../res/colors'

const styles = StyleSheet.create({
    textHeader:{
        fontSize: 30,
        textAlign: "center",
        padding: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        color: textColor
    },
    containerFlatList:{
        height: "100%"
    },
    containerItems:{
        padding:20,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    textBank:{
        fontSize: 20
    },
    textNumberBank:{
        color:primaryColor,
        fontWeight: "bold"
    }
});

export default styles;