// Ícones feitos por <a href="https://www.flaticon.com/br/autores/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/br/" title="Flaticon"> www.flaticon.com</a>
// Ícones feitos por <a href="https://www.flaticon.com/br/autores/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/br/" title="Flaticon"> www.flaticon.com</a>
import React, {useEffect, useState} from "react";
import MapView, { Marker } from "react-native-maps";
import styles from "./styles";
import { View } from "react-native";
import Markers from "../../components/Markers";
import * as Location from 'expo-location';

const Maps = () => {

	const [initialPosition, setInitialPosition] = useState([0,0]);

	// PEGA A LOCALIZAÇÃO DO USUÁRIO
	useEffect(() => {
		async function loadPosition(){
			const { status } = await Location.requestPermissionsAsync()
			if(status !== 'granted'){
				Alert.alert('Opsss...', 'Precisamos de sua permissão para obter a localização');
				return;
			}
			const location = await Location.getCurrentPositionAsync();
			const { latitude, longitude } = location.coords;
			console.log(`Coordenadas: latidude=${latitude} longitude=${longitude}`);
			setInitialPosition([latitude, longitude]);
		}
		loadPosition();
	})


	return (
		<View style={styles.container}>
			<MapView
				style={styles.mapStyle}
				initialRegion={{
					latitude: initialPosition[0],
					longitude: initialPosition[1],
					latitudeDelta: 0.0014,
					longitudeDelta: 0.0014,
				}}
			>
				{/* <Markers /> */}
			</MapView>
		</View>
	);
}

export default Maps;