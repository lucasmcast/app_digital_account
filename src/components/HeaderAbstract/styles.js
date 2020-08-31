import { StyleSheet, StatusBar } from "react-native"
import { primaryColor, secondColor, highLightsColor } from '../../../res/colors'

const styles = StyleSheet.create({
    container: {
        backgroundColor: primaryColor,
        justifyContent: "center",
        alignItems: "center"
    },
    textHeader: {
        fontSize: 30,
        textAlign: "center",
        color: highLightsColor
    },
    containerText: {
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
        paddingTop: 0,

    },
    containerIcon: {
        backgroundColor: secondColor,
        width: 50,
        height: 50,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "80%"
    }
})

export default styles;