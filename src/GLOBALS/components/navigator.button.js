import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
//GLOBALS
import COLORS from './../colors';

const styles = StyleSheet.create({
    icon: {
        height: 35,
        marginLeft: 5,
        tintColor: COLORS.navBarIconTint,
        width: 35,
    },
});

export default class NavigatorButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                <Image
                    source={require('./../../icons/burger.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>
        );
    }
}