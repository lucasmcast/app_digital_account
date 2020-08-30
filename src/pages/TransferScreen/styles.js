import { StyleSheet } from "react-native"
import {textColor} from '../../../res/colors'
const styles = StyleSheet.create({
    containerHeaderNewContact:{
        flexDirection: "row",padding: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "space-around",
        alignItems: "center"
    },
    containerNewContact:{
        flexDirection: "row",
        alignItems: "center",
        flexGrow:1
        
    },
    iconAddPerson:{
        padding: 10
    },
    textAddNewContact:{
        color: textColor,
        fontSize: 15
    }
});

export default styles;