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
      height: height - 130,
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
      zIndex: 1
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
      width: width - 70,
      height: 210,
      borderColor: '#b8b8b8',
      borderWidth: 1,
      borderRadius: 20,
 
    },

    conquer: {
      width: 120,
      height: 120,
      borderRadius: 60,
      backgroundColor: '#fff',
      marginTop: 14,

    },
    
    infoContainer: {
        width: width - 125,
        height : 70,
        backgroundColor: '#fff',
      //  borderWidth: 1,
        //borderColor: '#ca2929',
    },

    divLine: {
      width: 1.5,
      marginTop: 25,
      marginLeft: '50%',
      height: 40,
      backgroundColor: '#ca2929'
      
    },

    value: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#ca2929',
      position:'absolute',
      alignSelf:'flex-start',
      marginTop: 15,
      marginLeft:'20%',
    
    },

    valueTwo: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#ca2929',
      position:'absolute',
      alignSelf:'flex-end',
      marginTop: 15,
      marginRight:'25%',
    
    },


    subOne: {
      fontSize: 12.5,
      marginTop: '15%',
      color:'#707070',
      position: 'absolute',
      alignSelf:'flex-start'
    },

    
    subTwo: {
      fontSize: 12.5,
      marginTop: '15%',
      marginRight:'10%',
      color:'#707070',
      position: 'absolute',
      alignSelf:'flex-end'
    },


    subContainer: {
      alignSelf:'center',
      //borderWidth:1,
      //borderColor: '#b8b8b8',
      width : width - 70,
      marginTop: 30,
      height: 135,
      
    },

    cardContainer: {
      width: width - 70,
      height: height - 700,
      marginTop: 40,
      marginBottom: 25,
      alignSelf: 'center',
    },

    optionOne: {
      width: '45%',
      backgroundColor:'#ca2929',
      justifyContent:'center',
      alignItems:'center',
      height: 100,
      borderRadius: 10,
      marginTop: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,

      elevation: 6,
    }, 

    
    optionTwo: {
      width: '45%',
      position: 'absolute',
      alignSelf: 'flex-end',
      backgroundColor:'#ca2929',
      justifyContent:'center',
      alignItems:'center',
      height: 100,
      borderRadius: 10,
      marginTop: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,

      elevation: 6,
    }, 

    optionSub: {
      color: 'white',
      fontSize: 16,
    },

    optionImage : {
      width: 50,
      height: 50,
    },

    customOuterCircle: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#ca2929'
    
    },


    dayInfo: {
      borderWidth: 1,
      borderColor: '#ca2929',
      width: '60%',
      height: '100%',
      alignSelf: 'flex-end',
      position: 'absolute',
    }


    



})


export default styles
