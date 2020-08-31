import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    containerCardSaldo: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        height: "100%",
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
        elevation: 26,
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 9999,
    }

});

export default styles;