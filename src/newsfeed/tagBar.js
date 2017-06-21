import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
//GLOBALS
import COLORS from './../GLOBALS/colors';

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: '100%',
        backgroundColor: COLORS.appBackground
    },
    tagContainer: {
        backgroundColor: COLORS.newsFeedTagTodas,        
        padding: 5,
        marginLeft: 5
    },
    tag: {
        fontSize: 16,
        color: COLORS.newsFeedTagText
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