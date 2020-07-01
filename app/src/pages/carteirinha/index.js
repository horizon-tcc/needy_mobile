import React from "react";
import styles from "./styles";
import { View, Image, Text } from "react-native";

const carteirinha = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.carteirinha}>
          <View style={styles.whiteBorder}>
            <Text style={styles.title}>Hemocentro</Text>
          </View>

          <View style={styles.cardContainer}>
            <View style={styles.row}>
              <Image
                style={styles.profilePic}
                source={{
                  uri:
                    "https://scontent.fgru6-1.fna.fbcdn.net/v/t1.0-9/83743190_2660059810782257_5370719641435897856_n.jpg?_nc_cat=102&_nc_sid=85a577&_nc_eui2=AeHQEWPOJ1bkpoy1UdRwoZxkyu-U210QaFbK75TbXRBoVkshoJ0ZiH9Ab0piHkXCgfnCr1IJ02TosPJ-1NqdmwRR&_nc_oc=AQkAhx1MFSgpMj4_Lfy3YRR352IWwvBSHOvdjNyBTSkZAQjGq9P7nrLkMnHucfwf-TxqfFf_dTnBSQ4vy1i72s6L&_nc_ht=scontent.fgru6-1.fna&oh=5ffb66aa8e0a543f88ff5cd3e6fb9eed&oe=5EB24F03",
                }}
              />
              <View style={styles.column}>
                <Text style={styles.title}>Nome</Text>
                <Text>Gustavo Manocchio</Text>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.row}>
                <View style={styles.column}>
                  <Text style={styles.title}>Tipo</Text>
                  <Text style={{ textAlign: "center" }}>A</Text>
                </View>
                <View style={{ marginLeft: 80 }} />
                <View style={styles.column}>
                  <Text style={styles.title}>Ultima Doação</Text>
                  <Text style={{ textAlign: "center" }}>14/03/2020</Text>
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.column}>
                  <Text style={styles.title}>Fator RH</Text>
                  <Text>Positivo (+)</Text>
                </View>
                <View style={{ marginLeft: 80 }} />

                <View style={styles.column}>
                  <Text style={styles.title}>Código</Text>
                  <Text style={{ textAlign: "center" }}>256793</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default carteirinha;
