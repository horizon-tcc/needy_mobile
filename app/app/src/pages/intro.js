//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
// Ícones feitos por <a href="https://www.flaticon.com/br/autores/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/br/" title="Flaticon"> www.flaticon.com</a>
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { TapGestureHandler } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 320,
        height: 320,
    },
});

const slides = [
    {
        key: 'slide1',
        text: 'Needy foi desenvovido pela Horizon para ajudar a salvar vidas.',
        textStyle: { color: '#ffb8b8' },
        image: require('../../assets/images/telaIntro/coracao.png'),
        imageStyle: { width: 100, height: 100 },
        backgroundColor: '#4b4b4b',
    },
    {
        key: 'slide2',
        text: 'Com ele você poderá saber os locais mais próximos para doar sangue!',
        textStyle: { color: '#FFF' },
        image: require('../../assets/images/telaIntro/mapa.png'),
        imageStyle: { width: 100, height: 100 },
        backgroundColor: '#B39DDB',
    },
    {
        key: 'slide3',
        text: 'Também poderá se manter informado sobre as suas doações e acessar sua carteirinha de doador.',
        textStyle: { color: '#4682B4' },
        image: require('../../assets/images/telaIntro/livro.png'),
        imageStyle: { width: 100, height: 100 },
        backgroundColor: '#B0E0E6',
    },
    {
        key: 'slide4',
        text: 'Agora que já sabe alguns benefícios de usar o Needy, vamos começar!',
        textStyle: { color: '#98FB98' },
        image: require('../../assets/images/telaIntro/verifica.png'),
        imageStyle: { width: 100, height: 100 },
        backgroundColor: '#3CB371',
    },
];

export default class Intro extends React.Component {
    _renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Ionicons
                    name="md-arrow-round-forward"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                    style={{ backgroundColor: 'transparent' }}
                />
            </View>
        );
    };
    _renderDoneButton = () => {
        return (
            <TapGestureHandler onHandlerStateChange={()=> this.props.navigation.navigate('Cadastro')}>
                <View style={styles.buttonCircle}>
                    <Ionicons
                        name="md-checkmark"
                        color="rgba(255, 255, 255, .9)"
                        size={24}
                        style={{ backgroundColor: 'transparent' }}
                    />
                </View>
            </TapGestureHandler>
        );
    };


    render() {
        return (
            <AppIntroSlider
                slides={slides}
                showSkipButton= {true}
                onSkip= {()=> this.props.navigation.navigate('Cadastro')}	
                
                renderSkipButton={this._renderSkipButton}
                renderDoneButton={this._renderDoneButton}
                renderNextButton={this._renderNextButton}
            />
        );
    }
}