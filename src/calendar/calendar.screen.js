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

class CalendarScreenComponent extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Calendário',
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
                <Text> Calendario </Text>
            </View>
        );
    }
}

const navigatorRoute = {
    'Calendário': { screen: CalendarScreenComponent }
};

const navigatorOptions = {
}

export default CalendarScreen = StackNavigator(navigatorRoute, navigatorOptions);