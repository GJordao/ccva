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

const styles = StyleSheet.create({
    icon: {
        width: 35,
        height: 35,
        marginLeft: 5,
        tintColor: 'white'
    }
});

class NewsfeedScreenComponent extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Newsfeed',
        headerLeft:
        <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
            <Image
                source={require('./../icons/burger.png')}
                style={styles.icon}
            />
        </TouchableOpacity>
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

    // Change that view to be a separator
    render() {
        if (!this.state.hasLoaded) {
            return (<Text>Loading...</Text>);
        }
        return (
            <View>
                <TagBar />
                <View style={[{ height: 1 }, { backgroundColor: 'black' }]} />
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