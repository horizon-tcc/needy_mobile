import React from "react";
import {
	View,
	Text,
	ImageBackground,
	ScrollView,
	TouchableOpacity,
	AsyncStorage,
} from "react-native";
import styles from "./styles";

import Campanha from "../../components/Campanha";
import Notification from "./../../components/FlatListNotifications";
import ConfigurationDefault from "../../components/ConfigurationDefault";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

const _retrieveData = async () => {
	try {
		const value = await AsyncStorage.getItem("token");
		if (value !== null) {
			// We have data!!
			console.log("RESULTADO " + value);
		}
	} catch (error) {
		// Error retrieving data
		console.log(error);
	}
};

export default class Home extends React.Component {
	render() {
		_retrieveData();


		return (
			<View style={styles.container}>
				<ScrollView>
					<ImageBackground
						style={styles.imageBg}
						source={require("./../../assets/images/telas/telaHome/bgHome.png")}
					>
						<View>
							<Text style={styles.tituloApp}>Needy</Text>
						</View>

						<Campanha />

						<ConfigurationDefault
							title={"Notificações"}
							hasRoute={true}
							navigateTo={"Notifications"}
							icon={
								<FontAwesome5
									name="bell"
									size={23}
									color="#ca2929"
								/>
							}
							arrow={true}
							subtitle={false}
						/>

						<Notification />
					</ImageBackground>
				</ScrollView>
			</View>
		);
	}
}
