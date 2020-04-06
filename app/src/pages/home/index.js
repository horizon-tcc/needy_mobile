import React, { Component, Colors } from "react";
import { View, Text, StatusBar, AsyncStorage } from "react-native";
import styles from "./styles";

export default class Home extends Component {
      constructor(props) {
            super();

            this.state = {
                  navigation: props,
            };
      }

      //  getData = async () => {
      //        try {
      //              const value = await AsyncStorage.getItem("@storage_Key");
      //              if (value !== null) {
      //                    // value previously stored
      //              }
      //        } catch (e) {
      //              // error reading value
      //        }
      //  };

      //  fetchId = async () => {
      //        let idTeste = "";
      //        try {
      //              idTeste = (await AsyncStorage.getItem("id")) || "none";
      //              console.log(idTeste);
      //        } catch (error) {
      //              console.log(error.message);
      //        }
      //        return idTeste;
      //  };

      render() {
            const getMyValue = async () => {
                  try {
                        const value = await AsyncStorage.getItem("id");
                  } catch (e) {
                        // read error
                  }

                  console.log(`getID: ${getUserId()}`);
            };
            getMyValue();
            return (
                  <View style={styles.container}>
                        <Text>Home</Text>
                  </View>
            );
      }
}
