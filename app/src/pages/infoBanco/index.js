import React, { useEffect, useContext, useState } from 'react';
import MapView, { Marker } from "react-native-maps";
import { View, Text, ScrollView, Dimensions, FlatList } from 'react-native';
import axios from 'axios';
import AuthContext from '../../contexts/auth';

const InfoBanco = ({ navigation, route }) => {

    const { token } = useContext(AuthContext);
    const { idBancoSangue } = route.params;
    const {width, height} = Dimensions.get('window');
    
    const [nome, setNome] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [bairro, setBairro] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [cep, setCep] = useState("");
    const [uf, setUf] = useState("");
    const [cidade, setCidade] = useState("");
    const [telefone, setTelefone] = useState([]);
    const [horario, setHorario] = useState([]);
    const [latitude, setLatitude] = useState(-23.5500991);
    const [longitude, setLongitude] = useState(-46.633321);

    useEffect(() => {
        axios({
            method: "GET",
            url: `https://needy-api.herokuapp.com/bancos/${idBancoSangue}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            setNome(response.data.nomeBancoSangue);
            setLogradouro(response.data.logradouroBancoSangue);
            setBairro(response.data.bairroBancoSangue);
            setNumero(response.data.numeroEndBancoSangue);
            if (response.data.complementoEndBancoSangue === "") {
                setComplemento("Complemento não informado..");
            } else {
                setComplemento(response.data.complementoEndBancoSangue);
            }
            setCep(response.data.cepBancoSangue);
            setUf(response.data.ufBancoSangue);
            setCidade(response.data.cidadeBancoSangue);
            setTelefone(response.data.numeroTelefoneBanco);
            setHorario(response.data.horarioFuncionamento);
            setLongitude(response.data.coords.lng);
            setLatitude(response.data.coords.lat);
        }).catch((error) => {
            console.log(`ERRO: ${error}`);
        })
    }, []);

    return (
        <ScrollView>
            <View
                style={{
                    backgroundColor: "#ca2929",
                    height: 200,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text
                    style={{
                        color: "#fff",
                        fontSize: 30,
                        fontWeight: "700",
                        width: width * 0.8,
                        textAlign: "center"
                    }}
                >
                    {nome}
                </Text>
            </View>
            <View
                style={{
                    padding: 20,
                }}
            >
                <View
                    style={{
                        marginBottom: 20,
                    }}
                >
                    <Text
                        style={{
                            color: "#8c8c8c",
                            fontSize: 20,
                            fontWeight: "700",
                            marginBottom: 10,
                        }}
                    >
                        Dados de Endereço:
                    </Text>
                    <Text>
                        {`${logradouro}, ${numero}. ${bairro}.`}
                    </Text>
                    {complemento !== '' ? (
                        <Text>
                        {`${complemento}.`}
                        </Text>
                    ) : (
                        null
                    )}
                    <Text>
                        {`${cep}`}
                    </Text>
                    <Text>
                        {`${cidade}, ${uf}.`}
                    </Text>
                </View>
                <View
                    style={{
                        marginBottom: 20,
                    }}
                >
                    <Text
                        style={{
                            color: "#8c8c8c",
                            fontSize: 20,
                            fontWeight: "700",
                            marginBottom: 10,
                        }}
                    >
                        Dados de Contato:
                    </Text>
                    <Text>
                        {telefone !== [] ? telefone.join("\n") : `Telefone(s) não informado(s)`}
                    </Text>
                </View>
                <View
                    style={{
                        marginBottom: 20,
                    }}
                >
                    <Text
                        style={{
                            color: "#8c8c8c",
                            fontSize: 20,
                            fontWeight: "700",
                            marginBottom: 10,
                        }}
                    >
                        Dados de Horário:
                    </Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        <FlatList
                            horizontal
                            renderItem={({item}) => (
                                <View
                                    style={{
                                        borderRadius: 10,
                                        backgroundColor: "#ca2929",
                                        padding: 15,
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        marginRight: 15,
                                    }}
                                >
                                    <Text style={{color: "#fff", fontWeight: "700"}}>{item.descricaoDiaSemana}</Text>
                                    <Text style={{color: "#fff"}}>Abre: {item.horarioAbertura}</Text>
                                    <Text style={{color: "#fff"}}>Fecha: {item.horarioFechamento}</Text>
                                </View>
                            )}
                            data={horario}
                            keyExtractor={(item) => item.descricaoDiaSemana}
                        />
                    </ScrollView>
                </View>
                <View
                    style={{
                        marginBottom: 20,
                    }}
                >
                    <Text
                        style={{
                            color: "#8c8c8c",
                            fontSize: 20,
                            fontWeight: "700",
                            marginBottom: 10,
                        }}
                    >
                        Mapa:
                    </Text>
                    <MapView
                        style={{
                            width: width * 0.9,
                            height: 300,
                        }}
                        region={{
                            latitude: latitude,
                            longitude: longitude,
                            latitudeDelta: 0.0014,
                            longitudeDelta: 0.0014,
                          }}
                    >
                        <Marker
                            coordinate={{
                                latitude: latitude,
                                longitude: longitude,
                            }}
                            title={"Localização Inicial"}
                            image={require("../../assets/images/marker-banco.png")}
                        />
                    </MapView>
                </View>
            </View>
        </ScrollView>
    )
}

export default InfoBanco;