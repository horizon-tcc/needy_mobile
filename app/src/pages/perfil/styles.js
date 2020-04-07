import {StyleSheet, Dimensions} from 'react-native'
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "flex-end",
      justifyContent: "flex-end",
      backgroundColor: '#ca2929'
    },

    profileBackground :{
      justifyContent: 'flex-start',
      backgroundColor:'#fff',
      width:  width,
      height: height - 145,
      borderTopLeftRadius: 60

    },

    profilePic: {
      backgroundColor: '#979797',
      position: "absolute",
      marginLeft: 45,
      top: -50,
      height: 120,
      borderRadius:60,
      width: 120,
    },

    
    editBtn: {
      backgroundColor: '#ec6262',
      position: "absolute",
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: width - 43,
      height: 43,
      borderBottomLeftRadius: 20,
      width: 43,
    },


    contentDiv: {
      alignItems:'center',
      marginTop: 30,
      marginLeft: 130,
    },

    welcomeText: {
      fontSize: 23,
      color: '#ca2929',
      fontWeight: "bold",
      
    },

    line: {
      marginTop: 10,
      height: 1,
      width: 145,
      backgroundColor:'#ca2929'
    },

    achivContainer: {
      marginTop: 35 ,
      alignSelf:'center',
      alignItems:'center',
      width: width - 100,
      height: 210,
      borderColor: '#b8b8b8',
      borderWidth: 1,
      borderRadius: 20,
    }





})


export default styles
