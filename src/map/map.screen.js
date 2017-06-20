import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
//Helpers
import navigatorOptions from './../navigators/helpers/navigationOptions.helper';

const styles = StyleSheet.create({
    icon: {
        width: 35,
        height: 35,
        marginLeft: 5
    },
});

class MapScreenComponent extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Mapa Interativo',
        headerLeft:
        <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
            <Image
                source={require('./../icons/burger.png')}
                style={styles.icon}
            />
        </TouchableOpacity>
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