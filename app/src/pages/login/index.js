// IMPORTS
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import Animated from "react-native-reanimated";
import {
  TapGestureHandler,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import AuthContext from "../../contexts/auth";
import { Checkbox } from 'react-native-paper';
const { width, height } = Dimensions.get("window");

const Login = ({ navigation }) => {
  const [eyeIcon, setEyeIcon] = React.useState("eye-slash");
  const [inputType, setInputType] = React.useState(true);
  const { validar, error, checked, setRemember, emailContext, passwordContext, setPasswordContext, setEmailContext } = React.useContext(AuthContext);
  const [email, setEmail] = React.useState(emailContext);
  const [senha, setSenha] = React.useState(passwordContext);

  const handleLogIn = () => {
    validar(email, senha);
  };


  const toggleEye = () => {
    if (inputType == false) {
      setEyeIcon("eye-slash");
      setInputType(!inputType);
    } else {
      setEyeIcon("eye");
      setInputType(!inputType);
    }
  };

  React.useEffect(() => {
    setEmail(emailContext);
    setSenha(passwordContext);
  });

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <ImageBackground
        style={styles.container}
        source={require("../../assets/images/telas/telaLogin/bgLogin.png")}
      >
        <View>
          <View
            style={{
              top: 80,
              justifyContent: "center",
              backgroundColor: "transparent",
            }}
          >
            <View style={styles.containerTitle}>
              <Text style={styles.titulo}>Bem-vindo!</Text>
            </View>

            <Icon
              name="user-o"
              color="red"
              size={28}
              style={styles.inputIcon}
            />
            <TextInput
              placeholder="E-mail"
              style={error ? styles.textInputError : styles.textInput}
              placeholderTextColor={error ? 'red' : "rgba(0,0,0,0.4)"}
              textContentType="emailAddress"
              onChangeText={(text) => {
                setEmailContext(text);
              }}
              value={emailContext}
            ></TextInput>

            <Icon name="lock" color="red" size={32} style={styles.inputIcon} />
            <TextInput
              password={true}
              secureTextEntry={inputType}
              placeholder="Senha"
              style={error ? styles.textInputError : styles.textInput}
              placeholderTextColor={error ? 'red' : "rgba(0,0,0,0.4)"}
              textContentType="password"
              onChangeText={(text) => {
                setPasswordContext(text);
              }}
              value={passwordContext}
            ></TextInput>

            <TouchableWithoutFeedback onPress={toggleEye}>
              <Animated.View style={styles.btnEye}>
                <Icon name={eyeIcon} color="rgba(0,0,0,0.6)" size={26} />
              </Animated.View>
            </TouchableWithoutFeedback>
            <View style={{ display: 'flex', flexDirection: 'row', marginLeft: width - (width - 40) }}>

              <Checkbox
                color={'#ca2929'}
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setRemember()
                }}
              />
              <Text style={{
                marginTop: 8,
                color: 'rgba(0,0,0,0.7)',
                fontWeight: 'bold'
              }}>Lembre-se de mim</Text>

            </View>
            {error ? (<>
              <Text style={{
                color: 'red',
                textAlign: 'center',
              }}>Usuário ou senha incorretos, digite novamente.</Text>
            </>) : (<>

              <Text></Text>
            </>)}

            <TouchableOpacity
              style={styles.buttonEntrar}
              activeOpacity={0.6}
              onPress={handleLogIn}
            >
              <View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  ENTRAR
                </Text>
              </View>
            </TouchableOpacity>

            <TapGestureHandler
              onHandlerStateChange={() => {
                navigation.navigate("Intro");
              }}
            >
              <Animated.View style={styles.closeButton}>
                <Text
                  style={{
                    fontSize: 18,
                    color: "rgba(0,0,0,0.3)",
                    fontWeight: "bold",
                  }}
                >
                  TORNE-SE UM DOADOR
                </Text>
              </Animated.View>
            </TapGestureHandler>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
  },

  titulo: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },

  button: {
    backgroundColor: "white",
    height: 70,
    marginBottom: 10,
    marginHorizontal: 20,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  containerTitle: {
    flex: 1,
    height: 100,
    bottom: 200,
  },

  buttonEntrar: {
    backgroundColor: "#ca2929",
    height: 60,
    width: width - 85,
    marginTop: 30,
    marginBottom: 10,
    marginHorizontal: 20,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  textInput: {
    height: 60,
    width: width - 55,
    alignSelf: "center",
    color: "black",
    borderRadius: 25,
    borderWidth: 0.5,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginHorizontal: 0,
    paddingLeft: 53,
    paddingRight: 53,
    paddingTop: 15,
    marginVertical: 0,
    borderColor: "rgba(0,0,0,0.4)",
  },


  textInputError: {
    height: 60,
    width: width - 55,
    alignSelf: "center",
    color: "red",
    borderRadius: 25,
    borderWidth: 1.5,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginHorizontal: 0,
    paddingLeft: 53,
    paddingRight: 53,
    paddingTop: 15,
    marginVertical: 0,
    borderColor: "red",
  },

  closeButton: {
    height: 60,
    width: width - 85,
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
  },

  inputIcon: {
    position: "relative",
    top: 55,
    left: 50,
  },

  btnEye: {
    position: "relative",
    bottom: 30,
    left: width - 80,
  },
});

export default Login;
