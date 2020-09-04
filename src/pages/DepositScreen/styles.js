import { StyleSheet, Dimensions } from "react-native"
import {primaryColor} from '../../../res/colors'

const styles = StyleSheet.create({
   container:{
       flex: 1,
    justifyContent: "space-around"
   },
   containerButton:{
    flexDirection: "row",
    padding:20,
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: primaryColor,
    justifyContent: "space-between",
    height: "50%",
   },
   textContainer:{
       fontSize: 35,
       color: primaryColor
   },
   containerDeposit:{
       flex:1
   }
})

export default styles;