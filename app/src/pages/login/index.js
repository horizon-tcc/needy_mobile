import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TextInput, ImageBackground, KeyboardAvoidingView } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get('window');

import styles from './styles'

const {
    Value,
    event,
    block,
    cond,
    eq,
    set,
    Clock,
    startClock,
    stopClock,
    debug,
    timing,
    clockRunning,
    interpolate,
    Extrapolate,
} = Animated;



function runTiming(clock, value, dest) {
    const state = {
        finished: new Value(0),
        position: new Value(0),
        time: new Value(0),
        frameTime: new Value(0)
    };

    const config = {
        duration: 1000,
        toValue: new Value(0),
        easing: Easing.inOut(Easing.ease)
    };

    return block([
        cond(clockRunning(clock), 0, [
            set(state.finished, 0),
            set(state.time, 0),
            set(state.position, value),
            set(state.frameTime, 0),
            set(config.toValue, dest),
            startClock(clock)
        ]),
        timing(clock, state, config),
        cond(state.finished, debug('stop clock', stopClock(clock))),
        state.position
    ]);
}
class Login extends Component {
    constructor() {
        super();
        
        this.state = {
            eyeIcon: 'eye-slash',
            inputType: true,
            
        }



        
        this.buttonOpacity = new Value(1);



        this.onStateChange = event([
            {
                nativeEvent: ({ state }) =>
                    block([
                        cond(
                            eq(state, State.END),
                            set(this.buttonOpacity, runTiming(new Clock(), 1, 0))
                        )
                    ])
            }
        ]);

        this.onCloseState = event([
            {
                nativeEvent: ({ state }) =>
                    block([
                        cond(
                            eq(state, State.END),
                            set(this.buttonOpacity, runTiming(new Clock(), 0, 1))
                        )
                    ])
            }
        ]);


        this.buttonY = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [100, 0],
            extrapolate: Extrapolate.CLAMP
        });

        this.bgX = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [-width * 1.5, 0],
            extrapolate: Extrapolate.CLAMP
        });

        this.textInputZindex = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [1, -1],
            extrapolate: Extrapolate.CLAMP
        });

        this.textInputX = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [0, 400],
            extrapolate: Extrapolate.CLAMP
        });

        this.textInputOpacity = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [1, 0],
            extrapolate: Extrapolate.CLAMP
        });

        this.rotateCross = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [180, 360],
            extrapolate: Extrapolate.CLAMP
        });

        
    }

      toggleEye() {
           
          if(this.state.eyeIcon.valueOf() == 'eye'){  
            this.setState({
                eyeIcon:'eye-slash',
                inputType:true
                
            })
            }else{
            this.setState({
                eyeIcon:'eye',
                inputType:false
                  
            })
        }
        
    }

    render() {
        return (

            <KeyboardAvoidingView
                style={styles.container}
                behavior='padding'
            >
            <ImageBackground 
                style={styles.container}

                source={
                    require('../../assets/images/telaLogin/bgLogin.png')
                }

                            >
                <Animated.View
                    style={{
                        ...StyleSheet.absoluteFill,
                        transform: [{ translateX: this.bgX }]
                    }}
                >

                    <Image
                        source={require('../../assets/images/telaLogin/bg2.png')}
                        style={{ flex: 1, height: null, width: null }}

                    />

                </Animated.View>
                <View style={{ height: height / 1.7, justifyContent: 'flex-end' }}>
                    <TapGestureHandler onHandlerStateChange={this.onStateChange}>
                        <Animated.View
                            style={{
                                ...styles.button,
                                opacity: this.buttonOpacity,
                                transform: [{ translateY: this.buttonY }]
                            }}
                        >
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ca2929' }}>
                                JÁ SOU DOADOR!
                            </Text>
                        </Animated.View>
                    </TapGestureHandler>


                    <TapGestureHandler onHandlerStateChange={() => this.props.navigation.navigate('Intro')}>
                        <Animated.View
                            style={{
                                ...styles.button,
                                backgroundColor: '#ca2929',
                                opacity: this.buttonOpacity,
                                transform: [{ translateY: this.buttonY }]
                            }}

                        >
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                                COMO DOAR?
                        </Text>
                        </Animated.View>
                    </TapGestureHandler>



                                   
                    <Animated.View
                        style={{
                            zIndex: this.textInputZindex,
                            opacity: this.textInputOpacity,
                            transform: [{ translateX: this.textInputX }],
                            height: height / 2,
                            ...StyleSheet.absoluteFill,
                            top:80,
                            justifyContent: 'center',
                            backgroundColor:'white',
                            
                        }}
                    >



                        < View style={styles.containerTitle}>
                            <Text style={styles.titulo}>Bem-vindo!</Text>
                        </View>


                    <Icon 
                        name='user-o' 
                        color='red'
                        size={28}
                        style={styles.inputIcon}
                    />
                        <TextInput
                            placeholder="E-mail"
                            style={styles.textInput}
                            placeholderTextColor="rgba(0,0,0,0.4)"
                        >

                        </TextInput>

                        
                    <Icon 
                        name='lock' 
                        color='red'
                        size={32}
                        style={styles.inputIcon}
                    />
                        <TextInput
                            password={true}
                            secureTextEntry={this.state.inputType}
                            placeholder="Senha"
                            style={styles.textInput}
                            placeholderTextColor="rgba(0,0,0,0.4)"
                            textContentType='password'
                            
                        >
                        </TextInput>
                        
                        <TapGestureHandler onHandlerStateChange={() =>  this.toggleEye()}>
                            <Animated.View style={styles.btnEye}>
                            
                                <Icon 
                                    name= {this.state.eyeIcon} 
                                    color='rgba(0,0,0,0.6)'
                                    size={26}
                                />
                            </Animated.View>
                        </TapGestureHandler>
                  
                        <TapGestureHandler onHandlerStateChange={() => this.props.navigation.navigate('Home')}>
                            <Animated.View style={styles.buttonEntrar}>
                                <Text style={{ color:'white',fontSize: 20, fontWeight: 'bold' }} >
                                    ENTRAR
                                </Text>
                            
                            </Animated.View>
                        </TapGestureHandler>

                        

                        
                        <TapGestureHandler onHandlerStateChange={this.onCloseState}>
                            <Animated.View style={styles.closeButton}>
                                <Animated.Text style={{ fontSize: 18, color: 'rgba(0,0,0,0.3)', fontWeight: 'bold'}} >
                                        VOLTAR               
                                </Animated.Text>
                            </Animated.View>
                        </TapGestureHandler>


                    </Animated.View>
                </View>
            </ImageBackground>
            </KeyboardAvoidingView>
        );
    }
}


export default Login;
