import React, { Component, Colors } from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from './styles'

export default class Home extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Home</Text>
			</View>
		);
	}
}

