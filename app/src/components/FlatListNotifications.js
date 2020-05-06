import React from "react";
import { View, Text, FlatList } from "react-native";
import Foundation from 'react-native-vector-icons/Foundation';

const data_notifications = [
	{
		id: "1",
		titulo: "Título Notificação",
		descricao: "Essa é a breve descrição da notificação",
	},
	{
		id: "2",
		titulo: "Título Notificação",
		descricao: "Essa é a breve descrição da notificação",
	},
	{
		id: "3",
		titulo: "Título Notificação",
		descricao: "Essa é a breve descrição da notificação",
	},

];

function Notificacao({ titulo, descricao }) {
	return (
		<View
			style={{
				backgroundColor: "#fff",
				
				flexDirection: "column",
			}}
		>

			<View style={{
				width: 80,
				height: 60,
				backgroundColor: '#ca2929',
				position: 'absolute',
				marginTop: 20,
				marginLeft: 15,
				alignSelf: 'auto',
				borderTopRightRadius: 10,
				borderBottomRightRadius: 10,
				alignItems:'center',
				justifyContent:'center',
			}}>

				<Foundation name='megaphone' size={30} color={'#fff'}/>
			</View>
			<Text
				style={{
					color: "#ca2929",
					fontWeight: "bold",
					marginTop: 20,
					marginLeft: 80,
					fontSize: 15,
					paddingHorizontal: 30,
				}}
			>
				{titulo}
			</Text>
			<Text
				style={{
					fontSize: 14,
					color: "#8c8c8c",
					marginTop:0 ,
					marginLeft: 80,
					paddingHorizontal: 30,
					paddingVertical: 10,

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
