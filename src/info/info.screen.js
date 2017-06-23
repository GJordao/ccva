import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
//Helpers
import navigatorOptions from './../navigators/helpers/navigationOptions.helper';
//GLOBALS
import NavigatorButton from './../GLOBALS/components/navigator.button';
// Custom
import Info from './components/info';

class InfoScreenComponent extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Informação Geral',
        headerLeft: <NavigatorButton navigation={navigation} />
    });

    render() {
        return (
            <Info />
        );
    }
}

const navigatorRoute = {
    Info: { screen: InfoScreenComponent }
};

export default InfoScreen = StackNavigator(navigatorRoute, navigatorOptions);