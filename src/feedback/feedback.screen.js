import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { debounce } from 'lodash';
//Helpers
import navigatorOptions from './../navigators/helpers/navigationOptions.helper';
//API
import ApiHelper from './../api';
//GLOBALS
import COLORS from './../GLOBALS/colors';
import NavigatorButton from './../GLOBALS/components/navigator.button';

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: COLORS.submitButton,
        borderColor: COLORS.submitButtonBorder,
        borderRadius: 3,
        borderWidth: .5,
        flexDirection: 'row',
        justifyContent: 'center',
        height: 50,
        marginBottom: 20,
        width: 100
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    },
    container: {
        backgroundColor: COLORS.appBackground,
        flexDirection: 'column',
        height: '100%',
        width: '100%'
    },
    feedbackContainer: {
        alignItems: 'center',
        backgroundColor: COLORS.feedbackContainerBackground,
        borderColor: COLORS.feedbackContainerBorder,
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        height: 100,
        justifyContent: 'center',
        margin: 20,
        padding: 10
    },
    feedBackText: {
        color: COLORS.feedbackText,
        fontSize: 14
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
        this.submit = this.submit.bind(this);
        this.mapAnswerToQuestion = debounce(this.mapAnswerToQuestion, 500);
        this.state = {
            hasLoaded: false,
            showMessage: false,
            message: '',
            name: '',
            contact: '',
            mail: '',
            questions: []
        }
    }

    componentWillMount() {
        ApiHelper.fetchContent('MTM1NTY4Mjg4MQ/form/questions').then((response) => {
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
    }

    validateData() {
        this.state.questions.forEach((question) => {
            if (!('answer' in question) || question.answer.length === 0) {
                this.setState({
                    showMessage: true,
                    message: 'Todas as perguntas são obrigatórias com excepção dos dados pessoais'
                });
                return false;
            }
        });
        return true;
    }

    submit() {
        if (this.validateData()) {
            const postData = {
                name: this.state.name,
                contact: this.state.contact,
                mail: this.state.mail,
                questions: this.state.questions
            }
            ApiHelper.postContent('MTM1NTY4Mjg4MQ/form/answer', postData).then((message) => {
                const emptiedQuestions = [];
                this.state.questions.forEach((question) => {
                    question.answer = '';
                    emptiedQuestions.push(question);
                });
                this.setState({
                    showMessage: true,
                    message: message,
                    name: '',
                    contact: '',
                    mail: '',
                    questions: emptiedQuestions
                });
            });
        }

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
                    <View>
                        <Text style={styles.question} >Nome:</Text>
                        <View style={styles.questionInputContainer}>
                            <TextInput
                                underlineColorAndroid='transparent'
                                style={styles.questionInput}
                                value={this.state.name}
                                onChangeText={(value) => { this.setState({ name: value }); }}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.question} >Contacto:</Text>
                        <View style={styles.questionInputContainer}>
                            <TextInput
                                keyboardType='numeric'
                                underlineColorAndroid='transparent'
                                style={styles.questionInput}
                                value={this.state.contact}
                                onChangeText={(value) => { this.setState({ contact: value }); }}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.question} >Mail:</Text>
                        <View style={styles.questionInputContainer}>
                            <TextInput
                                keyboardType='email-address'
                                underlineColorAndroid='transparent'
                                style={styles.questionInput}
                                value={this.state.mail}
                                onChangeText={(value) => { this.setState({ mail: value }); }}
                            />
                        </View>
                    </View>
                    {this.state.questions.map((question, index) => {
                        return (
                            <View key={index} >
                                <Text style={styles.question} >{question.question}</Text>
                                <View style={styles.questionInputContainer}>
                                    <TextInput
                                        underlineColorAndroid='transparent'
                                        style={styles.questionInput}
                                        value={question.answer}
                                        onChangeText={(value) => { this.mapAnswerToQuestion(value, index) }}
                                    />
                                </View>
                            </View>
                        );
                    })}
                </View>
                {
                    this.state.showMessage &&
                    <View style={styles.feedbackContainer}>
                        <Text style={styles.feedBackText}>{this.state.message}</Text>
                    </View>
                }
                <TouchableOpacity style={styles.button} onPress={() => { this.submit() }}>
                    <Text style={styles.buttonText}>Submeter</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

const navigatorRoute = {
    'Feedback': { screen: FeedbackScreenComponent }
};

export default FeedbackScreen = StackNavigator(navigatorRoute, navigatorOptions);