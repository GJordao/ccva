import React, { Component } from 'react';
import { ScrollView, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
//Helpers
import navigatorOptions from './../navigators/helpers/navigationOptions.helper';
//GLOBALS
import NavigatorButton from './../GLOBALS/components/navigator.button';

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    mapa: {
        height: height,
        width: width+100,
    }
});

class MapScreenComponent extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Mapa Interativo',
        headerLeft: <NavigatorButton navigation={navigation} />
    });

    render() {
        return (
            <ScrollView style={{flex: 1}} horizontal={true}>
                <Image style={styles.mapa} source={require('./../icons/mapa.png')} />
            </ScrollView>
        );
    }
}

const navigatorRoute = {
    'Mapa': { screen: MapScreenComponent }
};

export default MapScreen = StackNavigator(navigatorRoute, navigatorOptions);