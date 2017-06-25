import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// Moment
import Moment from 'moment';
// GLOBALS
import COLORS from './../../GLOBALS/colors';

const styles = StyleSheet.create({
    table: {
        borderColor: COLORS.priceTableBorderColor,
        borderRadius: 3,
        borderWidth: 1,
    },
    tableRow: {
        alignItems: 'center',
        borderColor: COLORS.priceTableBorderColor,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    name: {
        flex: 3,
        fontSize: 19,
        marginLeft: 20,
    },
    price: {
        flex: 1,
        fontSize: 19,
        marginRight: 20,
    },
    title: {
        borderBottomWidth: 1,
        borderColor: COLORS.priceTableBorderColor,
        borderRightWidth: 1,
        flex: 1,
        fontSize: 20,
        padding: 5
    }
});

export default class Schedule extends Component {
    render() {
        const data = this.props.data;
        return (
            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <Text style={styles.title}>Dia</Text>
                    <Text style={styles.title}>Abertura</Text>
                    <Text style={styles.title}>Fecho</Text>
                </View>
                {data.map((scheduleDay) => {
                    return (
                        <View key={scheduleDay.id} style={styles.tableRow}>
                            <Text style={styles.title}>{scheduleDay.day}</Text>
                            <Text style={styles.title}>{
                                Moment(scheduleDay.opening_hours).format('HH:mm')
                            }</Text>
                            <Text style={styles.title}>{
                                Moment(scheduleDay.closing_hours).format('HH:mm')
                            }</Text>
                        </View>
                    );
                })}
            </View>
        );
    }
}