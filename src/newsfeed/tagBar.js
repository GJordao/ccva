import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';


const styles = StyleSheet.create({
    container: {
        height: 40,
        width: '100%'
    },
    tagContainer: {
        backgroundColor: '#303235',        
        padding: 5,
        marginLeft: 5
    },
    tag: {
        fontSize: 16,
        color: 'white'
    }
});

export default class TagBar extends Component {
    render() {
        return (
            <ScrollView style={styles.container} horizontal={true}>
                <TouchableOpacity style={styles.tagContainer}>
                    <Text style={styles.tag}>Todas</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}