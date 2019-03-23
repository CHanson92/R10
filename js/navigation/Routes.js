import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import { Ionicons } from '@expo/vector-icons';
import AboutScreen from '../screens/About/About';
import FavesScreen from '../screens/Faves/Faves';
import MapScreen from '../screens/Map/Map';
import ScheduleScreen from '../screens/Schedule/Schedule';
import { sharedNavigationOptions } from './config';

const AboutStack = createStackNavigator({
    About: AboutScreen,
},
{
  defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      title: 'About',
  })
},
);

const FavesStack = createStackNavigator({
    Faves: FavesScreen,
},
{
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      title: 'Faves',
    })
},
);

const MapStack = createStackNavigator({
    Map: MapScreen,
},
{
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      title: 'Map',
    })
},
);

const ScheduleStack = createStackNavigator({
    Schedule: ScheduleScreen,
},
{
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      title: 'Schedule',
    })
},
);

const Tabs = createBottomTabNavigator({
    Schedule: ScheduleStack,
    Map: MapStack,
    Faves: FavesStack,
    About: AboutStack,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let IconComponent = Ionicons;
            let iconName;
            if (routeName === 'About') {
              iconName = `ios-information-circle${focused ? '' : ''}`;
            } if (routeName === 'Faves') {
              iconName = `ios-heart${focused ? '' : ''}`;
            } if (routeName === 'Map') {
              iconName= `ios-map${focused ? '' : ''}`; 
            } if (routeName === 'Schedule') {
                iconName= `ios-calendar${focused ? '' : ''}`; 
            }
            // You can return any component that you like here!
            return <IconComponent name={iconName} size={25} color={tintColor} />;
          },
        }),
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: '#e6e6e6',
            style: {
                backgroundColor: 'black',
            },
        },
      }
);

const AppContainer = createAppContainer(Tabs);

export default class App extends Component {
    render() {
        return <AppContainer />
    }
}