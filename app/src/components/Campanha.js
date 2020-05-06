import React, { Component } from "react";
import { View, Dimensions, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { getInputRangeFromIndexes } from 'react-native-snap-carousel';
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';

const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 0.5;
const itemHeight = 280;



const DATA = [];
for (let i = 0; i < 10; i++) {
	DATA.push(i)
}






export default class Campanha extends Component {


	state = {
		index: 0,
	}


	constructor(props) {
		super(props);
		this._renderItem = this._renderItem.bind(this)
	}






	_renderItem({ item }) {
		return (

			<TouchableOpacity>
				<View style={{

					width: itemWidth,
					height: itemHeight,
					borderRadius: 10,
					backgroundColor: '#fff',
					borderWidth: 1,
					borderColor: '#c8c8c8'
				}}>

					<View style={{
						height: 80,
						width: 15,
						backgroundColor: '#ca2929',
						position: 'absolute',
						marginTop: 30,
						borderTopRightRadius: 10,
						borderBottomRightRadius: 10,

					}} />

					<Image
						style={{
							width: itemWidth - 2,
							height: 145,
							borderTopLeftRadius: 10,
							borderTopRightRadius: 10,


						}}
						source={{
							uri:
								"https://www.ftsa.edu.br/home/images/banner_doe_sangue.png",
						}}

						resizeMode={'contain'}
						resizeMethod={'resize'}
					/>

					<View style={{
						height: 80,
						width: 15 - 2,
						backgroundColor: '#ca2929',
						position: 'absolute',
						marginTop: 30,
						borderTopLeftRadius: 10,
						borderBottomLeftRadius: 10,
						marginLeft: itemWidth - 15,

					}} />


					<View style={{
						backgroundColor: 'rgb(42,43,41)',
						width: itemWidth,
						marginTop: 20,
						height: 113,
						borderBottomLeftRadius: 10,
						borderBottomRightRadius: 10,

					}}>
						<View style={{
							backgroundColor: '#ec6262',
							width: 10,
							height: 60,
							margin: 10,
							marginTop: 30,
						}} />


						<Text style={{
							position: 'absolute',
							marginLeft: 40,
							marginTop: 45,
							fontSize: 20,
							color: '#fff',
							fontWeight: 'bold',
						}}>{`Campanha ${item + 1}`}</Text>

						<View style={{
							position: 'absolute',
							backgroundColor: '#ec6262',
							width: 70,
							height: 50,
							alignSelf: 'flex-end',
							marginTop: 63,
							borderBottomRightRadius: 10,
							borderTopLeftRadius: 10,
							alignContent: 'center',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
							<AntDesign name="arrowright" size={35} color="#fff" />


						</View>
					</View>




				</View>
			</TouchableOpacity>

		);
	}


	_scrollInterpolator(index, carouselProps) {
		const range = [3, 2, 1, 0, -1];
		const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
		const outputRange = range;

		return { inputRange, outputRange };
	}

	_animatedStyles(index, animatedValue, carouselProps) {
		const sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
		const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';

		return {
			zIndex: carouselProps.data.length - index,
			opacity: animatedValue.interpolate({
				inputRange: [2, 3],
				outputRange: [1, 0]
			}),
			transform: [{
				rotate: animatedValue.interpolate({
					inputRange: [-1, 0, 1, 2, 3],
					outputRange: ['-25deg', '0deg', '-3deg', '1.8deg', '0deg'],
					extrapolate: 'clamp'
				})
			}, {
				[translateProp]: animatedValue.interpolate({
					inputRange: [-1, 0, 1, 2, 3],
					outputRange: [
						-sizeRef * 0.5,
						0,
						-sizeRef, // centered
						-sizeRef * 2, // centered
						-sizeRef * 3 // centered
					],
					extrapolate: 'clamp'
				})
			}]
		};
	}

	render() {
		console.log(this.state.index)

		return (

			<View>

				<Carousel
					layout={'default'}
					ref={ref => this.carousel = ref}
					data={DATA}
					sliderWidth={sliderWidth}
					itemWidth={itemWidth}
					renderItem={this._renderItem}
					firstItem={0}
					inactiveSlideScale={0.94}
					inactiveSlideOpacity={0.7}
					onSnapToItem={index => this.setState({ activeIndex: index })}
					useScrollView={false}
					loop={true}
				/>


			</View>
		);
	}
}



