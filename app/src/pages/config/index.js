import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';



class Config extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                
                <TouchableOpacity onPress={() => this.props.navigation.navigate('editProfile')}>
                    <View style={styles.configContainer}>
                        <View style={styles.iconContainer}>
                            <FontAwesome5 name= 'user-cog' color={'#ca2929'} size={23}/>
                        </View>
                        <Text style={styles.configTitle}>Editar Perfil</Text>
                        <Text style={styles.configSub}>Endereço, E-mail, Privacidade </Text>

                    </View>
                </TouchableOpacity>

                
                <TouchableOpacity onPress={() => this.props.navigation.navigate('editNotifications')}>
                    <View style={styles.configContainer}>
                        <View style={styles.iconContainer}>
                            <Image 
                            source={require('../../assets/images/geral/icons/bell.png')}
                            style={
                                {width: 23,height:23}
                            }
                            />
                        </View>
                        <Text style={styles.configTitle}>Notificações</Text>
                        <Text style={styles.configSub}>Configurações de toque, Vibrar </Text>

                    </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                    <View style={styles.configContainer}>
                        <View style={styles.iconContainer}>
                            <FontAwesome5 name= 'paint-brush' color={'#ca2929'} size={23}/>
                        </View>
                        <Text style={styles.configTitle}>Tema</Text>
                        <Text style={styles.configSub}>Em Breve! </Text>

                    </View>
                </TouchableOpacity>

                

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                    <View style={styles.configContainer}>
                        <View style={styles.iconContainer}>
                            <FontAwesome5 name= 'sign-out-alt' color={'#ca2929'} size={23}/>
                        </View>
                        <Text style={styles.exitTitle}>Sair</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.divLine}/>
                <Text style={{alignSelf: 'center', color: '#b8b8b8', fontWeight: 'bold'}}>Outros</Text>
                
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                    <View style={styles.configContainer}>
                        <View style={styles.iconContainer}>
                            <FontAwesome5 name= 'question-circle' color={'#ca2929'} size={23}/>
                        </View>
                        <Text style={styles.exitTitle}>Ajuda</Text>
                    </View>
                </TouchableOpacity>
                        
                
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                    <View style={styles.configContainer}>
                        <View style={styles.iconContainer}>
                        <Image 
                            source={require('../../assets/images/geral/icons/share.png')}
                            style={
                                {width: 23,height:23}
                            }
                            />
                        </View>
                        <Text style={styles.exitTitle}>Compartilhe com os amigos</Text>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }

}


export default Config;