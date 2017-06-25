import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontSize: 15
    },
    textContainer: {
        flexDirection: 'row',
    },
    textTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

//TODO: Implement google maps integration
export default class Contacts extends Component {
    render() {
        const data = this.props.data;
        return (
            <View>
                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>Morada:</Text>
                    <Text style={styles.text}>{data.email}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>Telemóvel: </Text>
                    <Text style={styles.text}>{data.phone_nr}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>Email: </Text>
                    <Text style={styles.text}>{data.email}</Text>
                </View>
            </View>
        );
    }
}