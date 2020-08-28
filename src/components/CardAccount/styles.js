import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    containerCardSaldo:{
        flex:1,
        maxHeight: 400,
        zIndex:5,
        margin: 20,
        width: "90%",
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 24,
        position: "absolute",
        top:200,
        right:0,
        left:0,
    }
    
});

export default styles;