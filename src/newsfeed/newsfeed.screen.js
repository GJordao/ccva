import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
//Custom components
import TagBar from './tagBar';
import News from './news';
//API
import ApiHelper from './../api';

const styles = StyleSheet.create({
    icon: {
        width: 35,
        height: 35,
        marginLeft: 5
    },
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
            console.log(response);
            this.setState({
                hasLoaded: true,
                news: response
            });
        });
    }

    // Change that view to be a separator
    render() {
        if(!this.state.hasLoaded) {
            return (<Text>Loading...</Text>);
        }
        return (
            <View>
                <TagBar />
                <View style={[{height: 1}, {backgroundColor: 'black'}]} />
                <ScrollView>
                    {this.state.news.map((news) => {
                        return <News key={news.id} news={news} />
                    })}
                </ScrollView>
            </View>
        );
    }
}

const navigatorRoute = {
    Newsfeed: { screen: NewsfeedScreenComponent }
};

const navigatorOptions = {
}

export default NewsfeedScreen = StackNavigator(navigatorRoute, navigatorOptions);