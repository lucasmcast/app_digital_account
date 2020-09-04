import React from 'react'
import { View, KeyboardAvoidingView, Share } from 'react-native';
import HeaderAbstract from '../../../components/HeaderAbstract';
import Button from '../../../components/Button';
import ItemConfirm from './ItemConfirm';
import styles from './styles';

function ReceiptPayment({ navigation, route }) {
    const value = route.params.value

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    `Realizado Pagamento no valor de R$${value},\n para Super Mercado Ferreira`,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    navigation.navigate("Main")
                } else {
                    console.log("Fechou")
                }
            } else if (result.action === Share.dismissedAction) {

            }
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <KeyboardAvoidingView
            ehavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{ flexGrow: 1 }}
        >
            <View style={styles.containerReceipt}>
                <HeaderAbstract
                    onClickHide={() => navigation.navigate("Main")}
                    title="Comprovante"
                />



                <View style={styles.containerInfo}>
                    <ItemConfirm icon="account" text={"Super Mercado Ferreira"}></ItemConfirm>
                    <ItemConfirm icon="cash" text={`R$ ${value}`}></ItemConfirm>
                </View>
                <Button
                    name="Compartilhar"
                    onClick={() => onShare()}
                >

                </Button>

            </View>
        </KeyboardAvoidingView >
    )
}

export default ReceiptPayment;