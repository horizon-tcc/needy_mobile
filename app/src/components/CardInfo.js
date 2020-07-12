import React from 'react';
import {View, Text} from 'react-native';

const CardInfo = ({titulo, dado}) => {
    return(
            <View
                style={{
                    // backgroundColor: "#CA2929",
                    padding: 15,
                    borderRadius: 10,
                    marginVertical: 10,
                }}
            >
                <Text
                    style={{
                        fontWeight: "700",
                        fontSize: 20,
                        color: "#CA2929",
                    }}
                >{titulo}</Text>
                <Text
                    style={{
                        fontWeight: "200",
                        fontSize: 16,
                        color: "#C8C8C8",
                    }}
                >{dado}</Text>
            </View>
    ) 
}

export default CardInfo;

