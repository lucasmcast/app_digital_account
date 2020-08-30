import { StyleSheet } from "react-native"
import {textColor} from '../../../../res/colors'

const styles = StyleSheet.create({
    container:{
        padding: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    textAccount:{
        fontSize: 20,
        color: textColor,
    }
});

export default styles;