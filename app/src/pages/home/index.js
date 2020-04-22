import React, { Component } from "react";
import { View, Text, ImageBackground, ScrollView, Image } from "react-native";
import styles from "./styles";

import Campanha from "../../components/Campanha";

export default class Home extends Component {
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
					</ScrollView>
				</ImageBackground>
			</View>
		);
	}
}
