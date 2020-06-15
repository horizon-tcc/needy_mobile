import React, {useEffect, useState} from "react";
import { View, SafeAreaView, Text, Image, AsyncStorage } from "react-native";
import styles from "./styles";
import {
	TouchableOpacity,
	TapGestureHandler,
	ScrollView,
} from "react-native-gesture-handler";
import ProgressCircle from "react-native-progress-circle";
import { Tooltip } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";
import api from './../../services/api';
import base64 from 'base-64';
import axios from "axios";

const Profile = ({navigation}) =>  {

	const [dataUser, setDataUser] = useState({});
	const [id, setId] = useState();
	const [token, setToken] = useState();

	const checkIfLogged = async () => {
		try {
		    	const token = await AsyncStorage.getItem("token");
			if (token !== null) {
				
				const parts = token.split('.');
				const payload = parts[1];
				const payload_decoded = base64.decode(payload);
				const newJSON = JSON.parse(payload_decoded.match(/\S+/)[0]);
				
				setId(String(newJSON.idUsuario));
				setToken(String(token));

				console.log(`
					ID: /${id}/
					TOKEN: /${token}/
				`);

			} else {
				console.log('não tem token guardado');
			}
		} catch (error) {
		    console.log(error);
		}
  
	 }
  
	 checkIfLogged();

	 useEffect(() => {
		api.get(`doadores/${id}`, {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		}).then(response => {
			setDataUser(response.data);
			console.log(response.data);
		}).catch(error => {
			console.log("ERRO AXIOS: " + error)
		});
	 }, [])

	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={styles.profileBackground}>
					<Image
						style={styles.profilePic}
						source={{
							uri:
								"https://scontent.fgru6-1.fna.fbcdn.net/v/t1.0-9/83743190_2660059810782257_5370719641435897856_n.jpg?_nc_cat=102&_nc_sid=85a577&_nc_eui2=AeHQEWPOJ1bkpoy1UdRwoZxkyu-U210QaFbK75TbXRBoVkshoJ0ZiH9Ab0piHkXCgfnCr1IJ02TosPJ-1NqdmwRR&_nc_oc=AQkAhx1MFSgpMj4_Lfy3YRR352IWwvBSHOvdjNyBTSkZAQjGq9P7nrLkMnHucfwf-TxqfFf_dTnBSQ4vy1i72s6L&_nc_ht=scontent.fgru6-1.fna&oh=5ffb66aa8e0a543f88ff5cd3e6fb9eed&oe=5EB24F03",
						}}
					/>

					<View style={styles.editBtn}>
						<TouchableOpacity
							onPress={() =>
								navigation.navigate(
									"Config"
								)
							}
						>
							<FontAwesome5
								name="cog"
								color="white"
								size={18}
							/>
						</TouchableOpacity>
					</View>

					<View style={styles.contentDiv}>
						<Text style={styles.welcomeText}>
							Olá, {dataUser.nomeDoador}
						</Text>

						<View style={styles.line} />
					</View>

					<View style={styles.achivContainer}>
						<Image
							style={styles.conquer}
							source={{
								uri:
									"https://i.pinimg.com/originals/c7/80/5e/c7805ee9aa1a16baaa33a7b1be2f220e.png",
							}}
						/>

						<View style={styles.infoContainer}>
							<View style={styles.divLine} />
							<Text style={styles.value}>10</Text>

							<Text style={styles.subOne}>
								Doações Realizadas
							</Text>

							<Text style={styles.valueTwo}>
								4,5L
							</Text>

							<Text style={styles.subTwo}>
								Litros Doados
							</Text>
						</View>
					</View>

					<View style={styles.subContainer}>
						<Tooltip
							popover={
								<Text
									style={{
										color: "#fff",
										fontWeight: "bold",
									}}
								>
									Progresso até estar apto a
									doar novamente
								</Text>
							}
							containerStyle={{
								backgroundColor: "#ec6262",
							}}
							pointerColor={"#fff"}
							height={80}
							width={200}
						>
							<FontAwesome5
								name="info-circle"
								color={"#ec6262"}
								size={22}
							/>
						</Tooltip>
						<ProgressCircle
							percent={73}
							radius={60}
							borderWidth={10}
							color="#ca2929"
							shadowColor="#fff"
							containerStyle={
								styles.customOuterCircle
							}
							outerCircleStyle={styles.insideCircle}
						>
							<Text
								style={{
									fontSize: 18,
									color: "#ca2929",
								}}
							>
								{"73%"}
							</Text>
						</ProgressCircle>

						<View style={styles.dayInfo}>
							<Text style={styles.dateSub}>
								Data da Última Doação
							</Text>
							<Text style={styles.date}> 14 </Text>
							<View style={styles.divisor} />
							<Text style={styles.dateMonth}>
								{" "}
								MAR{" "}
							</Text>
						</View>
					</View>

					<View style={styles.cardContainer}>
						<TapGestureHandler
							onHandlerStateChange={() =>
								this.props.navigation.navigate(
									"Achiv"
								)
							}
						>
							<View style={styles.optionOne}>
								<Image
									style={styles.optionImage}
									source={require("../../assets/images/telas/telaPerfil/conquista.png")}
								/>

								<Text style={styles.optionSub}>
									Conquistas
								</Text>
							</View>
						</TapGestureHandler>

						<TapGestureHandler
							onHandlerStateChange={() =>
								this.props.navigation.navigate(
									"Carteirinha"
								)
							}
						>
							<View style={styles.optionTwo}>
								<Image
									style={styles.optionImage}
									source={require("../../assets/images/telas/telaPerfil/carteirinha.png")}
								/>
								<Text style={styles.optionSub}>
									Documento
								</Text>
							</View>
						</TapGestureHandler>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}

export default Profile;