import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import { FontAwesome5 } from "@expo/vector-icons";
import Login from "./src/pages/login/";
import Intro from "./src/pages/intro/";
import Maps from "./src/pages/maps/";
import Home from "./src/pages/home/";
import Perfil from "./src/pages/perfil/";
import Config from "./src/pages/config/";
import MapButton from "./src/components/MapButton";
import Notifications from "./src/pages/notifications";
import editProfile from "./src/pages/editProfile";
import editNotifications from "./src/pages/editNotifications";
import Achievements from "./src/pages/achiv";
import Carteirinha from "./src/pages/carteirinha";
import Ajuda from "./src/pages/ajuda";

import { TouchableNativeFeedback } from "react-native-gesture-handler";

const config = {
	tabBarOptions: {
		showLabel: false,
		inactiveTintColor: "#CDCCCE",
		activeTintColor: "#ca2929",
	},
};

console.disableYellowBox = true;

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

const StackNavigation = createStackNavigator(
	{
		Login: {
			screen: Login,
		},

		Intro: {
			screen: Intro,
		},

		Carteirinha: {
			screen: Carteirinha,
			navigationOptions: {
				title: "Carteirinha",
				animationEnabled: true,

				headerShown: true,
				headerTintColor: "#fff",
				headerStyle: {
					backgroundColor: "#ca2929",
				},
			},
		},

		Ajuda: {
			screen: Ajuda,
			navigationOptions: {
				title: "Ajuda",
				animationEnabled: true,

				headerShown: true,
				headerTintColor: "#fff",
				headerStyle: {
					backgroundColor: "#ca2929",
				},
			},
		},

		Config: {
			screen: Config,
			navigationOptions: {
				title: "Configurações",
				animationEnabled: true,

				headerShown: true,
				headerTintColor: "#fff",
				headerStyle: {
					backgroundColor: "#ca2929",
				},
			},
		},

		Notifications: {
			screen: Notifications,
			navigationOptions: {
				title: "Notificações",
				animationEnabled: true,

				headerShown: true,
				headerTintColor: "#fff",
				headerStyle: {
					backgroundColor: "#ca2929",
				},
			},
		},

		editProfile: {
			screen: editProfile,

			navigationOptions: {
				title: "Editar Perfil",
				animationEnabled: true,

				headerShown: true,
				headerTintColor: "#fff",
				headerStyle: {
					backgroundColor: "#ca2929",
				},
			},
		},

		editNotifications: {
			screen: editNotifications,
		},

		Home: {
			screen: NavBar,
		},

		Achiv: {
			screen: Achievements,
			navigationOptions: {
				title: "Conquistas",
				animationEnabled: true,

				headerShown: true,
				headerTintColor: "#fff",
				headerStyle: {
					backgroundColor: "#ca2929",
				},
			},
		},
	},
	{
		defaultNavigationOptions: {
			animationEnabled: false,
			headerShown: false,
		},
	}
);

export default createAppContainer(StackNavigation);
