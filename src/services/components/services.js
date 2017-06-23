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

const BACON_IPSUM = 'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const CONTENT = [
    {
        title: 'Marcação de Aniversários',
        content: 
        `Celebre os aniversário do seu filho em grande
    E-mail aniversarios@ccvalg.pt ou telefone 289 890 922.`
    },
    {
        title: 'Workshops',
        content: BACON_IPSUM,
    }
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '300',
        marginBottom: 20,
    },
    header: {
        backgroundColor: '#F5FCFF',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    headerText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500',
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
    },
    active: {
        backgroundColor: 'rgba(255,255,255,1)',
    },
    inactive: {
        backgroundColor: 'rgba(245,252,255,1)',
    },
    selectors: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selector: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    activeSelector: {
        fontWeight: 'bold',
    },
    selectTitle: {
        fontSize: 14,
        fontWeight: '500',
        padding: 10,
    },
});

export default class Services extends Component {
    state = {
        activeSection: false,
        collapsed: true,
    };

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
            <View style={styles.container}>
                <ScrollView>
                    <Accordion
                        activeSection={this.state.activeSection}
                        sections={CONTENT}
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