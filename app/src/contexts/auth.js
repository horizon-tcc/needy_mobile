import React, { createContext, useEffect } from "react";
import { logIn, getUser, getResponsavel } from "../services/api";
import { AsyncStorage } from "react-native";
const AuthContext = createContext({});
import { ToastAndroid } from 'react-native';
import { value } from "popmotion";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [responsavel, setResponsavel] = React.useState(null);
  const [token, setToken] = React.useState("");
  const [error, setError] = React.useState(false);
  const [emailContext, setEmailContext] = React.useState('');
  const [passwordContext, setPasswordContext] = React.useState('');
  const [checked, setChecked] = React.useState(false);


  React.useEffect(() => {
    async function loadStoredData() {
      const storedToken = await AsyncStorage.getItem("@needy:token");
      const storedUser = await AsyncStorage.getItem("@needy:doador");
      const storedEmail = await AsyncStorage.getItem('@needy:email');
      const storedSenha = await AsyncStorage.getItem('@needy:senha');
      await AsyncStorage.getItem('@needy:remember').then((value) => {

        if (value != null || value != undefined) {
          setChecked(JSON.parse(value));

        }

      });

      if (storedEmail && storedSenha) {
        setEmailContext(storedEmail);
        setPasswordContext(storedSenha);
      }


      if (storedToken) {
        const doador = await getUser(storedToken);

        if (storedUser && (doador != undefined || doador != null)) {
          setUser(JSON.parse(storedUser));
        } else {
          AsyncStorage.clear().then(() => {
            setUser(null);
          });
        }
      }


    }

    loadStoredData();
  }, []);

  const validar = async (email, senha) => {
    try {

      const response = await logIn(email, senha);

      if (response != null) {

        await AsyncStorage.setItem("@needy:token", response);

        const doador = await getUser(response);
        const resposavel = await getResponsavel(response);

        console.log("DOADOR [auth.js]\n" + doador);
        console.log("RESPONSAVEL [auth.js]\n" + resposavel);

        await AsyncStorage.setItem("@needy:doador", JSON.stringify(doador));
        await AsyncStorage.setItem("@needy:responsavel", JSON.stringify(responsavel));

        if (checked) {

          setEmailContext(email);
          setPasswordContext(senha);

          await AsyncStorage.setItem('@needy:email', email);
          await AsyncStorage.setItem('@needy:senha', senha);

        } else {

          setEmailContext('');
          setPasswordContext('');

          await AsyncStorage.removeItem('@needy:email');
          await AsyncStorage.removeItem('@needy:senha');

        }

        await AsyncStorage.setItem('@needy:remember', JSON.stringify(checked))

        setUser(doador);
        setResponsavel(resposavel);

      } else {
        console.log("ocorreu um erro");
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 1500);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setRemember = () => {
    setChecked(!checked);
  }

  const clear = () => {
    AsyncStorage.multiRemove(['@needy:token', '@needy:doador']).then(() => {
      setUser(null);
    });
  };

  return (
    <AuthContext.Provider
      value={{
        signed: user != null ? true : false,
        user,
        token,
        validar,
        clear,
        error,
        setRemember,
        checked,
        emailContext,
        setEmailContext,
        passwordContext,
        setPasswordContext,
        setEmailContext,
        responsavel,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
