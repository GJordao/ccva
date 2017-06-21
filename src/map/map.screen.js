import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
//Helpers
import navigatorOptions from './../navigators/helpers/navigationOptions.helper';
//GLOBALS
import NavigatorButton from './../GLOBALS/components/navigator.button';

class MapScreenComponent extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Mapa Interativo',
        headerLeft: <NavigatorButton navigation={navigation} />
    });

    render() {
        return (
            <View>
                <Text> Map </Text>
            </View>
        );
    }
}

const navigatorRoute = {
    'Mapa': { screen: MapScreenComponent }
};

export default MapScreen = StackNavigator(navigatorRoute, navigatorOptions);