import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
//GLOBALS
import COLORS from './../GLOBALS/colors';
// API
import ApiHelper from './../api';

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
    constructor(props) {
        super(props);
        this.state = {
            hasLoaded: false,
            tags: []
        }
    }

    componentWillMount() {
        ApiHelper.fetchContent('MTM1NTY4Mjg4MQ/tags').then((response) => {
            this.setState({
                hasLoaded: true,
                tags: response
            });
        });
    }

    render() {
        if (!this.state.hasLoaded) {
            return null;
        }
        return (
            <ScrollView style={styles.container} horizontal={true}>
                <TouchableOpacity style={styles.tagContainer}>
                    <Text style={styles.tag}>Todas</Text>
                </TouchableOpacity>
                {this.state.tags.map((tag) => {
                    return (
                        <TouchableOpacity key={tag.id} style={[styles.tagContainer, {backgroundColor: tag.color}]}>
                            <Text key={tag.id} style={styles.tag}>{tag.name}</Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        );
    }
}