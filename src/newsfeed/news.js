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
    }
});

export default class News extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity style={styles.tagContainer}>
                <View><Text>{this.props.news.title}</Text></View>
                <View>
                    <Image
                        source={{ uri: 'http://images.twinkl.co.uk/image/upload/t_345,f_auto/image/4c/65/T-C-450-My-Weekend-News-Display-Banner.jpg' }}
                        style={styles.banner}
                    />
                </View>
                <View>
                    <Text>{this.props.news.content}</Text>
                </View>
                <View>
                    <Text>{this.props.news.publish}</Text>
                </View>
                <View>
                    <Text>Tags</Text>
                </View>
            </TouchableOpacity>
        );
    }
}