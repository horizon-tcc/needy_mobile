import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        justifyContent: 'center'
    },

    titulo: {
        justifyContent:'center',
        textAlign:'center',
        alignItems:'center',
        color: "white",
        fontWeight: 'bold',
        fontSize: 30,
    },

    button: {
        backgroundColor: 'white',
        height: 70,
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

    containerTitle : {
        flex:1,
        height:100,
        bottom:130,
    },


    buttonEntrar: {
        backgroundColor: '#ca2929',
        height: 60,
        width: width - 85,
        marginTop:30,
        marginBottom: 10,
        marginHorizontal: 20,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center',
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
        height: 60,
        width: width - 55,
        alignSelf:'center',
        color:'black',
        borderRadius: 25,
        borderWidth: 0.5,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        marginHorizontal: 0,
        paddingLeft:53,
        paddingRight:53,
        paddingTop:15,
        marginVertical: 0,
        borderColor: 'rgba(0,0,0,0.4)'
    },

    closeButton: {
        height: 60,
        width: width - 85,
        marginTop:10,
        backgroundColor: "#fff",
        borderRadius: 10,
        alignSelf:'center',
        alignItems: 'center',
        justifyContent: "center",
        position: 'relative',
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
    },

    inputIcon: {
        position:'relative',
        top:55,
        left: 50,
    },

    btnEye: {
        position:'relative',
        bottom:30,
        left:width - 80,
    }
});

export default styles