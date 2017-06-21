import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
//Helpers
import navigatorOptions from './../navigators/helpers/navigationOptions.helper';
//Custom components
import TagBar from './tagBar';
import News from './news';
import NewsScreen from './news/news.screen';
//API
import ApiHelper from './../api';
//GLOBALS
import COLORS from './../GLOBALS/colors';
import NavigatorButton from './../GLOBALS/components/navigator.button';

const styles = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: COLORS.appSeparator
    }
});

class NewsfeedScreenComponent extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Newsfeed',
        headerLeft: <NavigatorButton navigation={navigation} />
    });

    constructor(props) {
        super(props);
        this.state = {
            hasLoaded: false,
            news: []
        }
    }

    componentWillMount() {
        ApiHelper.fetchContent('MTM1NTY4Mjg4MQ/news').then((response) => {
            this.setState({
                hasLoaded: true,
                news: response
            });
        });
    }

    renderSeparator() {
        return (
            <View style={styles.separator} /> 
        );
    }

    render() {
        if (!this.state.hasLoaded) {
            return (<Text>Loading...</Text>);
        }
        return (
            <View>
                <TagBar />
                {this.renderSeparator()}
                <ScrollView>
                    {this.state.news.map((news) => {
                        return <News key={news.id} navigation={this.props.navigation} news={news} />
                    })}
                </ScrollView>
            </View>
        );
    }
}

const navigatorRoute = {
    Newsfeed: { screen: NewsfeedScreenComponent },
    News: {
        path: 'news/:news',
        screen: NewsScreen
    }
};

export default NewsfeedScreen = StackNavigator(navigatorRoute, navigatorOptions);