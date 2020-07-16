import React, { useEffect, useState } from "react";
import { View, SafeAreaView, Text, Image, AsyncStorage, RefreshControl } from "react-native";
import styles from "./styles";
import {
  TouchableOpacity,
  TapGestureHandler,
  ScrollView,
} from "react-native-gesture-handler";
import ProgressCircle from "react-native-progress-circle";
import { Tooltip } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";
import base64 from "base-64";
import axios from "axios";
import AuthContext from "../../contexts/auth";

const Profile = ({ navigation }) => {
  const { user, lastDonation, donations, refreshDonations } = React.useContext(AuthContext);
  const formattedName = user.nomeDoador.split(" ").shift();
  const formattedDayDonation = lastDonation.dataDoacaoFormatted.split('/', 2);

  const [reloading, setReloading] = React.useState(false);


  useEffect(() => {
    console.log(user);
    console.log(lastDonation);


  }, []);

  const handleRefresh = () => {
    setReloading(true);
    refreshDonations().then(() => {
      setReloading(false);
    })
  }


  return (
    <View style={styles.container}>
      <ScrollView refreshControl={<RefreshControl refreshing={reloading} onRefresh={handleRefresh} />}>
        <View style={styles.profileBackground}>
          <Image
            style={styles.profilePic}
            source={{
              uri: `http://needy-api.herokuapp.com/imagens/${user.fotoUsuario}`

            }}
            resizeMethod={'auto'}
          />

          <View style={styles.editBtn}>
            <TouchableOpacity onPress={() => navigation.navigate("Config")}>
              <FontAwesome5 name="cog" color="white" size={18} />
            </TouchableOpacity>
          </View>

          <View style={styles.contentDiv}>
            <Text style={styles.welcomeText}>Olá, {formattedName}!</Text>

            <View style={styles.line} />
          </View>

          <View style={styles.achivContainer}>
            <Image
              style={styles.conquer}
              source={{
                uri:
                  "https://i.pinimg.com/originals/c7/80/5e/c7805ee9aa1a16baaa33a7b1be2f220e.png",
              }}
            />

            <View style={styles.infoContainer}>
              <View style={styles.divLine} />
              <Text style={styles.value}>{donations.doacoes.length}</Text>

              <Text style={styles.subOne}>Doações Realizadas</Text>

              <Text style={styles.valueTwo}>{donations.totalLitrosDoados}L</Text>

              <Text style={styles.subTwo}>Litros Doados</Text>
            </View>
          </View>

          <View style={styles.subContainer}>
            <Tooltip
              popover={
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  Progresso até estar apto a doar novamente
                </Text>
              }
              containerStyle={{
                backgroundColor: "#ec6262",
              }}
              pointerColor={"#fff"}
              height={80}
              width={200}
            >
              <FontAwesome5 name="info-circle" color={"#ec6262"} size={22} />
            </Tooltip>
            <ProgressCircle
              percent={lastDonation.bloodReloadPercentFormatted.split('%', 2).shift()}
              radius={60}
              borderWidth={10}
              color="#ca2929"
              shadowColor="#fff"
              containerStyle={styles.customOuterCircle}
              outerCircleStyle={styles.insideCircle}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "#ca2929",
                }}
              >
                {lastDonation.bloodReloadPercentFormatted}
              </Text>
            </ProgressCircle>

            <View style={styles.dayInfo}>
              <Text style={styles.dateSub}>Data da Última Doação</Text>
              <Text style={styles.date}> {formattedDayDonation[0]} </Text>
              <View style={styles.divisor} />
              <Text style={styles.dateMonth}> {formattedDayDonation[1].toUpperCase()} </Text>
            </View>
          </View>

          <View style={styles.cardContainer}>
            <TapGestureHandler
              onHandlerStateChange={() => navigation.navigate("Doacoes")}
            >
              <View style={styles.optionOne}>
                <Image
                  style={styles.optionImage}
                  source={require("../../assets/images/telas/telaPerfil/agenda.png")}
                />

                <Text style={styles.optionSub}>Doações</Text>
              </View>
            </TapGestureHandler>

            <TapGestureHandler
              onHandlerStateChange={() => navigation.navigate("Carteirinha")}
            >
              <View style={styles.optionTwo}>
                <Image
                  style={styles.optionImage}
                  source={require("../../assets/images/telas/telaPerfil/carteirinha.png")}
                />
                <Text style={styles.optionSub}>Documento</Text>
              </View>
            </TapGestureHandler>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
