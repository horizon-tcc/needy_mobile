import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const Doacoes = ({ navigation }) => {
	return (
		<ScrollView style={styles.container}>
			<TouchableOpacity>
				<View
					style={{
						display: "flex",
						justifyContent: "flex-start",
						flexDirection: "row",
						alignItems: "center",
						padding: 15,
					}}
				>
					<View
						style={{
							backgroundColor: "#f4dcdb",
							padding: 12,
							borderRadius: 10,
							marginRight: 10
						}}
					>
						<Image
							source={require('../../assets/images/sangue.png')}
						/>
					</View>
					<View>
						<Text
							style={{
								fontSize: 20,
								fontWeight: "700",
								color: "#8c8c8c",
							}}
						>10/07/2020</Text>
						<Text
							style={{
								fontWeight: "700",
								color: "#c8c8c8"
							}}
						>Banco de Sangue Santa Marcelina</Text>
						<Text
							style={{
								fontWeight: "500",
								color: "#c8c8c8"
							}}
						>Status: Em análise</Text>
						<Text
							style={{
								fontSize: 12,
								fontWeight: "700",
								color: "#c8c8c8",
							}}
						>ver mais</Text>
					</View>
				</View>
			</TouchableOpacity>
		</ScrollView>
	)
};
export default Doacoes;
