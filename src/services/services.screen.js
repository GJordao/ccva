import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
//Helpers
import navigatorOptions from './../navigators/helpers/navigationOptions.helper';
//GLOBALS
import NavigatorButton from './../GLOBALS/components/navigator.button';
// Custom components
import ServicesProjects from './components/';

class ServicesScreenComponent extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Serviços e Projetos',
        headerLeft: <NavigatorButton navigation={navigation} />
    });

    render() {
        return (
            <ServicesProjects />
        );
    }
}

const navigatorRoute = {
    'Serviços e Projetos': { screen: ServicesScreenComponent }
};

export default ServicesScreen = StackNavigator(navigatorRoute, navigatorOptions);