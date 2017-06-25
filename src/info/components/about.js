import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontSize: 18
    }
});

export default class About extends Component {
    render() {
        const data = this.props.data;
        return (
            <View>
                <Text style={styles.text}>{data.description}</Text>
            </View>
        );
    }
}