import React from "react";
import {
	View,
	Text,
	ImageBackground,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import styles from "./styles";

import Campanha from "../../components/Campanha";
import Titulo from "./../../components/Titulo";
import Notification from "./../../components/FlatListNotifications";

export default class Home extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<ImageBackground
					style={styles.imageBg}
					source={require("./../../assets/images/telas/telaHome/bgHome.png")}
				>
					<ScrollView>
						<View>
							<Text style={styles.tituloApp}>Needy</Text>
						</View>

						<View>
							<ScrollView>
								<TouchableOpacity>
									<View
										style={{
											backgroundColor: "#fff",
											padding: 50,
											width: 150,
											borderRadius: 20,
										}}
									>
										<Text>Opção</Text>
									</View>
								</TouchableOpacity>
							</ScrollView>
						</View>
						<ScrollView
							style={styles.campanhas}
							horizontal={true}
							scrollEventThrottle={16}
							showsHorizontalScrollIndicator={false}
						>
							<Campanha
								imgURL={require("./../../assets/images/campanhas/banner_doacao_sangue.jpg")}
							/>
							<Campanha
								imgURL={require("./../../assets/images/campanhas/banner_doacao_sangue.jpg")}
							/>
							<Campanha
								imgURL={require("./../../assets/images/campanhas/banner_doacao_sangue.jpg")}
							/>
							<Campanha
								imgURL={require("./../../assets/images/campanhas/banner_doacao_sangue.jpg")}
							/>
						</ScrollView>
						<View
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<Titulo titulo="Notificações"></Titulo>

							<TouchableOpacity
								onPress={() =>
									this.props.navigation.navigate(
										"Notifications"
									)
								}
							>
								<Text
									style={{
										fontWeight: "bold",
										color: "#8c8c8c",
									}}
								>
									ver mais >
								</Text>
							</TouchableOpacity>
						</View>
						<Notification />
					</ScrollView>
				</ImageBackground>
			</View>
		);
	}
}
