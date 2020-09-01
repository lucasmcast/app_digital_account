import React from 'react'
import HeaderAbstract from '../../components/HeaderAbstract'

function PaymentScreen({navigation}){
    return(
        <HeaderAbstract 
            onClickHide={() => navigation.navigate("Main")}
            title="Realizar Pagamento"
        />
    )
}

export default PaymentScreen;