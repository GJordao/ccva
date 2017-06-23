import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
//Helpers
import navigatorOptions from './../navigators/helpers/navigationOptions.helper';
//GLOBALS
import NavigatorButton from './../GLOBALS/components/navigator.button';
// Custom components
import Appointment from './components/appointment';

class AppointmentScreenComponent extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Marcação',
        headerLeft: <NavigatorButton navigation={navigation} />
    });

    render() {
        return (
            <Appointment />
        );
    }
}

const navigatorRoute = {
    'Marcação': { screen: AppointmentScreenComponent }
};

export default AppointmentScreen = StackNavigator(navigatorRoute, navigatorOptions);