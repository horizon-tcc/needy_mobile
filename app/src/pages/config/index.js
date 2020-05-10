import React from "react";
import { View, Text, Image, Share ,AsyncStorage} from "react-native";
import styles from "./styles";
import {
	TouchableHighlight,
	TouchableOpacity,
} from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";
import ConfigurationDefault from "../../components/ConfigurationDefault";

class Config extends React.Component {
	
	async removeToken() {
		try {
			await AsyncStorage.removeItem("token");
		} catch (error) {
			console.log(error);
			
		}
	}
	signOut = () => {
		this.removeToken();
	}

	render() {
		return (
			<View style={styles.container}>
				<ConfigurationDefault
					title={"Editar Perfil"}
					subtitle={true}
					info={"Endereço, E-mail, Privacidade"}
					icon={
						<FontAwesome5
							name="user-cog"
							color={"#ca2929"}
							size={23}
						/>
					}
					hasRoute={true}
					navigateTo={"editPerfil"}
				/>

				<ConfigurationDefault
					title={"Notificações"}
					subtitle={true}
					info={"Configurações de toque, Vibrar"}
					hasRoute={true}
					icon={
						<Image
							source={require("../../assets/images/geral/icons/bell.png")}
							style={{ width: 23, height: 23 }}
						/>
					}
					navigateTo={"editNotifications"}
				/>

				<ConfigurationDefault
					title={"Tema"}
					subtitle={true}
					info={"Em Breve!"}
					icon={
						<FontAwesome5
							name="paint-brush"
							color={"#ca2929"}
							size={23}
						/>
					}
					hasRoute={true}
					navigateTo={"Perfil"}
				/>

				<ConfigurationDefault
					title={"Sair"}
					subtitle={false}
					icon={
						<FontAwesome5
							name="sign-out-alt"
							color={"#ca2929"}
							size={23}
						/>
					}
					hasRoute={false}
					onPress={this.signOut}
				/>

				<Text
					style={{
						alignSelf: "center",
						color: "#b8b8b8",
						fontWeight: "bold",
					}}
				>
					Outros
				</Text>

				<ConfigurationDefault
					title={"Ajuda"}
					subtitle={false}
					icon={
						<FontAwesome5
							name="question-circle"
							color={"#ca2929"}
							size={23}
						/>
					}
					hasRoute={true}
					navigateTo={"Ajuda"}
				/>

				<ConfigurationDefault
					title={"Compartilhe com os amigos"}
					subtitle={false}
					icon={
						<Image
							source={require("../../assets/images/geral/icons/share.png")}
							style={{ width: 23, height: 23 }}
						/>
					}
					hasRoute={true}
					navigateTo={"Perfil"}
				/>
			</View>
		);
	}
}

export default Config;
