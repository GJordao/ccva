import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableHighlight,
} from 'react-native';
// API
import ApiHelper from './../../api';
// GLOBALS
import COLORS from './../../GLOBALS/colors';
// Components
import Services from './services';
import Projects from './projects';

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.appBackground,
        flex: 1
    }
});

export default class ServicesProjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasLoaded: false,
        }
    }

    componentWillMount() {
        ApiHelper.fetchContent('MTM1NTY4Mjg4MQ/services').then((data) => {
            let services = [];
            let projects = [];
            data.forEach((service) => {
                service.type === 'service'
                    ? services.push({ title: service.name, content: service.description })
                    : projects.push({ title: service.name, content: service.description });
            });

            this.setState({
                projects: projects,
                services: services,
                hasLoaded: true
            });
        });
    }

    render() {
        if (!this.state.hasLoaded) {
            return (
                <View>
                    <Text>Loading...</Text>
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Services services={this.state.services} />
                    <Projects projects={this.state.projects} />
                </ScrollView>
            </View>
        );
    }
}