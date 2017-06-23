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
        title: 'Sobre o centro',
        content: `
        "Das Estrelas às Estrelas" é o tema central da exposição permanente no Centro Ciência Algarve Ciência Viva, onde o visitante é levado através de uma viagem que começa com as estrelas galácticas e o nosso planeta, e termina no sistema  lagunar da Ria Formosa e suas estrelas do mar.
        A viagem é realizada através da interação com módulos relacionados com a física e a química da luz e da cor, uma sala dedicada à Ria Formosa, uma estufa inteligente, um jardim de energia infinita, e um terraço com uma vista deslumbrante sobre a Ria Formosa.`
    },
    {
        title: 'Contactos',
        content: BACON_IPSUM,
    },
    {
        title: 'Horário',
        content: BACON_IPSUM,
    },
    {
        title: 'Preçário',
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

export default class Info extends Component {
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
                <Animatable.Text animation={isActive ? 'bounceIn' : undefined} style={{fontSize: 18}}>{section.content}</Animatable.Text>
            </Animatable.View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.title}>Informação Geral</Text>
                    <Collapsible collapsed={this.state.collapsed} align="center">
                        <View style={styles.content}>
                            <Text>Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs</Text>
                        </View>
                    </Collapsible>
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