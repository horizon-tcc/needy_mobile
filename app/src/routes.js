import React from 'react';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Login from './pages/login/';
import Intro from './pages/intro/';
import Maps from './pages/maps/';
import Home from './pages/home/';
import Perfil from './pages/perfil/';

const bottomNavigator = createMaterialBottomTabNavigator(
    {

        Mapa: {
            screen: Maps,
            navigationOptions: () => ({
                tabBarIcon: ({ focused }) => (
                    <Icon name="map-o" size={20} color={focused ? '#fff' : '#ddd'} />
                ),
            }),
        },

        Home: {
            screen: Home,
            navigationOptions: () => ({
                tabBarIcon: ({ focused }) => (
                    <AntDesign name="home" size={20} color={focused ? '#fff' : '#ddd'} />
                ),
            }),
        },


        Perfil: {
            screen: Perfil,
            navigationOptions: () => ({
                tabBarIcon: ({ focused }) => (
                    <AntDesign name="setting" size={20} color={focused ? '#fff' : '#ddd'} />
                ),
            }),
        },

    },
    {
        initialRouteName: "Home",
        barStyle: { backgroundColor: '#ca2929' },
        backBehavior: "initialRoute",

    }


)

const appNavigator = createSwitchNavigator(
    {
       

        Login: {
            screen: Login
        },


        Home: {
            screen: bottomNavigator
        },


        Intro: {
            screen: Intro
        }
    },
    {

        backBehavior: 'history'
    }
)


export default createAppContainer(appNavigator);
