import { StyleSheet, Dimensions } from "react-native"

const styles = StyleSheet.create({
    containerLogin:{
        width: "100%",
        flexGrow:1,
        justifyContent: "space-around",
        backgroundColor: "#e63888",
        alignItems: "center"
    },  
    imageWoman:{
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,
        top: 0,
        left: 0,
        opacity: 0.7,
        position: "absolute",
        
    }
})

export default styles;