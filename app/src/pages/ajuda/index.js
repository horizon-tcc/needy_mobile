import React from "react";
import { View, Text, FlatList, ToastAndroid } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ConfigurationDefault from '../../components/ConfigurationDefault';
import styles from './styles';
function Ajuda() {
	return (
		<View style={styles.container}>
			
			<ConfigurationDefault 
				hasRoute={false}
				onPress={() => ToastAndroid.show('Redirecionado para um site',ToastAndroid.SHORT)}
				subtitle={false}
				title={'FAQ'}
				icon={	
					<FontAwesome5
						name="question-circle"
						color={"#ca2929"}
						size={23}
					/>
				}
			/>

			<ConfigurationDefault 
				
				hasRoute={false}
				onPress={() => ToastAndroid.show('Redirecionado para uma tela com form',ToastAndroid.SHORT)}
				subtitle={false}
				title={'Fale Conosco'}
				icon={	
					<FontAwesome5
						name="comments"
						color={"#ca2929"}
						size={23}
					/>
				}

			/>

			
			<ConfigurationDefault 
				
				hasRoute={false}
				onPress={() => ToastAndroid.show('Redirecionado para uma tela no app',ToastAndroid.SHORT)}
				subtitle={false}
				title={'Termos e Política de Privacidade'}
				icon={	
					<FontAwesome5
						name="clipboard"
						color={"#ca2929"}
						size={23}
					/>
				}

			/>
			

			
			<ConfigurationDefault 
				
				hasRoute={false}
				onPress={() => ToastAndroid.show('Redirecionado para uma tela com form',ToastAndroid.SHORT)}
				subtitle={false}
				title={'Dados do Aplicativo'}
				icon={	
					<FontAwesome5
						name="info-circle"
						color={"#ca2929"}
						size={23}
					/>
				}

			/>
			
		</View>
	);
}



export default Ajuda;
