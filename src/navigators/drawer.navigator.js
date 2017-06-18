import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import Drawer from './components/drawer';
import NewsfeedScreen from './../newsfeed/newsfeed.screen';
import InfoScreen from './../info/info.screen';
import CalendarScreen from './../calendar/calendar.screen';
import ServicesScreen from './../services/services.screen';
import AppointmentScreen from './../appointment/appointment.screen';
import MapScreen from './../map/map.screen';
import FeedbackScreen from './../feedback/feedback.screen';

const navigatorRoute = {
    'Newsfeed': { screen: NewsfeedScreen },
    'Informação Geral': { screen: InfoScreen },
    'Calendário': { screen: CalendarScreen },
    'Serviços e Projetos': { screen: ServicesScreen },
    'Marcação': { screen: AppointmentScreen },
    'Mapa Interativo': { screen: MapScreen },
    'Feedback': { screen: FeedbackScreen }
};

const navigatorConfig = {
    drawerWidth: 200,
    contentComponent: props => <Drawer {...props} />
};

export default DrawerNavigator(navigatorRoute, navigatorConfig);