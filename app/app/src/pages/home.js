import React, {Component} from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default class Home extends Component {
    render() {
    

    return (
      <View style={styles.background}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Text>Home</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  background: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor:'#fff'
	},



})