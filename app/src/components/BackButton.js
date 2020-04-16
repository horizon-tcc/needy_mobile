import React from 'react';
import { View, StyleSheet } from "react-native";
import { TouchableHighlight, TapGestureHandler } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons'



export default class BackButton extends React.Component {
    constructor(props) {
		super(props);
        this.buttonPress = this.buttonPress.bind(this);

		this.props = {
            navigation: props,

		};
        }

        buttonPress() {
            this.props.navigation.navigate('Profile');
        }
        
    
    render() {

       
    
        return (


            <TapGestureHandler onHandlerStateChange={this.buttonPress}>

                <View style={{ marginLeft: 15 }}>
                    <FontAwesome5 name='chevron-left' color={'#ca2929'} size={28} />

                </View>
            </TapGestureHandler>



        );
    }

}




