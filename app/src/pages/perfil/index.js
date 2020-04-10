import React from 'react';
import { View,SafeAreaView, Text, Image } from 'react-native';
import styles from './styles'
import { TouchableOpacity, TapGestureHandler, ScrollView } from 'react-native-gesture-handler';
import ProgressCircle from 'react-native-progress-circle'

import { FontAwesome5 } from '@expo/vector-icons';






export default class Profile extends React.Component {
	render() {
		return (
			<SafeAreaView style={styles.container}>
				<View style={styles.profileBackground}>
				<Image
						style={styles.profilePic}
						source={{ uri: 'https://scontent.fgru6-1.fna.fbcdn.net/v/t1.0-9/83743190_2660059810782257_5370719641435897856_n.jpg?_nc_cat=102&_nc_sid=85a577&_nc_eui2=AeHQEWPOJ1bkpoy1UdRwoZxkyu-U210QaFbK75TbXRBoVkshoJ0ZiH9Ab0piHkXCgfnCr1IJ02TosPJ-1NqdmwRR&_nc_oc=AQkAhx1MFSgpMj4_Lfy3YRR352IWwvBSHOvdjNyBTSkZAQjGq9P7nrLkMnHucfwf-TxqfFf_dTnBSQ4vy1i72s6L&_nc_ht=scontent.fgru6-1.fna&oh=5ffb66aa8e0a543f88ff5cd3e6fb9eed&oe=5EB24F03' }}
					/>

				<ScrollView
					on
				>
				
					<View style={styles.editBtn}>
						<TouchableOpacity>
							<FontAwesome5 name='pen' color='white' size={18} />
						</TouchableOpacity>

					</View>



					<View style={styles.contentDiv}>
						<Text style={styles.welcomeText}>
							Olá, Manocchio
						</Text>

						<View style={styles.line} />
					</View>


					<View style={styles.achivContainer}>
						<Image
							style={styles.conquer}
							source={{ uri: 'https://i.pinimg.com/originals/c7/80/5e/c7805ee9aa1a16baaa33a7b1be2f220e.png' }}
						/>

						<View style={styles.infoContainer}>
							<View style={styles.divLine} />
							<Text style={styles.value}>
								10
							</Text>

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

						<ProgressCircle
							percent={33}
							radius={65}
							borderWidth={10}
							color="#ca2929"
							shadowColor="#fff"
							
							containerStyle={styles.customOuterCircle}
							outerCircleStyle={styles.insideCircle}
						>
							<Text style={{ fontSize: 18,color: '#ca2929' }}>{'33%'}</Text>
						</ProgressCircle>

						<View style={styles.dayInfo}>

						</View>
					</View>
					


					<View style={styles.cardContainer}>

						<TapGestureHandler>


							<View style={styles.optionOne}>
								<Image
									style={styles.optionImage}
									source={require('../../assets/images/telas/telaPerfil/conquista.png')}
								/>

								<Text style={styles.optionSub}>Conquistas</Text>
							</View>




						</TapGestureHandler>


						<TapGestureHandler>


							<View style={styles.optionTwo}>
								<Image
									style={styles.optionImage}
									source={require('../../assets/images/telas/telaPerfil/carteirinha.png')}
								/>
								<Text style={styles.optionSub}>Documento</Text>
							</View>




						</TapGestureHandler>

					</View>
					</ScrollView>
				</View>
			</SafeAreaView>
		);
	}
}