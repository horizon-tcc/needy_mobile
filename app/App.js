import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import { FontAwesome5 } from '@expo/vector-icons';
import Login from './src/pages/login/';
import Intro from './src/pages/intro/';
import Maps from './src/pages/maps/';
import Home from './src/pages/home/';
import Perfil from './src/pages/perfil/';
import MapButton from './src/components/MapButton';






const NavBar = createBottomTabNavigator(
	{
		Home: {
			screen: Home,

			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<FontAwesome5 name='home' color={tintColor} size={24} />
				)

			}
		},

		Map: {
			screen: Maps,
			navigationOptions: {
				tabBarIcon: <MapButton />
			}
		},

		Profile: {
			screen: Perfil,
			navigationOptions: {

				tabBarIcon: ({ tintColor }) => <FontAwesome5 name="user" color={tintColor} size={24} />

			},






		}
	},

	{
		tabBarOptions: {
			showLabel: false,
			inactiveTintColor: '#CDCCCE',
			activeTintColor: '#ca2929'



		}










	}
)



const StackNavigation = createStackNavigator(

	{
		Login: {
			screen: Login
		},

		Intro: {
			screen: Intro
		},
		
		Home : {
			screen: NavBar
		}
	},

	{
		headerMode: "none",
		defaultNavigationOptions:{
			animationEnabled:false,
		}
	}

	
	
)


export default createAppContainer(StackNavigation);


