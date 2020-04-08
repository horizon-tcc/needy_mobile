import React, { Component} from "react";
import { View, Text} from "react-native";
import styles from "./styles";

export default class Home extends Component {
      constructor(props) {
            super();

            this.state = {
                  navigation: props,
            };
      }
      render() {
            return (
                  <View style={styles.container}>
                        <Text>Home</Text>
                  </View>
            );
      }
}
