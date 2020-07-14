import React from 'react';
import { View, Text, Stylesheet, StatusBar } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AuthContext from '../../contexts/auth'
const newPassword = () => {
    const [newPassword, setNewPassword] = React.useState('');
    const { setUserStatus } = React.useContext(AuthContext);

    return (
        <>
            <StatusBar backgroundColor={'#ca2929'} barStyle={'light-content'} />
            <View style={{
                backgroundColor: '#fff',
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
            }}>
                <View style={{
                    backgroundColor: '#ca2929',
                    height: 250,
                    paddingTop: 40,
                    paddingLeft: 30,
                }}>
                    <Text style={{
                        color: '#FFF',
                        fontSize: 26,
                        fontWeight: 'bold',
                        width: 350,
                    }}>Seja bem-vindo ao Needy!</Text>


                    <Text style={{
                        color: '#FFF',
                        marginTop: 20,
                        fontSize: 20,
                        fontWeight: 'bold',
                        width: 200,
                    }}>Redefina sua senha para continuar.</Text>
                </View>
                <View style={{
                    width: '100%',
                    backgroundColor: '#fff',
                    marginTop: 30,

                }}>
                    <View style={{
                        marginBottom: 20,
                    }}>
                        <TextInput
                            secureTextEntry
                            label="Senha"
                            style={{
                                backgroundColor: '#fff',
                                width: '80%',
                                alignSelf: 'center',
                                marginBottom: 30,
                            }}
                            value={newPassword}
                            theme={{
                                colors: {
                                    primary: '#000'
                                }
                            }
                            }
                            onChangeText={text => setNewPassword(text)}
                        />
                    </View>

                    <TextInput
                        label="Confirme sua senha"
                        style={{
                            backgroundColor: '#fff',
                            width: '80%',
                            alignSelf: 'center',

                        }}
                        value={newPassword}
                        theme={{
                            colors: {
                                primary: '#000'
                            }
                        }
                        }
                        secureTextEntry
                        onChangeText={text => setNewPassword(text)}
                    />
                    <TouchableOpacity
                        onPress={setUserStatus}
                        activeOpacity={0.9}>
                        <View style={{
                            marginTop: 80,
                            backgroundColor: '#000',
                            padding: 15,
                            paddingLeft: 80,
                            paddingRight: 80,
                            alignSelf: 'center',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 50,
                        }}>

                            <Text style={{
                                textTransform: 'uppercase',
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: 20,
                            }}>Enviar</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </>
    )

}


export default newPassword;