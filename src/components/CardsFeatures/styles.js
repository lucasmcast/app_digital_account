import { StyleSheet } from "react-native"
import {secondColor, highLightsColor} from '../../../res/colors'

const styles = StyleSheet.create({
    containerCardFeatures: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: 15,
        marginTop: 30,
        marginBottom: 40,
    },
    containerItemsCards: {
        flex: 1,
        alignItems: "center",
        margin: 10,
        borderRadius: 10,
        borderRightWidth: 1,
        borderColor: highLightsColor,
        padding: 5,
        backgroundColor: secondColor,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        elevation: 25,
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