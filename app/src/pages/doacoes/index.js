import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import styles from "./styles";
import { TouchableNativeFeedback, FlatList } from "react-native-gesture-handler";
import AuthContext from '../../contexts/auth';
import axios from 'axios';


const Doacoes = ({ navigation }) => {
	const { donations, refreshDonations, token } = React.useContext(AuthContext);
	const avaliacao = 1;
	const aprovado = 2;
	const negada = 0;
	var j = 0;
	console.log(donations.doacoes)
	const [nome, setNome] = useState([]);

	React.useEffect(() => {
		for (let index = 0; index < donations.doacoes.length; index++) {
			axios({
				method: "GET",
				url: `https://needy-api.herokuapp.com/bancos/${donations.doacoes[index].idBancoSangue}`,
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}).then((response) => {
				nome.push(response.data.nomeBancoSangue);
			}).catch((error) => {
				console.log(`ERRO: ${error}`);
			});

		}

	}, []);


	console.log(nome);
	return (
		<ScrollView style={{
			backgroundColor: '#fff',
		}}>

			<FlatList
				data={donations.doacoes}
				renderItem={({ item, index }) => {


					console.log(j);
					return (
						<>
							<TouchableNativeFeedback>
								<View
									style={{
										display: "flex",
										justifyContent: "flex-start",
										flexDirection: "row",
										alignItems: "center",
										padding: 15,
										backgroundColor: '#fff',


									}}
								>
									<View
										style={{
											backgroundColor: "#fff",
											width: 100,
											height: 100,
											borderRadius: 10,
											marginRight: 10,
											alignItems: 'center',
											justifyContent: 'center',
											shadowColor: "#000",
											shadowOffset: {
												width: 0,
												height: 2,
											},
											shadowOpacity: 0.25,
											shadowRadius: 3.84,

											elevation: 5,

										}}
									>
										{item.statusDoacao == aprovado ?
											<Image
												source={require('../../assets/images/aprovado-icon.png')}
												style={{
													width: 80,
													height: 80,
												}}

											/> : item.statusDoacao == avaliacao ?
												<Image
													source={require('../../assets/images/analise-icon.png')}
													style={{
														width: 80,
														height: 80,
													}}

												/> : item.statusDoacao == negada ?
													<Image
														source={require('../../assets/images/negado-icon.png')}
														style={{
															width: 80,
															height: 80,
														}}

													/> : <> </>
										}
									</View>
									<View>
										<Text
											style={{
												fontSize: 20,
												fontWeight: "700",
												color: "rgba(0,0,0,0.75)",
											}}
										>{item.dataDoacao}</Text>
										<Text
											style={{
												fontWeight: "700",
												color: "rgba(0,0,0,0.6)",
												width: 200,
											}}
										>{nome[index]}</Text>
										<Text
											style={{
												fontWeight: "bold",
												color: item.statusDoacao === avaliacao ? "#FFE529" : item.statusDoacao === aprovado ? '#69E781' : '#FF0000'
											}}
										>Status: {item.statusDoacao === avaliacao ? 'Em avaliação' : item.statusDoacao === aprovado ? 'Aprovada' : item.statusDoacao === negada ? 'Negada' : 'Desconhecido'}</Text>
										<Text
											style={{
												fontSize: 12,
												fontWeight: "700",
												color: 'rgba(0,0,0,0.9)',
											}}
										>{item.statusDoacao != negada ? 'Litros doados: ' + item.totalDoacao : ''}</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
						</>
					)
				}}>
			</FlatList>

		</ScrollView >
	)
};
export default Doacoes;
