import React from "react";
import { AsyncStorage } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
import Loading from './src/pages/loading/index'

const Stack = createStackNavigator();
const NavBar = createBottomTabNavigator();

console.disableYellowBox = true;

const AuthContext = React.createContext();



const BottomNav = () => {
	return (
		<NavBar.Navigator
			tabBarOptions={
				{
					activeTintColor: '#ca2929',
					showLabel: false,
					inactiveTintColor: '#8c8c8'

				}
			}
		>
			<NavBar.Screen
				name="Home"
				component={Home}
				t
				options={
					{
						tabBarIcon: ({ focused }) => <FontAwesome5 name='home' color={focused ? '#ca2929' : '#8c8c8c'} size={25} />,

					}
				}
			/>


			<NavBar.Screen
				name="Maps"
				component={Maps}
				options={{
					tabBarIcon: () => <MapButton />,
				}}
			/>


			<NavBar.Screen
				name="Perfil"
				component={Perfil}
				options={{
					tabBarIcon: ({ focused }) => <FontAwesome5 name="user" color={focused ? '#ca2929' : '#8c8c8c'} size={24} />
				}}

			/>
		</NavBar.Navigator>


	)

}

export default App = () => {

	const [isLoading, setIsLoading] = React.useState(true);
	const [token, setToken] = React.useState(null);
	const [userLogged, setUserLogged] = React.useState(false);

	const checkIfLogged = async () => {
		try {
			const value = await AsyncStorage.getItem("token");
			if (value !== null) {
				// We have data!!
				console.log("RESULTADO " + value);
				
				setToken(value);
				setUserLogged(true);


			} else {
				setUserLogged(false);
				
			}
		} catch (error) {
			// Error retrieving data
			console.log(error);
		}

	}

	checkIfLogged();

	const authContext = React.useMemo(() => {
		return {
			logar: () => {
				setIsLoading(false);
				setUserLogged(true);
			},

			deslogar: () => {
				setIsLoading(false);
				setUserLogged(false);

			}
		}
	}, [])


	React.useEffect(() => {
		setInterval(() => {
			setIsLoading(!isLoading);

		}, 2000);
	}, []);


	return (

		<AuthContext.Provider value={authContext}>
			<NavigationContainer>

				<Stack.Navigator
					screenOptions={{
						headerShown: false,
						animationEnabled: false,
					}}
				>



					{isLoading ? <Stack.Screen name="Loading" component={Loading} /> : userLogged ? (
						<>



							<Stack.Screen
								name="Home"
								component={BottomNav}
							/>




							<Stack.Screen
								name="Config"
								component={Config}
								options={{
									title: "Configurações",
									animationEnabled: true,

									headerShown: true,
									headerTintColor: "#fff",
									headerStyle: {
										backgroundColor: "#ca2929",
									},
								}}
							/>


							<Stack.Screen
								name="Achiv"
								component={Achievements}
								options={{
									title: "Conquistas",
									animationEnabled: true,

									headerShown: true,
									headerTintColor: "#fff",
									headerStyle: {
										backgroundColor: "#ca2929",
									},
								}}
							/>



							<Stack.Screen
								name="editNotifications"
								component={editNotifications}
								options={{
									title: "Editar Notificações",
									animationEnabled: true,

									headerShown: true,
									headerTintColor: "#fff",
									headerStyle: {
										backgroundColor: "#ca2929",
									},
								}}
							/>



							<Stack.Screen
								name="Carteirinha"
								component={Carteirinha}
								options={{
									title: "Carteirinha",
									animationEnabled: true,

									headerShown: true,
									headerTintColor: "#fff",
									headerStyle: {
										backgroundColor: "#ca2929",
									},
								}}
							/>


							<Stack.Screen
								name="Notifications"
								component={Notifications}
								options={{
									title: "Notificações",
									animationEnabled: true,

									headerShown: true,
									headerTintColor: "#fff",
									headerStyle: {
										backgroundColor: "#ca2929",
									},
								}}
							/>

							<Stack.Screen
								name="editProfile"
								component={editProfile}
								options={{
									title: "Editar Perfil",
									animationEnabled: true,

									headerShown: true,
									headerTintColor: "#fff",
									headerStyle: {
										backgroundColor: "#ca2929",
									},
								}}
							/>


							<Stack.Screen
								name="Ajuda"
								component={Ajuda}
								options={{
									title: "Ajuda",
									animationEnabled: true,

									headerShown: true,
									headerTintColor: "#fff",
									headerStyle: {
										backgroundColor: "#ca2929",
									},
								}}
							/>

						</>
					) : (
							<>
								<Stack.Screen
									name="Login"
									component={Login}
								/>


								<Stack.Screen
									name="Intro"
									component={Intro}
								/>
							</>
						)}
				</Stack.Navigator>
			</NavigationContainer>
		</AuthContext.Provider>
	)
}
export { AuthContext };

