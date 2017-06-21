import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
//Helpers
import navigatorOptions from './../navigators/helpers/navigationOptions.helper';
//GLOBALS
import NavigatorButton from './../GLOBALS/components/navigator.button';


class CalendarScreenComponent extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Calendário',
        headerLeft: <NavigatorButton navigation={navigation} />
    });

    render() {
        return (
            <View>
                <Text> Calendario </Text>
            </View>
        );
    }
}

const navigatorRoute = {
    'Calendário': { screen: CalendarScreenComponent }
};

export default CalendarScreen = StackNavigator(navigatorRoute, navigatorOptions);