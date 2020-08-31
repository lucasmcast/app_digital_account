import { StyleSheet, StatusBar } from "react-native"
import {highLightsColor} from '../../../../res/colors'

const styles = StyleSheet.create({
    containerInfo:{
        alignSelf: "center",
    },
    containerItemMenu:{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: highLightsColor
    },
    imagePerfil:{
        width: 60,
        height:60,
        borderRadius: 30
    },
    textItem:{
        color: highLightsColor,
        margin: 10
    },
    buttonSair:{
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: highLightsColor,
        alignItems: "center",
        margin: 10,
        padding: 10
    },
    textButton:{
        color: highLightsColor
    }
})

export default styles;