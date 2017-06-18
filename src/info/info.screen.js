import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
    icon: {
        width: 35,
        height: 35,
        marginLeft: 5
    },
});

class InfoScreenComponent extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Informação Geral',
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
                <Text> Info Screen </Text>
            </View>
        );
    }
}

const navigatorRoute = {
    Info: { screen: InfoScreenComponent }
};

const navigatorOptions = {

}

export default InfoScreen = StackNavigator(navigatorRoute, navigatorOptions);