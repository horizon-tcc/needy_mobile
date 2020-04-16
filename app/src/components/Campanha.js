import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import TapGestureHandler from "react-native-gesture-handler";
// export default class Campanha extends Component {
// 	render() {
// 		return (
// 			<View>
// 				<Text>Botao</Text>
// 			</View>
// 		);
// 	}
// }

const Campanha = ({ props }) => {
	function navegar(props) {
		props.navigation.navigate("Profile");
	}

	return (
		<View
			style={{
				marginTop: 30,
			}}
		>
			<TouchableOpacity onPress={() => navegar(props)}>
				<Image
					style={{
						borderRadius: 35,
						width: 330,
						height: 200,
					}}
					source={require("")}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default Campanha;
