import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';


export default class Achievements extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    Tela de Conquistas
                </Text>
            </View>
        );
    }
}