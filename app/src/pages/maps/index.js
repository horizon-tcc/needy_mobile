// Ícones feitos por <a href="https://www.flaticon.com/br/autores/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/br/" title="Flaticon"> www.flaticon.com</a>
// Ícones feitos por <a href="https://www.flaticon.com/br/autores/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/br/" title="Flaticon"> www.flaticon.com</a>
import React from "react";
import MapView, { Marker } from "react-native-maps";
import styles from "./styles";
import { View } from "react-native";
import Markers from "../../components/Markers";

export default class Maps extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<MapView
					style={styles.mapStyle}
					initialRegion={{
						latitude: -23.5530698,
						longitude: -46.4002202,
						latitudeDelta: 0.0043,
						longitudeDelta: 0.0034,
					}}
				>
					<Markers />
				</MapView>
			</View>
		);
	}
}
