import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    containerCardExtract: {
        flexDirection: "row",
        justifyContent: "space-between",
       /*  alignItems: "center", */
        height: 100,
    },
    lineStart:{
        width: 1,
        height: "100%",
        backgroundColor: "#000000",
    },
    containerDetails:{
        padding:10,
        flexGrow:1
    },
    containerStart:{
        backgroundColor: "white",
        height: "100%",
        alignItems: "center",
        paddingRight: 20,
        paddingLeft:20
    },
    iconStatus:{
        width:30,
        height:30
    },
    textData:{
        paddingRight: 10,
    },
    textStatus:{
        color: "gray"
    }
});

export default styles;