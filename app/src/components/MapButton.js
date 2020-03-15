import React from 'react';
import { View, StyleSheet } from "react-native";
import { TouchableHighlight } from 'react-native-gesture-handler';
import {FontAwesome5} from '@expo/vector-icons'


export default class MapButton extends React.Component {
    render() {
        return(
        <>
            <View style={{position:"absolute", alignItems:"center"}}>
                <View>
                    <TouchableHighlight underlayColor="#ca2929">
                        <View style={styles.button}>
                            <FontAwesome5 name= "map" size={24} color="#fff"/>
                        </View>
                    </TouchableHighlight>
                </View>
           </View>


        </>
        )
    }
}


const styles = StyleSheet.create({
    button: {
        backgroundColor:'#ca2929',
        alignItems:"center",
        justifyContent:'center',
        width: 72,
        height: 72,
        borderRadius: 36,
        marginBottom: 35,
        shadowColor: '#7F58FF',
        shadowRadius: 5,
        shadowOffset:{height: 10,width: 0},
        shadowOpacity: 0.3,
        elevation: 5,
        borderWidth: 3,
        borderColor:'#fff',



    }
})