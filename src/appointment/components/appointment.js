import React, { Component } from 'react';
import {
    View, Text, TextInput, StyleSheet, TouchableOpacity, Picker, ScrollView
} from 'react-native';
import DatePicker from 'react-native-datepicker';
// GLOBALS
import COLORS from './../../GLOBALS/colors';

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

export default class Appointment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: "",
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

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.innedContainer}>
                    <View style={styles.questionContainer}>
                        <Text style={styles.question}>Nome: </Text>
                        <View style={styles.questionInputContainer}>
                            <TextInput style={styles.questionInput} />
                        </View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.question}> Email: </Text>
                        <View style={styles.questionInputContainer}>
                            <TextInput style={styles.questionInput} />
                        </View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.question}> Telemóvel: </Text>
                        <View style={styles.questionInputContainer}>
                            <TextInput style={styles.questionInput} />
                        </View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.question}> Tipo de marcação: </Text>
                        <View style={styles.questionInputContainer}>
                            <Picker>
                                <Picker.Item label="Visita" value="java" />
                                <Picker.Item label="Evento" value="js" />
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
                            <TextInput style={styles.questionInput} multiline={true} numberOfLines={5} />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Submeter</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}