import React from 'react';
import styles from './styles';
import {View, Text} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons'
import ConfigurationDefault from '../../components/ConfigurationDefault'


const editProfile = () => {
    return(
        <View style={styles.container}>
            <ConfigurationDefault
                navigateTo = {'Profile'}
                title={'foi carai'}
                info = 'Endereço, E-mail, Privacidade'
                subtitle= {true}
                hasRoute={false}
                icon = { <FontAwesome5 name='user-cog' color={'#ca2929'} size={23} />}

            />
        </View>
    ) 
}

export default editProfile;

