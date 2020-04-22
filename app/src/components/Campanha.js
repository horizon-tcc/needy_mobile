import React, { Component } from "react";
import { View, Image, TouchableOpacity } from "react-native";

export default class Campanha extends Component {
	render() {
		return (
			<View
				style={{
					marginTop: 30,
				}}
			>
				<TouchableOpacity>
					<Image
						style={{
							borderRadius: 15,
							width: 330,
							height: 200,
							marginRight: 20,
						}}
						source={this.props.imgURL}
					/>
				</TouchableOpacity>
			</View>
		);
	}
}
