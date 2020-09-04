import React from 'react'
import { View, Text, Share } from 'react-native';
import HeaderAbstract from '../../../components/HeaderAbstract';
import Button from '../../../components/Button';
import ItemConfirm from './ItemConfirm';
import styles from './styles';

function ConfirmTransfer({ navigation, route }) {
    const conta = route.params.conta
    const value = route.params.value

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    `Realizado Pagamento no valor de R$${value},\n para conta ${conta.numeroConta}, em nome de ${conta.nomeFavorecido}`,
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
        <View style={styles.container}>
            <HeaderAbstract 
                onClickHide={() => navigation.navigate("Main")}
                title="Comprovante"
            />
            <View style={styles.containerInfo}>
                <ItemConfirm icon="bank" text={conta.numeroConta}></ItemConfirm>
                <ItemConfirm icon="bank" text={conta.agencia}></ItemConfirm>
                <ItemConfirm icon="account" text={conta.nomeFavorecido}></ItemConfirm>
                <ItemConfirm icon="format-list-numbered" text={conta.numberRegister}></ItemConfirm>
                <ItemConfirm icon="cash" text={`R$ ${value}`}></ItemConfirm>
            </View>
            <Button 
                name="Compartilhar"
                onClick={() => onShare()}    
            >

            </Button>
        </View>
    )
}

export default ConfirmTransfer;