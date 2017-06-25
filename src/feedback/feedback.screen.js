import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
//Helpers
import navigatorOptions from './../navigators/helpers/navigationOptions.helper';
//API
import ApiHelper from './../api';
//GLOBALS
import COLORS from './../GLOBALS/colors';
import NavigatorButton from './../GLOBALS/components/navigator.button';

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.appBackground,
        flexDirection: 'column',
        height: '100%',
        width: '100%'
    },
    title: {
        alignSelf: 'center',
        fontSize: 28,
        marginBottom: 30
    },
    question: {
        fontSize: 20,
        paddingBottom: 5
    },
    questionContainer: {
        marginLeft: '5%',
        paddingBottom: 10
    },
    questionInput: {
        borderWidth: 0,
        borderColor: 'red'
    },
    questionInputContainer: {
        borderRadius: 3,
        borderWidth: .9,
        width: '90%',
    }
});

class FeedbackScreenComponent extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Feedback',
        headerLeft: <NavigatorButton navigation={navigation} />
    });

    constructor(props) {
        super(props);
        this.state = {
            hasLoaded: false,
            questions: []
        }
    }

    componentWillMount() {
        ApiHelper.fetchContent('MTM1NTY4Mjg4MQ/form').then((response) => {
            this.setState({
                hasLoaded: true,
                questions: response
            });
        });
    }

    mapAnswerToQuestion(value, index) {
        let newQuestions = this.state.questions;
        newQuestions[index].answer = value;
        this.setState({
            questions: newQuestions
        });
        console.log(this.state.questions);        
    }

    render() {
        if (!this.state.hasLoaded) {
            return (
                <View>
                    <Text>Loading questions...</Text>
                </View>
            );
        }
        return (
            <ScrollView style={styles.container} >
                <View style={styles.questionContainer}>
                    {this.state.questions.map((question, index) => {
                        return (
                            <View key={index} >
                                <Text style={styles.question} >{question.question}</Text>
                                <View style={styles.questionInputContainer}>
                                    <TextInput
                                        underlineColorAndroid='transparent'
                                        style={styles.questionInput}
                                        onChangeText={(value) => { this.mapAnswerToQuestion(value, index) }}
                                    />
                                </View>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        );
    }
}

const navigatorRoute = {
    'Feedback': { screen: FeedbackScreenComponent }
};

export default FeedbackScreen = StackNavigator(navigatorRoute, navigatorOptions);