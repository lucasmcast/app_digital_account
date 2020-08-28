import { StyleSheet } from "react-native"
import {primaryColor, highLightsColor} from '../../../../res/colors'

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: primaryColor,
        borderRadius: 20,
        padding: 35,
      },
      textStyle: {
        fontSize: 40,
        color: highLightsColor
      },
      modalText: {

      }
});

export default styles;