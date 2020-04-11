import React, { Component } from "react";
import {
	View,
	Text,
	ImageBackground,
	ScrollView,
	FlatList,
} from "react-native";
import styles from "./styles";

const DATA = [
	{
		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		title: "First Item",
	},
	{
		id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
		title: "Second Item",
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d72",
		title: "Third Item",
	},
];

function Item({ title }) {
	return (
		<View style={styles.item}>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
}

export default class Home extends Component {
	constructor(props) {
		super();

		this.state = {
			navigation: props,
		};
	}

	render() {
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
						<ScrollView
							style={styles.campanhas}
							horizontal={true}
						>
							<FlatList
								style={styles.campanha}
								data={DATA}
								renderItem={({ item }) => (
									<Item title={item.title} />
								)}
								keyExtractor={(item) => item.id}
							/>
						</ScrollView>
						<View>
							<FlatList></FlatList>
						</View>
					</ScrollView>
				</ImageBackground>
			</View>
		);
	}
}
