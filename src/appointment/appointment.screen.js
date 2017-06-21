import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
//Helpers
import navigatorOptions from './../navigators/helpers/navigationOptions.helper';
//GLOBALS
import NavigatorButton from './../GLOBALS/components/navigator.button';


class AppointmentScreenComponent extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Marcação',
        headerLeft: <NavigatorButton navigation={navigation} />
    });

    render() {
        return (
            <View>
                <Text> Marcação </Text>
            </View>
        );
    }
}

const navigatorRoute = {
    'Marcação': { screen: AppointmentScreenComponent }
};

export default AppointmentScreen = StackNavigator(navigatorRoute, navigatorOptions);