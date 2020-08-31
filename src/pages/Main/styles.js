import { StyleSheet } from "react-native"
import {primaryColor} from '../../../res/colors'

const styles = StyleSheet.create({
    containerMain:{
        backgroundColor: primaryColor,
        height: "100%"
    },
    containerContent:{
        flex:1,
        maxHeight: 400
    }
});

export default styles;