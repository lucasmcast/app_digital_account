import { StyleSheet } from "react-native"
import {textSaldoDisponivel} from '../../../../res/colors'

const styles = StyleSheet.create({
    containerContentCard:{
        margin: 30,
        alignSelf: "center"
    },
    textSaldo:{
        fontSize: 40
    },
    textDescricao:{
        color: textSaldoDisponivel
    }
});

export default styles;