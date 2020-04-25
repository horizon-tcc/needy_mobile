import React from "react";
import { View, Text, FlatList } from "react-native";
const data_notifications = [
	{
		id: 1,
		titulo: "Titulo Notificação",
		descricao: "Essa é a breve descrição da notificação",
	},
	{
		id: 2,
		titulo: "Titulo Notificação",
		descricao: "Essa é a breve descrição da notificação",
	},
	{
		id: 3,
		titulo: "Titulo Notificação",
		descricao: "Essa é a breve descrição da notificação",
	},
	{
		id: 4,
		titulo: "Titulo Notificação",
		descricao: "Essa é a breve descrição da notificação",
	},
	{
		id: 5,
		titulo: "Titulo Notificação",
		descricao: "Essa é a breve descrição da notificação",
	},
];

function Notificacao({ titulo, descricao }) {
	return (
		<View
			style={{
				backgroundColor: "#fff",
				padding: 10,
				borderBottomWidth: 0.5,
				borderBottomColor: "#8c8c8c",

				display: "flex",
				flexDirection: "column",
			}}
		>
			<Text
				style={{
					color: "#ca2929",
					fontWeight: "bold",
					fontSize: 15,
				}}
			>
				{titulo}
			</Text>
			<Text
				style={{
					fontSize: 14,
					color: "#8c8c8c",
				}}
			>
				{descricao}
			</Text>
		</View>
	);
}

function Notification() {
	return (
		<FlatList
			data={data_notifications}
			renderItem={({ item }) => (
				<Notificacao
					titulo={item.titulo}
					descricao={item.descricao}
				/>
			)}
		/>
	);
}

export default Notification;
