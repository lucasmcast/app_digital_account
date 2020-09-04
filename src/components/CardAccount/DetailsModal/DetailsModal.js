import React, { Fragment, useState, useEffect } from 'react'
import {
    Alert,
    View,
    Modal,
    Text,
    FlatList
} from 'react-native'

import styles from './styles'
import CardExtract from './CardExtract';
import { textSaldoDisponivel } from '../../../../res/colors'
import HeaderModal from '../../HeaderModal';
import { icon_conta } from '../../../../res/icon_card'
import { fetchExtractByAccountAndDate } from '../../../dao/fetchAPI'
import { formatMoney } from '../../../utils'
import Button from '../../Button'
import DateTimePicker from '@react-native-community/datetimepicker';

function DetailsModal(props) {
    const account = props.account
    const [extratos, setExtratos] = useState([])
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    useEffect(() =>{
        const readExtracts = (account, date) => {
            const extractApi = fetchExtractByAccountAndDate(account, date);
            console.log("Extract Api", extractApi)
            setExtratos(extractApi)
        }
        readExtracts(account.numeroConta, date)
    }, [date])

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={props.modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={{ flex: 1 }}>
                    <HeaderModal onClickHide={props.onClickHide} icon={icon_conta} />
                    <FlatList
                        refreshControl={console.log("Atualizado")}
                        onRefresh={() => { console.log("Atualizado") }}
                        refreshing={false}
                        data={extratos}
                        keyExtractor={(item) => item.id}
                        ListHeaderComponent={
                            <Fragment>
                                <View style={styles.modalView}>
                                    <Text style={{ color: textSaldoDisponivel }}>Saldo disponível</Text>
                                    <Text style={styles.textStyle}>R$ {formatMoney(account.saldoDisponivel)}</Text>
                                </View>
                                <Button
                                    name="Pesquisar por periodo"
                                    onClick={showDatepicker}
                                />
                                {show && (
                                    <DateTimePicker
                                        testID="dateTimePicker"
                                        value={date}
                                        mode={mode}
                                        is24Hour={true}
                                        display="calendar"
                                        onChange={onChange}
                                        textColor="red"
                                    />)
                                }

                            </Fragment>
                        }
                        renderItem={({ item }) =>
                            <CardExtract item={item} />
                        }
                    />
                </View>
            </Modal>
        </View>
    )

}

export default DetailsModal;