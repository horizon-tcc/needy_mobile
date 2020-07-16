import React, { useEffect, useContext } from 'react';

import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import AuthContext from '../../contexts/auth';

const InfoBanco = ({ navigation, route }) => {

    const { token } = useContext(AuthContext);
    const routeParams = route.params;

    useEffect(() => {
        axios({
            method: "GET",
            url: `https://needy-api.herokuapp.com/bancos/${routeParams.id}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            console.log(`
                DADOS:
                    ${response.data}
            `);
        }).catch((error) => {
            console.log(`
                ERRO:

                    ${error}
            `);
        })
    }, []);

    return (
        <>
            <View>
                <Text>eu sou a tela que o miguel pediu</Text>
            </View>
        </>
    )
}

export default InfoBanco;