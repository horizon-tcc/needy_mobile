import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
    },

    configContainer: {
        backgroundColor: '#fff',
        width: width,
        borderColor: '#b8b8b8',
        borderWidth: 1,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderLeftWidth: 0,

        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderRightWidth: 0,
        marginTop: 20,
        height: 80,
    },

    configTitle: {
        color: '#000',

        fontSize: 18,
        alignSelf: 'flex-start',
        marginLeft: 70,
        paddingTop: 8,
        position: 'absolute',
    },

    configSub: {
        color: '#b8b8b8',
        position: 'absolute',
        alignSelf: 'flex-start',
        marginLeft: 70,
        paddingTop: 40,

    },

    iconContainer: {
        backgroundColor: '#fff',
        height: '100%',
        width: 80,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
    },

    exitTitle: {
        color: '#000',

        fontSize: 18,
        alignSelf: 'flex-start',
        marginLeft: 70,
        paddingTop: 20,
        position: 'absolute',
    },

    divLine: {
        marginVertical: 20,
        backgroundColor: '#b8b8b8',
        width: width,
        height: 1,
    },



})


export default styles;