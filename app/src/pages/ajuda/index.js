import React from "react";
import { View, Text, FlatList } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TapGestureHandler } from "react-native-gesture-handler";
const data_ajuda = [
	{
		id: 1,
		opcao: "FAQ",
		tela: "Home",
	},
	{
		id: 2,
		opcao: "Fale Conosco",
		tela: "Home",
	},
	{
		id: 3,
		opcao: "Termos e Política de Privacidade",
		tela: "Home",
	},
	{
		id: 4,
		opcao: "Dados do Aplicativo",
		tela: "Home",
	},
];

function Ajuda({ opcao, tela }) {
	return (
		<TapGestureHandler
			onHandlerStateChange={() => this.props.navigation.navigate(tela)}
		>
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
		</TapGestureHandler>
	);
}

function help() {
	return (
		<View>
			<FlatList
				data={data_ajuda}
				renderItem={({ item }) => (
					<Ajuda opcao={item.opcao} tela={item.tela} />
				)}
			/>
		</View>
	);
}

export default help;
