import { StyleSheet } from "react-native"
import {highLightsColor} from '../../../../res/colors'

const styles = StyleSheet.create({
    continerWelcomerLogin:{
        width: "55%",
        alignSelf: "flex-end",
        marginTop: 50,
        flex: 1
    },
    textWelcome:{
        fontSize: 20,
        fontWeight: "bold",
        color: highLightsColor
    },
    textMsg:{
        fontSize: 28,
        
    }
})

export default styles;