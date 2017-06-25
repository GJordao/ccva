import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
        height: 50,
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
    }
});

export default class Price extends Component {
    render() {
        const data = this.props.data;
        return (
            <View>
                <View style={styles.table}>
                    {data.map((item, index) => {
                        return (
                            <View key={index} style={[styles.tableRow, {
                                borderTopWidth: index !== 0 ? 1 : 0
                            }]}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.price}>{item.price}</Text>
                            </View>
                        );
                    })}
                </View>
            </View>
        );
    }
}