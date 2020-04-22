import React from "react";
import {View} from 'react-native';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import { FontAwesome5 } from "@expo/vector-icons";
import Login from "./src/pages/login/";
import Intro from "./src/pages/intro/";
import Maps from "./src/pages/maps/";
import Home from "./src/pages/home/";
import Perfil from "./src/pages/perfil/";
import Config from './src/pages/config/';
import MapButton from "./src/components/MapButton";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

const config = {
	tabBarOptions: {
		showLabel: false,
		inactiveTintColor: "#CDCCCE",
		activeTintColor: "#ca2929",
	},
};

const NavBar = createBottomTabNavigator(
	{
		Home: {
			screen: Home,

			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<FontAwesome5
						name="home"
						color={tintColor}
						size={24}
					/>
				),
			},
		},

		Map: {
			screen: Maps,
			navigationOptions: {
				tabBarIcon: <MapButton />,
			},
		},

		Profile: {
			screen: Perfil,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<FontAwesome5
						name="user"
						color={tintColor}
						size={24}
					/>
				),
			},
		},
	},
	config
);




const SwitchNavigation = createStackNavigator(
	{
		
		Login: {
			screen: Login,
			
		},

		Intro: {
			screen: Intro,
		},

		
		Config: {
			screen: Config,
			navigationOptions: {
				title: 'Configurações',
				animationEnabled: true,
				
				headerShown: true,
				headerTintColor: '#fff',
				headerStyle: {
					backgroundColor: '#ca2929',
				  },
			}
			
		},


		Home: {
			screen: NavBar,
		},

	},
	{
		defaultNavigationOptions: {
			animationEnabled: false,
			headerShown: false,
		},
	}
);

export default createAppContainer(SwitchNavigation);
