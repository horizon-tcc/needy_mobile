import React, { useState } from "react";
import {
	Alert,
	Modal,
	Text,
	TouchableHighlight,
	View,
	Image,
	TouchableOpacity,
} from "react-native";

const IconModal = (props) => {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<View>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert("O modal foi fechado.");
				}}
			>
				<View
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
						marginTop: 22,
					}}
				>
					<View
						style={{
							margin: 20,
							backgroundColor: "white",
							borderRadius: 20,
							padding: 35,
							alignItems: "center",
							shadowColor: "#000",
							shadowOffset: {
								width: 0,
								height: 2,
							},
							shadowOpacity: 0.25,
							shadowRadius: 3.84,
							elevation: 5,
						}}
					>
						<Image source={props.caminhoIcone} />
						<Text
							style={{
								marginBottom: 15,
								textAlign: "center",
								fontSize: 17,
								color: "#8c8c8c",
							}}
						>
							{props.textoModal}
						</Text>

						<TouchableHighlight
							style={{
								padding: 10,
								borderRadius: 5,
								backgroundColor: "#2196F3",
							}}
							onPress={() => {
								setModalVisible(!modalVisible);
							}}
						>
							<Text
								style={{
									color: "#fff",
									fontWeight: "bold",
								}}
							>
								FECHAR
							</Text>
						</TouchableHighlight>
					</View>
				</View>
			</Modal>

			<TouchableOpacity
				onPress={() => {
					setModalVisible(true);
				}}
			>
				<Image source={props.caminhoIcone} />
			</TouchableOpacity>
		</View>
	);
};
// }

export default IconModal;
