import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Titulo(props) {
	return (
		<View
			style={{
				padding: 10,
				justifyContent: "space-between",
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
			}}
		>
			<Text
				style={{
					fontSize: 20,
					fontWeight: "bold",
					color: "#8c8c8c",
				}}
			>
				{props.titulo}
			</Text>
		</View>
	);
}
