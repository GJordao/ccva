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

class AppointmentScreenComponent extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Marcação',
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
                <Text> Marcação </Text>
            </View>
        );
    }
}

const navigatorRoute = {
    'Marcação': { screen: AppointmentScreenComponent }
};

const navigatorOptions = {
}

export default AppointmentScreen = StackNavigator(navigatorRoute, navigatorOptions);