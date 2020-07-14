// Ícones feitos por <a href="https://www.flaticon.com/br/autores/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/br/" title="Flaticon"> www.flaticon.com</a>
// Ícones feitos por <a href="https://www.flaticon.com/br/autores/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/br/" title="Flaticon"> www.flaticon.com</a>
import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import styles from "./styles";
import { View } from "react-native";
import * as Location from "expo-location";

const Maps = () => {

  useEffect(() => {

  }, []);

  //   const [location, setLocation] = useState({
  //     coords: {
  //       accuracy: 730,
  //       altitude: 0,
  //       heading: 0,
  //       latitude: -23.5503099,
  //       longitude: -46.6363896,
  //       speed: 0,
  //     },
  //     mocked: false,
  //     timestamp: 1593613310706,
  //   });
  //   const [errorMsg, setErrorMsg] = useState(null);

  //   PEGA A LOCALIZAÇÃO DO USUÁRIO
  //   useEffect(() => {
  //     async function loadPosition() {
  //       const { status } = await Location.requestPermissionsAsync();
  //       if (status !== "granted") {
  //         Alert.alert(
  //           "Opsss...",
  //           "Precisamos de sua permissão para obter a localização"
  //         );
  //         return;
  //       }
  //       const location = await Location.getCurrentPositionAsync();
  //       const { latitude, longitude } = location.coords;
  //       console.log(`Coordenadas: latidude=${latitude} longitude=${longitude}`);
  //       setInitialPosition([latitude, longitude]);
  //     }
  //     loadPosition();
  //   });,
  //   useEffect(() => {
  //     (async () => {
  //       let { status } = await Location.requestPermissionsAsync();
  //       if (status !== "granted") {
  //         setErrorMsg("Permission to access location was denied");
  //       }

  //       let location = await Location.getCurrentPositionAsync({});
  //       setLocation(location);
  //       console.log(location);
  //       console.log("LATITUDE: " + location.coords.latitude);
  //       console.log("LONGITUDE: " + location.coords.longitude);
  //     })();
  //   });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          //   latitude: location.coords.latitude,
          //   longitude: location.coords.longitude,
          latitude: -23.556026,
          longitude: -46.401947,
          latitudeDelta: 0.0014,
          longitudeDelta: 0.0014,
        }}
      >
        <Marker
          coordinate={{
            latitude: -23.5584294,
            longitude: -46.6348969,
          }}
          title={"Hemocentro São Lucas - Unidade Liberdade"}
          image={require("../../assets/images/marker2.png")}
        />

        <Marker
          coordinate={{
            latitude: -23.5575896,
            longitude: -46.6689441,
          }}
          title={"Fundação Pró-Sangue Hemocentro de São Paulo"}
          image={require("../../assets/images/marker2.png")}
        />

        <Marker
          coordinate={{
            latitude: -23.5438673,
            longitude: -46.650106,
          }}
          title={"Hemocentro da Santa Casa de São Paulo"}
          image={require("../../assets/images/marker.png")}
        />

        <Marker
          coordinate={{
            latitude: -23.4678736,
            longitude: -46.5249643,
          }}
          title={"Hemocentro São Lucas - Guarulhos"}
          image={require("../../assets/images/marker.png")}
        />

        <Marker
          coordinate={{
            latitude: -23.5519394,
            longitude: -46.3095214,
          }}
          title={"Hemocentro Suzano"}
          image={require("../../assets/images/marker.png")}
        />

        <Marker
          coordinate={{
            latitude: -23.595087,
            longitude: -46.6457452,
          }}
          title={"Hemocentro HSP Unifesp"}
          image={require("../../assets/images/marker.png")}
        />

        <Marker
          coordinate={{
            latitude: -23.5805124,
            longitude: -46.6796303,
          }}
          title={"Fundação Hemocentro de Ribeirão Preto"}
          image={require("../../assets/images/marker.png")}
        />

        <Marker
          coordinate={{
            latitude: -23.6055957,
            longitude: -46.6780212,
          }}
          title={"Hemocentro São Lucas - Unidade Vila Olimpia"}
          image={require("../../assets/images/marker.png")}
        />

        <Marker
          coordinate={{
            latitude: -23.6988796,
            longitude: -46.557605,
          }}
          title={"Colsan Hemocentro Regional de São Bernardo do Campo"}
          image={require("../../assets/images/marker.png")}
        />

        <Marker
          coordinate={{
            latitude: -23.6686605,
            longitude: -46.5298258,
          }}
          title={"Hemocentro São Lucas - Unidade Santo André"}
          image={require("../../assets/images/marker.png")}
        />

        <Marker
          coordinate={{
            latitude: -23.5545718,
            longitude: -46.4659528,
          }}
          title={"Banco de Sangue do Hospital Santa Marcelina"}
          image={require("../../assets/images/marker.png")}
        />

        <Marker
          coordinate={{
            latitude: -23.5533402,
            longitude: -46.7439652,
          }}
          title={"Banco de Sangue de São Paulo"}
          image={require("../../assets/images/marker.png")}
        />

        <Marker
          coordinate={{
            latitude: -23.5955197,
            longitude: -46.6514364,
          }}
          title={"Banco de Sangue de São Paulo"}
          image={require("../../assets/images/marker.png")}
        />

        <Marker
          coordinate={{
            latitude: -23.5901346,
            longitude: -46.6730441,
          }}
          title={"Banco de Sangue Paulista"}
          image={require("../../assets/images/marker.png")}
        />

        <Marker
          coordinate={{
            latitude: -23.6560008,
            longitude: -46.7055666,
          }}
          title={"Banco Sangue Paulista"}
          image={require("../../assets/images/marker.png")}
        />

        <Marker
          coordinate={{
            latitude: -23.5662194,
            longitude: -46.6379501,
          }}
          title={"A.C.Camargo Cancer Center Castro Alves Assistencial"}
          image={require("../../assets/images/marker.png")}
        />

        <Marker
          coordinate={{
            latitude: -23.5700886,
            longitude: -46.6420417,
          }}
          title={
            "Hospital Beneficência Portuguesa de São Paulo - Banco de Sangue"
          }
          image={require("../../assets/images/marker.png")}
        />

        <Marker
          coordinate={{
            latitude: -23.6187199,
            longitude: -46.664189,
          }}
          title={"Colsan Associação Beneficente de Coleta de Sangue"}
          image={require("../../assets/images/marker.png")}
        />

        <Marker
          coordinate={{
            latitude: -23.5790025,
            longitude: -46.6796319,
          }}
          title={"Banco De Sangue Do Hospital Do Servidor Publico Estadual"}
          image={require("../../assets/images/marker.png")}
        />

        <Marker
          coordinate={{
            latitude: -23.5972479,
            longitude: -46.6566069,
          }}
          title={"Banco de Sangue - Unidade Einstein Morumbi"}
          image={require("../../assets/images/marker.png")}
        />

        <Marker
          coordinate={{
            latitude: -23.5685683,
            longitude: -46.6454757,
          }}
          title={"Instituto HOC de Hemoterapia"}
          image={require("../../assets/images/marker.png")}
        />

        <Marker
          coordinate={{
            latitude: -23.549864,
            longitude: -46.661429,
          }}
          title={"Banco de Sangue de São Paulo e Serviços de Hemoterapia"}
          image={require("../../assets/images/marker.png")}
        />

        <Marker
          coordinate={{
            latitude: -23.5495421,
            longitude: -46.6597153,
          }}
          title={"Banco de Sangue de São Paulo e Serviços de Hemoterapia"}
          image={require("../../assets/images/marker.png")}
        />
      </MapView>
    </View>
  );
};

export default Maps;
