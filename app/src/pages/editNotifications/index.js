import React from 'react';
import styles from './styles';
import {View, Text} from 'react-native';
import {Switch} from 'react-native-paper';



class editNotifications extends React.Component {
    
    state = {
        isSwitchOn: false,
    }

    _onToggleSwitch = () => this.setState(state => ({ isSwitchOn: !state.isSwitchOn }));

    
    render(){
        const {isSwitchOn} = this.state;
        return(
            <View style={styles.container}>
                <Switch
                  value ={isSwitchOn}
                  onValueChange = {this._onToggleSwitch}
                  color = {'#fff'}
                  style = {{
                      backgroundColor: isSwitchOn ? '#ca2929' : '#b8b8b8', 
                      width: 70,
                      height: 40,
                      borderWidth: 3,
                      borderRadius: '50%',
                    }}
                />
            </View>
        )
    }
}

export default editNotifications;