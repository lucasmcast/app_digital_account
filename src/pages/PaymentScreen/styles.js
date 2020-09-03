import { StyleSheet } from "react-native"
import { primaryColor } from '../../../res/colors'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        alignContent: "center",
        justifyContent: "center"
    },
    containerBarCode: {
        flexDirection: "row",
        width:"100%",
        justifyContent: "space-between"
    },
    inputsContainer: {
        width: "80%",
        backgroundColor: 'white',
        fontSize: 20,
        padding: 10,
        marginBottom: 10
    },
    imageBarCode: {
        width: 60,
        height: 50,
        borderWidth: StyleSheet.hairlineWidth,
        elevation: 25,
        borderRadius: 10
    }
});

export default styles;