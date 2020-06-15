import React from "react";
import { View, Text, FlatList, ToastAndroid, Linking } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ConfigurationDefault from '../../components/ConfigurationDefault';
import styles from './styles';
function Ajuda({navigation}) {
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
				onPress={() => Linking.openURL('mailto:needyhorizon@gmail.com?subject=Fale Conosco | Horizon - Needy')}
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
				onPress={() => navigation.navigate('Termo')}
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
