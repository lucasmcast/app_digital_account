import { StyleSheet } from "react-native"
import {primaryColor, } from '../../../res/colors'
const styles = StyleSheet.create({
    containerButton:{
        width: "100%",
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: "#E0E0E0"
    },
    textButton:{
        color: primaryColor,
        fontWeight: "bold"
    }
});

export default styles;