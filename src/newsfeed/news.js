import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';


const styles = StyleSheet.create({
    banner: {
        height: 120,
        width: '100%'
    },
    container: {
        backgroundColor: 'white',
    },
    content: {
        fontSize: 18
    },
    separator: {
        backgroundColor: '#424242',
        flex: 1,
        height: 1,
        marginBottom: 5,
        marginLeft: "15%",
        marginTop: 5,
        width: '70%'
    },
    newsContainer: {
        padding: 10,
    },
    tag: {
        borderRadius: 3,
        color: 'white',
        fontWeight: 'bold',
        height: 25,
        marginRight: 5,
        padding: 3,
    },
    tagContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 5,
    },
    title: {
        color: 'black',
        flex: 3,
        fontSize: 26,
    }
});

export default class News extends Component {
    constructor(props) {
        super(props);
    }

    renderSeparator() {
        return (
            <View style={styles.separator} />
        );
    }

    render() {
        const tags = this.props.news.tags === null ? [] : JSON.parse(this.props.news.tags);
        return (
            <View style={styles.container} >
                <TouchableOpacity style={styles.newsContainer} onPress={() => { this.props.navigation.navigate('News', { news: this.props.news }) }}>
                    <View><Text style={styles.title} >{this.props.news.title}</Text></View>
                    <View>
                        <Image
                            source={{ uri: 'http://images.twinkl.co.uk/image/upload/t_345,f_auto/image/4c/65/T-C-450-My-Weekend-News-Display-Banner.jpg' }}
                            style={styles.banner}
                        />
                    </View>
                    <View>
                        <Text numberOfLines={4} style={styles.content}>{this.props.news.content}</Text>
                    </View>
                    <View style={styles.tagContainer} >
                        {tags.map((tag) => {
                            return <Text key={tag.id} style={[styles.tag, { backgroundColor: tag.color }]}>{tag.name}</Text>
                        })}
                    </View>
                </TouchableOpacity>
                {this.renderSeparator()}
            </View>
        );
    }
}