import React from "react";
import { View, Text, FlatList } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
const data_ajuda = [
	{
		id: 1,
		opcao: "FAQ",
	},
];

function Ajuda({ opcao }) {
	return (
		<View
			style={{
				backgroundColor: "#fff",
				padding: 20,
				borderBottomWidth: 0.5,
				borderBottomColor: "#8c8c8c",

				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
			}}
		>
			<Text
				style={{
					color: "#ca2929",
					fontWeight: "bold",
					fontSize: 15,
				}}
			>
				{opcao}
			</Text>
			<AntDesign name="arrowright" size={18} color="#8c8c8c" />
		</View>
	);
}

function help() {
	return (
		<View>
			<FlatList
				data={data_ajuda}
				renderItem={({ item }) => <Ajuda opcao={item.opcao} />}
			/>
			<FlatList
				data={data_ajuda}
				renderItem={({ item }) => <Ajuda opcao={item.opcao} />}
			/>
			<FlatList
				data={data_ajuda}
				renderItem={({ item }) => <Ajuda opcao={item.opcao} />}
			/>
			<FlatList
				data={data_ajuda}
				renderItem={({ item }) => <Ajuda opcao={item.opcao} />}
			/>
		</View>
	);
}

export default help;
