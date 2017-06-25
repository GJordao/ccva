import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
// GLOBALS
import COLORS from './../../GLOBALS/colors';

const styles = StyleSheet.create({
    active: {
        backgroundColor: COLORS.serviceAccordionActive,
    },
    content: {
        backgroundColor: COLORS.appBackground,
        padding: 20,
    },
    header: {
        borderBottomWidth: 1,
        borderColor: COLORS.serviceAccordionBorderBottom,
        padding: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
    },
    inactive: {
        backgroundColor: COLORS.serviceAccordionInactive,
    },
    title: {
        alignSelf: 'center',
        color: COLORS.serviceTitle,
        fontSize: 24,
        fontWeight: 'bold',
        padding: 30,
    }
});

export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSection: false,
            collapsed: true,
        }
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
                <Animatable.Text animation={isActive ? 'bounceIn' : undefined} style={{ fontSize: 18 }}>{section.content}</Animatable.Text>
            </Animatable.View>
        );
    }

    render() {
        return (
            <View>
                <Text style={styles.title}>Projetos do Centro</Text>
                <Accordion
                    activeSection={this.state.activeSection}
                    sections={this.props.projects}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                    duration={400}
                    onChange={this._setSection.bind(this)}
                />
            </View>
        );
    }
}