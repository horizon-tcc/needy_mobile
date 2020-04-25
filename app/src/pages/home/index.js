import React, { Component } from "react";
import {
	View,
	Text,
	ImageBackground,
	ScrollView,
	Image,
	TouchableOpacity,
	FlatList,
} from "react-native";
import styles from "./styles";

import Campanha from "../../components/Campanha";
import Titulo from "./../../components/Titulo";
import Notification from "./../../components/FlatListNotifications";

// const data_notifications = [
// 	{
// 		id: 1,
// 		titulo: "Titulo Notificação",
// 		descricao: "Essa é a breve descrição da notificação",
// 	},
// 	{
// 		id: 2,
// 		titulo: "Titulo Notificação",
// 		descricao: "Essa é a breve descrição da notificação",
// 	},
// 	{
// 		id: 3,
// 		titulo: "Titulo Notificação",
// 		descricao: "Essa é a breve descrição da notificação",
// 	},
// 	{
// 		id: 4,
// 		titulo: "Titulo Notificação",
// 		descricao: "Essa é a breve descrição da notificação",
// 	},
// 	{
// 		id: 5,
// 		titulo: "Titulo Notificação",
// 		descricao: "Essa é a breve descrição da notificação",
// 	},
// ];

// function Notificacao({ titulo, descricao }) {
// 	return (
// 		<View
// 			style={{
// 				backgroundColor: "#fff",
// 				padding: 10,
// 				borderBottomWidth: 0.5,
// 				borderBottomColor: "#8c8c8c",

// 				display: "flex",
// 				flexDirection: "column",
// 			}}
// 		>
// 			<Text
// 				style={{
// 					color: "#ca2929",
// 					fontWeight: "bold",
// 					fontSize: 15,
// 				}}
// 			>
// 				{titulo}
// 			</Text>
// 			<Text
// 				style={{
// 					fontSize: 14,
// 					color: "#8c8c8c",
// 				}}
// 			>
// 				{descricao}
// 			</Text>
// 		</View>
// 	);
// }

function Home() {
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

					<View>
						<ScrollView>
							<TouchableOpacity>
								<View
									style={{
										backgroundColor: "#fff",
										padding: 50,
										width: 150,
										borderRadius: 20,
									}}
								>
									<Text>Opção</Text>
								</View>
							</TouchableOpacity>
						</ScrollView>
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
					<Titulo
						titulo="Notificações"
						acaoTitulo="ver mais >"
					></Titulo>
					{/* <FlatList
						data={data_notifications}
						renderItem={({ item }) => (
							<Notificacao
								titulo={item.titulo}
								descricao={item.descricao}
							/>
						)}
					/> */}
					<Notification />
				</ScrollView>
			</ImageBackground>
		</View>
	);
}

export default Home;
