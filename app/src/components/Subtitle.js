import React from 'react';
import { View, Text } from 'react-native';

const Subtitle = ({texto}) => {
     return (
          <>
               <View>
                    <Text style={{fontSize: 17, fontWeight: "700"}}>{texto}?</Text>
               </View>
          </>
     );
}

export default Subtitle;