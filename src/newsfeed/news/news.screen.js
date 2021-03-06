import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Moment from 'moment';
//GLOBALS
import COLORS from './../../GLOBALS/colors';

const styles = StyleSheet.create({
    banner: {
        height: 100,
        resizeMode: 'stretch',
        width: '100%',
    },
    content: {
        color: COLORS.newsFeedContent,
        fontSize: 17,
        marginTop: 10,
    },
    container: {
        backgroundColor: COLORS.appBackground,
        padding: 10,
    },
    date: {
        flex: 1,
        fontSize: 14,
        marginLeft: 5,
    },
    headerContainer: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        marginTop: 10
    },
    tag: {
        borderRadius: 3,
        color: COLORS.newsFeedTagText,
        fontWeight: 'bold',
        height: 25,
        marginRight: 5,
        padding: 3,
    },
    tagContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5,
    },
    title: {
        color: COLORS.newsFeedTitle,
        flex: 3,
        fontSize: 26,
    }
});

export default class NewsScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.news.title
    });

    constructor(props) {
        super(props);
    }

    getImageUri(news) {
        return news.image == null ? 'http://www.ccvalg.pt/public/img/ccv-logo.png' : news.image;
    }

    render() {
        const news = this.props.navigation.state.params.news;
        const tags = news.tags === null ? [] : JSON.parse(news.tags);
        return (
            <ScrollView style={styles.container} >
                <View style={styles.headerContainer} >
                    <Text numberOfLines={3} style={styles.title} >
                        {news.title}
                    </Text>
                </View>
                <Image
                    source={{ uri: this.getImageUri(news) }}
                    style={styles.banner}
                />
                <View>
                    <Text style={styles.content} >
                        {news.content}
                    </Text>
                </View>
                <View style={styles.tagContainer} >
                    {tags.map((tag) => {
                        return <Text key={tag.id} style={[styles.tag, { backgroundColor: tag.color }]}>{tag.name}</Text>
                    })}
                    <Text style={styles.date} >
                        {Moment(news.publish).format('DD.MM.YYYY')}
                    </Text>
                </View>

            </ScrollView>
        );
    }
}
