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
      backgroundColor:'#fff',
      width:  width,
      height: height - 200,
      borderTopLeftRadius: 60

    },

    profilePic: {
      backgroundColor: '#0f0',
      position: "absolute",
      marginLeft: 60,
      top: -50,
      height: 120,
      borderRadius:60,
      width: 120,
    }


})


export default styles
