import { StyleSheet, Dimensions } from "react-native"

const styles = StyleSheet.create({
    containerFooter: {
        width: Dimensions.get("screen").width,
        height: 100,
        flex:1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    iconFooter:{
        width: 40,
        height: 40
    },

    cardFooter:{
        padding: 10,
        alignItems: "center",
        backgroundColor: "#F06292",
        borderRadius: 20,
        opacity: 0.8,
        width: "40%"
    },
    textFooter:{
        color: "#FFF"
    }
})


export default styles;