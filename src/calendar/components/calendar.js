import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import { Agenda } from 'react-native-calendars';
import Moment from 'moment';
// API 
import ApiHelper from './../../api';
// GLOBALS
import COLORS from './../../GLOBALS/colors';

const styles = StyleSheet.create({
    item: {
        backgroundColor: COLORS.calendarItemBackground,
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
    },
    emptyDate: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        height: 15,
        justifyContent: 'center',
        paddingTop: 30
    },
    tag: {
        borderRadius: 3,
        color: COLORS.newsFeedTagText,
        fontSize: 11,
        fontWeight: 'bold',
        height: 20,
        marginRight: 3,
        padding: 2,
    },
    tagContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 3,
    },
    text: {
        marginBottom: 2
    },
    time: {
        fontSize: 14,
        fontWeight: '400'
    },
    title: {
        color: COLORS.calendarItemTitle,
        fontSize: 16,
    }
});

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: {},
            hasLoaded: false
        };
    }

    componentWillMount() {
        ApiHelper.fetchContent('MTM1NTY4Mjg4MQ/events').then((data) => {
            let newItems = {};
            if (data !== null) {
                data.forEach((event) => {
                    const date = Moment(event.e_time).format('YYYY-MM-DD');
                    const time = Moment(event.e_time).format('HH:mm');
                    if (!(date in newItems)) {
                        newItems[date] = [];
                    }
                    newItems[date].push({
                        name: event.name,
                        desc: event.desc,
                        time: time,
                        tags: event.tags === null ? [] : JSON.parse(event.tags)
                    });
                })
            }

            this.setState({
                items: newItems,
                hasLoaded: true
            });
        });
    }

    getCurrentDate() {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        return yyyy + '-' + mm + '-' + dd;
    }

    /* 
    * Creates a new set of items with the selected day and 85 more onward
    * with empty days and event days 
    */
    loadItems(day) {
        for (let i = 0; i < 85; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = this.timeToString(time);
            if (!this.state.items[strTime]) {
                this.state.items[strTime] = [];
            }
        }
        const newItems = {};
        Object.keys(this.state.items).forEach(key => { newItems[key] = this.state.items[key]; });
        this.setState({
            items: newItems
        });
    }

    renderItem(item) {
        return (
            <View style={styles.item}>
                <Text style={styles.time}>{item.time}</Text>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.text} numberOfLines={4}>{item.desc}</Text>
                <View style={styles.tagContainer} >
                    {item.tags.map((tag, index) => {
                        return <Text key={tag.id+index} style={[styles.tag, { backgroundColor: tag.color }]}>{tag.name}</Text>
                    })}
                </View>
            </View>
        );
    }

    renderEmptyDate() {
        return (
            <View style={styles.emptyDate}><Text>Não existem eventos neste dia</Text></View>
        );
    }

    rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
    }

    timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }

    render() {
        if (!this.state.hasLoaded) {
            return (
                <View>
                    <Text>Loading...</Text>
                </View>
            );
        }
        return (
            <Agenda
                items={this.state.items}
                loadItemsForMonth={this.loadItems.bind(this)}
                selected={this.getCurrentDate()}
                renderItem={this.renderItem.bind(this)}
                renderEmptyDate={this.renderEmptyDate.bind(this)}
                rowHasChanged={this.rowHasChanged.bind(this)}
            //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
            />
        );
    }
}
