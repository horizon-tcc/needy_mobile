import React from 'react';
import { View, Text } from 'react-native';

const Paragrafo = ({texto}) => {
     return (
          <>
               <View>
                    <Text style={{paddingVertical: 10, textAlign: "justify", fontSize: 17, fontWeight: "200", fontStyle: "normal", color: "#8c8c8c"}}>
                         {texto}
                    </Text>
               </View>
          </>
     );
}

export default Paragrafo;