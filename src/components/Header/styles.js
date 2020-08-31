import { StyleSheet, StatusBar } from "react-native"
import {highLightsColor} from '../../../res/colors'

const styles = StyleSheet.create({
    containerHeader:{
        marginTop: /* StatusBar.currentHeight + */40,
        padding: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    iconSeta: {
        width: 20,
        height:20
    },
    textNameConta:{
        color: highLightsColor,
        fontSize: 20
    }
})

export default styles;