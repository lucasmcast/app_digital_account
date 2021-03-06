import { StyleSheet } from "react-native"
import {
    cardLoginColor,
    secondColor,
    inputCardLoginColor,
    highLightsColor
} from '../../../../res/colors'
import { ceil } from "react-native-reanimated";

const styles = StyleSheet.create({
    containerLogin: {
        borderRadius: 5,
        width: "90%",
        borderRadius: 20,
        opacity: 0.5,
        backgroundColor: cardLoginColor,
        padding: 20,

    },
    inputLogin: {
        margin: 10,
        width: "90%",
        height: 40,
        alignSelf: "center",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomWidth: 5,
        borderBottomColor: secondColor,
        backgroundColor: inputCardLoginColor,
        color: highLightsColor,
        padding: 10,
        fontSize: 18,
    },
    textLogin: {
        color: "rgba(0,0,0,0.9)",
        marginLeft: 10,
        fontSize: 25,
    },
    buttonLogin: {
        width: 100,
        height: 40,
        backgroundColor: "rgba(0,0,0,1)",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    containerButtons: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 10
    }

})

export default styles;