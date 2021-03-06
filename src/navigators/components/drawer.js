import React, {
    Component
} from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet
} from 'react-native';
//Globals
import COLORS from './../../GLOBALS/colors';
const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: COLORS.drawerMenu,
        height: '100%'
    },
    separator: {
        marginTop: 10,
        marginBottom: 10,
        height: 1,
        width: "100%",
        backgroundColor: COLORS.appSeparator,
    },
    menu: {
        fontSize: 22,
        alignSelf: 'center',
        color: COLORS.drawerMenuTitle,
        marginBottom: 20
    },
    text: {
        marginLeft: 10,
        fontSize: 18
    }
});

export default class Drawer extends Component {
    constructor(props) {
        super(props);
    }

    renderSeparator() {
        return (
            <View style={style.separator} />
        );
    }

    renderRoutes(routeName) {
        const color = routeName === this.props.activeItemKey ? COLORS.drawerMenuActiveItemText : COLORS.drawerMenuInactiveActiveItemText;
        return <Text style={[style.text, {color: color}]}>{routeName}</Text>
    }

    render() {
        return (
            <View style={style.container}>
                <Text style={style.menu}> Menu </Text>
                {this.props.items.map((item, index) => {
                    return (
                        <View key={index}>
                            <TouchableOpacity onPress={() => {this.props.navigation.navigate(item.routeName)}}>
                                {this.renderRoutes(item.routeName)}
                            </TouchableOpacity>
                            {this.renderSeparator()}
                        </View>
                    );
                })}
            </View>
        );
    }
}