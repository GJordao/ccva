import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableHighlight,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
// Helpers
import infoDataHelper from './../helpers';
// Custom components
import About from './about';
import Contacts from './contacts';
import Schedule from './schedule';
import Price from './price';
// GLOBALS
import COLORS from './../../GLOBALS/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.appBackground,
        flex: 1,
        justifyContent: 'center',
    },
    header: {
        borderBottomWidth: 1,
        borderColor: COLORS.serviceAccordionBorderBottom,
        padding: 10,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500',
    },
    content: {
        padding: 20
    },
    active: {
        backgroundColor: COLORS.serviceAccordionActive,
    },
    inactive: {
        backgroundColor: COLORS.serviceAccordionInactive,
    }
});

export default class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasLoaded: false,
            activeSection: false,
            collapsed: true,
            data: {}
        };
    }

    componentWillMount() {
        infoDataHelper().then((data) => {
            this.setState({
                hasLoaded: true,
                data: data
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    getContent() {
        return [
            {
                title: this.state.data.info.title,
                content: <About data={this.state.data.info} />
            },
            {
                title: 'Contactos',
                content: <Contacts data={this.state.data.contacts} />
            },
            {
                title: 'Horário',
                content: <Schedule data={this.state.data.schedule} />
            },
            {
                title: 'Preçário',
                content: <Price data={this.state.data.price} />
            }
        ];
    }

    _toggleExpanded = () => {
        this.setState({ collapsed: !this.state.collapsed });
    }

    _setSection(section) {
        this.setState({ activeSection: section });
    }

    _renderHeader(section, i, isActive) {
        return (
            <Animatable.View duration={400} style={[styles.header, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
                <Text style={styles.headerText}>{section.title}</Text>
            </Animatable.View>
        );
    }

    _renderContent(section, i, isActive) {
        return (
            <Animatable.View duration={400} style={[styles.content, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
                {section.content}
            </Animatable.View>
        );
    }

    render() {
        if (!this.state.hasLoaded) {
            return (
                <View>
                    <Text>
                        Loading...
                    </Text>
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Collapsible collapsed={this.state.collapsed} align="center">
                        <View style={styles.content}>
                            <Text>Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs</Text>
                        </View>
                    </Collapsible>
                    <Accordion
                        activeSection={this.state.activeSection}
                        sections={this.getContent()}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                        duration={400}
                        onChange={this._setSection.bind(this)}
                    />
                </ScrollView>
            </View>
        );
    }
}