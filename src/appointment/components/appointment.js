import React, { Component } from 'react';
import {
    View, Text, TextInput, StyleSheet, TouchableOpacity, Picker, ScrollView
} from 'react-native';
import DatePicker from 'react-native-datepicker';
// GLOBALS
import COLORS from './../../GLOBALS/colors';
// API
import ApiHelper from './../../api';

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.appBackground,
        flexDirection: 'column',
    },
    button: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#437db7',
        borderColor: '#306aa5',
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
    innedContainer: {
        marginTop: 20
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
        fontSize: 26,
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

export default class Appointment extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.state = {
            name: '',
            mail: '',
            phone: '',
            appointmentType: 'visit',
            date: '',
            message: '',
            showFeedback: false,
            feedback: ''
        }
    }

    renderDatePicker() {
        return (
            <DatePicker
                style={{ width: 200 }}
                date={this.state.date}
                mode="datetime"
                placeholder="Selecione a data"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={false}
                customStyles={{
                    // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => { this.setState({ date: date }) }}
            />
        );
    }

    submit() {
        if (this.state.name.length === 0 ||
            this.state.mail.length === 0 ||
            this.state.phone.length === 0 ||
            this.state.date.length === 0 ||
            this.state.message.length === 0) {
            this.setState({
                feedback: 'Todos os campos são obrigatórios',
                showFeedback: true
            });
        } else {
            const postData = {
                name: this.state.name,
                contact: this.state.phone,
                mail: this.state.mail,
                message: this.state.message,
                date: this.state.date,
                type_table: this.state.appointmentType,
                type_id: 0
            }
            ApiHelper.postContent('MTM1NTY4Mjg4MQ/reservation/add', postData).then((message) => {
                this.setState({
                    showFeedback: true,
                    feedback: message,
                    name: '',
                    phone: '',
                    mail: '',
                    message: '',
                    date: '',
                    appointmentType: 'visit'
                });
            });
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.innedContainer}>
                    <View style={styles.questionContainer}>
                        <Text style={styles.question}>Nome: </Text>
                        <View style={styles.questionInputContainer}>
                            <TextInput
                                value={this.state.name}
                                onChangeText={(value) => { this.setState({ name: value }); }}
                                underlineColorAndroid='transparent'
                                style={styles.questionInput}
                            />
                        </View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.question}> Email: </Text>
                        <View style={styles.questionInputContainer}>
                            <TextInput
                                value={this.state.mail}
                                onChangeText={(value) => { this.setState({ mail: value }); }}
                                underlineColorAndroid='transparent'
                                style={styles.questionInput}
                            />
                        </View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.question}> Telemóvel: </Text>
                        <View style={styles.questionInputContainer}>
                            <TextInput
                                value={this.state.phone}
                                onChangeText={(value) => { this.setState({ phone: value }); }}
                                underlineColorAndroid='transparent'
                                style={styles.questionInput}
                            />
                        </View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.question}> Tipo de marcação: </Text>
                        <View style={styles.questionInputContainer}>
                            <Picker
                                selectedValue={this.state.appointmentType}
                                onValueChange={(selectedValue) => this.setState({ appointmentType: selectedValue })}
                            >
                                <Picker.Item label="Visita" value="visit" />
                                <Picker.Item label="Evento" value="event" />
                                <Picker.Item label="Serviço" value="service" />
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.question}>Data:</Text>
                        {this.renderDatePicker()}
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.question}>Mensagem:</Text>
                        <View style={styles.questionInputContainer}>
                            <TextInput
                                value={this.state.message}
                                onChangeText={(value) => { this.setState({ message: value }); }}
                                style={styles.questionInput} multiline={true}
                                numberOfLines={5}
                                underlineColorAndroid='transparent'
                            />
                        </View>
                    </View>
                    {
                        this.state.showFeedback &&
                        <View style={styles.feedbackContainer}>
                            <Text style={styles.feedBackText}>{this.state.feedback}</Text>
                        </View>
                    }
                    <TouchableOpacity style={styles.button} onPress={this.submit}>
                        <Text style={styles.buttonText}>Submeter</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}