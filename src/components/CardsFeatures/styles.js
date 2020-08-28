import { StyleSheet } from "react-native"
import {secondColor, highLightsColor} from '../../../res/colors'

const styles = StyleSheet.create({
    containerCardFeatures: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 40
    },
    containerItemsCards: {
        alignItems: "center",
        margin: 10,
        borderRadius: 10,
        borderRightWidth: 1,
        borderColor: highLightsColor,
        padding: 5,
        backgroundColor: secondColor,
        width: 80,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        elevation: 25
    },
    
    imageItemsCards: {
        width: 30,
        height: 30,
        marginBottom: 5
    },

    textItemsCards: {
        color: highLightsColor,
        fontSize: 10
    }
});

export default styles;