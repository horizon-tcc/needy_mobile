import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TextInput } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');

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
    concat
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
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'white',
                    justifyContent: 'center'
                }}
            >
                <Animated.View
                    style={{
                        ...StyleSheet.absoluteFill,
                        transform: [{ translateX: this.bgX }]
                    }}
                >

                    <Image
                        source={require('../../assets/images/telaLogin/bg.png')}
                        style={{ flex: 1, height: null, width: null }}

                    />

                </Animated.View>
                <View style={{ height: height / 3, justifyContent: 'center' }}>
                    <TapGestureHandler onHandlerStateChange={this.onStateChange}>
                        <Animated.View
                            style={{
                                ...styles.button,
                                opacity: this.buttonOpacity,
                                transform: [{ translateY: this.buttonY }]
                            }}
                        >
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ca2929' }}>
                                JÁ SOU DOADOR
                            </Text>
                        </Animated.View>
                    </TapGestureHandler>


                    <TapGestureHandler onHandlerStateChange={() => this.props.navigation.navigate('Cadastro')}>
                        <Animated.View
                            style={{
                                ...styles.button,
                                backgroundColor: '#ca2929',
                                opacity: this.buttonOpacity,
                                transform: [{ translateY: this.buttonY }]
                            }}

                        >
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                                COMO POSSO DOAR?
                        </Text>
                        </Animated.View>
                    </TapGestureHandler>

                    <Animated.View
                        style={{
                            zIndex: this.textInputZindex,
                            opacity: this.textInputOpacity,
                            transform: [{ translateX: this.textInputX }],
                            height: height / 3,
                            ...StyleSheet.absoluteFill,
                            top: null,
                            justifyContent: 'center',
                        }}
                    >

                        <TapGestureHandler onHandlerStateChange={this.onCloseState}>
                            <Animated.View style={styles.closeButton}>
                                <Animated.Text style={{ fontSize: 15, color: 'white', transform: [{ rotate: concat(this.rotateCross, 'deg') }] }} >
                                    X
                                </Animated.Text>
                            </Animated.View>
                        </TapGestureHandler>

                        <TextInput
                            placeholder="E-mail"
                            style={styles.textInput}
                            placeholderTextColor="#000"
                        >

                        </TextInput>
                        <TextInput
                            placeholder="Senha"
                            style={styles.textInput}
                            placeholderTextColor="#000"
                        >

                        </TextInput>
                        <TapGestureHandler onHandlerStateChange={() => this.props.navigation.navigate('Home')}>
                            <Animated.View style={styles.button}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }} >
                                    ENTRAR
                            </Text>
                            </Animated.View>
                        </TapGestureHandler>
                    </Animated.View>
                </View>
            </View>
        );
    }
}
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    button: {
        backgroundColor: 'white',
        height: 140,
        marginBottom: 10,
        marginHorizontal: 20,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },

    textInput: {
        height: 100,
        borderRadius: 25,
        marginBottom: 40,
        borderWidth: 0.5,
        marginHorizontal: 20,
        paddingLeft: 10,
        marginVertical: 5,
        borderColor: 'rgba(0,0,0,0.2)'
    },

    closeButton: {
        height: 90,
        width: '90%',
        backgroundColor: "red",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: "center",
        position: 'absolute',
        top: 290,
        left: width / 2 - 162,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
    }
});