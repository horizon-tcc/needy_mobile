import React, {Component, Colors} from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import {ProgressBar} from 'react-native-paper';

export default class Home extends Component {
    render() {
    

    return (
      <View style={styles.background}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        

     

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