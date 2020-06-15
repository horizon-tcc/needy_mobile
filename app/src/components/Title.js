import React from 'react';
import { View, Text } from 'react-native';

const Title = ({texto}) => {
     return (
          <>
               <View>
                    <Text style={{fontSize: 20, fontWeight: "700"}}>{texto}</Text>
               </View>
          </>
     );
}

export default Title;