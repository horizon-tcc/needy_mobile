// Ícones feitos por <a href="https://www.flaticon.com/br/autores/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/br/" title="Flaticon"> www.flaticon.com</a>
// Ícones feitos por <a href="https://www.flaticon.com/br/autores/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/br/" title="Flaticon"> www.flaticon.com</a>
import React, { useEffect, useState, useContext } from "react";
import MapView, { Marker } from "react-native-maps";
import styles from "./styles";
import { View, FlatList } from "react-native";
import * as Location from "expo-location";
import axios from 'axios';
import AuthContext from './../../contexts/auth';

const Maps = ({navigation}) => {
  const {token} = useContext(AuthContext);
  const [bancos, setBancos] = useState([]);
  // State para guardar a latitude e longitude
  const [localizacao, setLocalizacao] = useState([-23.5500991,-46.633321]);

    // PEGA A LOCALIZAÇÃO DO USUÁRIO
    useEffect(() => {
      // Função para pegar a permissão e as coordenadas
      async function loadPosition() {
        // Pedir permissão para o usuário
        const { status } = await Location.requestPermissionsAsync();
        // verificar se está ok ou não o acesso a localização
        if (status !== "granted") {
          // Aviso caso seja negada
          Alert.alert(
            "Opsss...",
            "Precisamos de sua permissão para obter a localização"
          );
          return;
        } else {
          // guardar os dados da localização
          const location = await Location.getCurrentPositionAsync();
          // pega os dados que você quiser, no caso aqui latitude e longitude
          const { latitude, longitude } = location.coords;

          // Verificar se está chegando certinho os dados que você pegou..
          console.log(`
            Coordenadas: 
            
            latidude=${latitude} 
            longitude=${longitude}
              
          `);

          // Setar esses valores no state
          setLocalizacao([latitude, longitude]);
        }
      }

      // Executa a função
      loadPosition();
    }, []);

    useEffect(() => {
      axios({
        method: "GET",
        url: "https://needy-api.herokuapp.com/bancos",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        setBancos(response.data);
        console.log(`
          RESPONSE:
            DATA:
              ${response.data}
            COORDENADAS:
              LATITUDE: ${response.data[1].coords.lat}
              LONGITUDE: ${response.data[1].coords.lng}
        `);
      }).catch((error) => {
        console.log(`
          ERRO:
          ${error}
        `);
      })
    }, [])

    function handleNavigateToInfoBanco(id){
      navigation.navigate("InfoBanco", {point_id: id});
      console.log(`Indo para detalhes do Banco`);
    }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          latitude: localizacao[0],
          longitude: localizacao[1],
          latitudeDelta: 0.0014,
          longitudeDelta: 0.0014,
        }}
      >
        <Marker
          coordinate={{
            latitude: localizacao[0],
            longitude: localizacao[1],
          }}
          title={"Localização Inicial"}
          image={require("../../assets/images/marker-user.png")}
        />
          {bancos.map(point => (
            <Marker 
              key={String(point.idBancoSangue)}
              coordinate={{ 
                latitude: point.coords.lat,
                longitude: point.coords.lng, 
              }}
              title={point.nomeBancoSangue}
              image={require("./../../assets/images/marker-banco.png")}
              onPress={() => {
                navigation.navigate("InfoBanco", {idBancoSangue: point.idBancoSangue});
                console.log(point.idBancoSangue);
              }}
            >
            </Marker>
          ))}

      </MapView>
    </View>
  )
};

export default Maps;
