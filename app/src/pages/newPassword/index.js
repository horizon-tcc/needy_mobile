import React from 'react';
import { View, Text, Stylesheet, StatusBar, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from 'react-native-elements';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import AuthContext from '../../contexts/auth';
import { Octicons, MaterialIcons } from "@expo/vector-icons";

const newPassword = () => {
    const [newPassword, setNewPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const { setUserStatus } = React.useContext(AuthContext);
    const [valid, setValid] = React.useState(false);
    const [equal, setEqual] = React.useState(false);
    var re = /^.{8,16}$/

    React.useEffect(() => {

        if (re.test(newPassword)) {
            setValid(true);
        } else {
            setValid(false);
        }

        if (newPassword === confirmPassword) {
            setEqual(true);
        } else {
            setEqual(false);
        }

        console.log(valid);
    });

    return (
        <>
            <KeyboardAvoidingView style={{
                backgroundColor: '#fff',
            }} behavior={'height'}>
                <ScrollView style={{
                    width: '100%',
                    height: '100%',
                }}>
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

                        }}>
                            <View style={{
                                width: '100%',
                                backgroundColor: 'transparent',
                                marginTop: 30,
                                flex: 1,

                            }}>
                                <View style={{
                                    marginBottom: 20,
                                }}>

                                    <TextInput
                                        secureTextEntry
                                        label="Senha"
                                        color
                                        underlineColor={!valid ? 'red' : '#49b675'}
                                        style={{
                                            backgroundColor: '#fff',
                                            width: '80%',
                                            alignSelf: 'center',
                                            marginBottom: 30,
                                        }}

                                        value={newPassword}
                                        theme={{
                                            colors: {
                                                primary: !valid ? '#000' : '#49b675',
                                                text: !valid ? '#000' : '#49b675',


                                            }
                                        }}
                                        onChangeText={(text) => {
                                            setNewPassword(text);
                                        }}
                                    />
                                </View>

                                <TextInput
                                    label="Confirme sua senha"
                                    style={{
                                        backgroundColor: '#fff',
                                        width: '80%',
                                        alignSelf: 'center',

                                    }}

                                    underlineColor={equal === true && valid === true ? '#49b675' : 'red'}
                                    value={confirmPassword}
                                    theme={{
                                        colors: {
                                            primary: equal === true && valid === true ? '#49b675' : '#000',
                                            text: equal === true && valid === true ? '#49b675' : '#000',

                                        }
                                    }
                                    }
                                    secureTextEntry
                                    onChangeText={text => setConfirmPassword(text)}
                                />
                                <View style={{ alignItems: 'center', marginTop: 40, }}>
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                        <Text style={{ marginRight: 10, }}>A senha deve ter entre 8-16 caractéres</Text>
                                        {valid ? (<Octicons
                                            name="verified"
                                            size={26}
                                            color={'#49b675'}

                                        />) : <MaterialIcons name="cancel" size={26} color={'red'} />
                                        }
                                    </View>


                                    <View style={{
                                        marginTop: 10,
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                        <Text style={{ marginRight: 10, }}>As senhas devem ser iguais</Text>
                                        {equal && valid ? (<Octicons
                                            name="verified"
                                            size={26}
                                            color={'#49b675'}

                                        />) : <MaterialIcons name="cancel" size={26} color={'red'} />
                                        }
                                    </View>
                                </View>
                                <TouchableOpacity
                                    onPress={() => {
                                        if (valid === true && equal === true) {
                                            setUserStatus(confirmPassword)
                                        } else {
                                            console.log('verifique os campos')
                                        }
                                    }}
                                    activeOpacity={0.9}>
                                    <View style={{
                                        marginTop: 50,
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
                    </View>


                </ScrollView>
            </KeyboardAvoidingView>
        </>
    )

}


export default newPassword;