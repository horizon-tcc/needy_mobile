import React from "react";
import styles from "./styles";
import { ScrollView, View, Text, Dimensions, Image } from "react-native";
import CardFlip from "react-native-card-flip";
import { Tooltip } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";
import AuthContext from "../../contexts/auth";

import { TouchableOpacity } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("screen");

const carteirinha = () => {
  const { user } = React.useContext(AuthContext);

  var card = React.createRef();
  return (
    <>
      <ScrollView style={{ backgroundColor: '#fff' }}>
        <View style={styles.container}>
          <CardFlip style={styles.carteirinha} ref={(cardFace) => card = cardFace}>
            <TouchableOpacity
              style={styles.cardContainer}
              activeOpacity={1}
              onPress={() => card.flip()}
              onLongPress={() => card.tip({ direction: 'right' })}
            >
              <View style={styles.whiteBorder} />
              <View
                style={{
                  flex: 1,
                  position: 'relative',
                  marginTop: '40%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderTopRightRadius: 60,
                  borderTopLeftRadius: 60,
                  backgroundColor: '#fff',
                  borderBottomLeftRadius: 40,
                  borderBottomRightRadius: 40,
                }}>
                <View
                  style={{
                    backgroundColor: '#fff',
                    position: 'absolute',
                    alignSelf: 'center',
                    top: -100,
                    height: 140,
                    borderRadius: 80,
                    width: 140,
                    zIndex: 1,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                  }}>
                  <Image
                    style={{
                      flex: 1,
                      width: '100%',
                      borderRadius: 80,
                    }}
                    source={{ uri: `http://needy-api.herokuapp.com/imagens/${user.fotoUsuario}` }} />
                </View>
                <View
                  style={{
                    backgroundColor: 'transparent',
                    width: '90%',
                    height: '100%',
                    paddingTop: 45,
                    marginTop: 35,
                  }}>
                  <View style={{
                    marginBottom: 20,
                  }}>
                    <Text style={{
                      color: '#ca2929',
                      fontSize: 20,
                      fontWeight: 'bold'
                    }}>
                      Nome
                  </Text>
                    <Text style={{
                      marginTop: 10,
                      color: 'rgba(0,0,0,0.6)',
                      fontWeight: "bold",
                    }}>
                      {user.nomeDoador}
                    </Text>
                  </View>


                  <View style={{
                    marginBottom: 20,
                  }}>

                    <View style={{
                      display: 'flex',
                      flexDirection: 'row',
                    }}>
                      <View>
                        <Text style={{
                          color: '#ca2929',
                          fontSize: 20,
                          fontWeight: 'bold'
                        }}>
                          Sexo
                  </Text>
                        <Text style={{
                          marginTop: 10,
                          color: 'rgba(0,0,0,0.6)',
                          fontWeight: "bold",
                        }}>
                          {user.descricaoSexo}
                        </Text>
                      </View>
                      <View style={{
                        position: 'relative',
                        marginLeft: 50,
                      }}>
                        <Text style={{
                          color: '#ca2929',
                          fontSize: 20,
                          fontWeight: 'bold'
                        }}>
                          Data de Nascimento
                  </Text>
                        <Text style={{
                          marginTop: 10,
                          color: 'rgba(0,0,0,0.6)',
                          fontWeight: "bold",
                        }}>
                          {user.dataNascimentoDoador}
                        </Text>
                      </View>
                    </View>


                  </View>

                  <View style={{
                    marginBottom: 20,
                  }}>

                    <View style={{
                      display: 'flex',
                      flexDirection: 'row',
                    }}>
                      <View>
                        <Text style={{
                          color: '#ca2929',
                          fontSize: 20,
                          fontWeight: 'bold'
                        }}>
                          Tipo Sanguíneo
                  </Text>
                        <Text style={{
                          marginTop: 10,
                          color: 'rgba(0,0,0,0.6)',
                          fontWeight: "bold",
                        }}>
                          {user.descricaoTipoSanguineo}
                        </Text>
                      </View>
                      <View style={{
                        position: 'relative',
                        marginLeft: 50,
                      }}>
                        <Text style={{
                          color: '#ca2929',
                          fontSize: 20,
                          fontWeight: 'bold'
                        }}>
                          Fator RH
                  </Text>
                        <Text style={{
                          marginTop: 10,
                          color: 'rgba(0,0,0,0.6)',
                          fontWeight: "bold",
                        }}>
                          {user.idFatorRh == 1 ? '+' : '-'} ({user.descricaoFatorRh})
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View style={{
                    position: 'relative',
                    backgroundColor: '#ca2929',
                    borderRadius: 40,
                    marginTop: 10,
                    width: 150,
                    height: 150,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                  }}>
                    <Text style={{
                      color: '#fff',
                      fontSize: 50,
                      fontWeight: 'bold',
                      textAlign: 'center',

                    }}>{user.descricaoTipoSanguineo}{user.idFatorRh == 1 ? '+' : '-'}</Text>
                  </View>


                </View>


              </View>


            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              onLongPress={() => card.tip()}
              onPress={() => card.flip()}
              style={styles.cardContainer}></TouchableOpacity>
          </CardFlip>


          <Tooltip
            popover={
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Aperte na carteirinha para saber mais!
                </Text>
            }
            containerStyle={{
              backgroundColor: "#ec6262",
            }}
            pointerColor={"#fff"}
            height={80}
            width={200}
          >
            <FontAwesome5 name="info-circle" color={"#ec6262"} size={30} />
          </Tooltip>
        </View>
      </ScrollView>
    </>
  );
};

export default carteirinha;
