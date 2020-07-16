import React, { createContext, useEffect } from "react";
import { logIn, getUser, getResponsavel, updatePassword, getDonations } from "../services/api";
import { AsyncStorage } from "react-native";
const AuthContext = createContext({});
import { ToastAndroid } from 'react-native';
import Loading from '../pages/loading'
import { value } from "popmotion";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [responsavel, setResponsavel] = React.useState(null);
  const [token, setToken] = React.useState("");
  const [error, setError] = React.useState(false);
  const [emailContext, setEmailContext] = React.useState('');
  const [passwordContext, setPasswordContext] = React.useState('');
  const [statusDoador, setStatusDoador] = React.useState();
  const [checked, setChecked] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [lastDonation, setLastDonation] = React.useState(null);
  const [donations, setDonations] = React.useState(null);

  React.useEffect(() => {
    async function loadStoredData() {
      const storedToken = await AsyncStorage.getItem("@needy:token");
      const storedUser = await AsyncStorage.getItem("@needy:doador");
      const storedEmail = await AsyncStorage.getItem('@needy:email');
      const storedSenha = await AsyncStorage.getItem('@needy:senha');
      const storedResponsavel = await AsyncStorage.getItem('@needy:responsavel');
      const storedStatusDoador = await AsyncStorage.getItem('@needy:statusDoador');
      const storedDonations = await AsyncStorage.getItem('@needy:donations');
      const storedLastDonation = await AsyncStorage.getItem('@needy:ultimaDoacao');

      console.log(storedDonations, + '\nULTIMA DOAÇÃO//// ' + storedLastDonation);
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
        setToken(storedToken);
        if (storedUser && (doador != undefined || doador != null)) {
          setUser(JSON.parse(storedUser));
          setResponsavel(JSON.parse(storedResponsavel));
          setStatusDoador(JSON.parse(storedStatusDoador));
          setDonations(JSON.parse(storedDonations));
          setLastDonation(JSON.parse(storedLastDonation));
          setLoading(false);
        } else {
          AsyncStorage.clear().then(() => {
            setUser(null);
            setResponsavel(null);
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
        setToken(response);

        const doador = await getUser(response);

        const donations = await getDonations(token);


        setLastDonation(donations.doacoes[0]);
        setDonations(donations);


        await AsyncStorage.setItem('@needy:donations', JSON.stringify(donations));
        await AsyncStorage.setItem('@needy:ultimaDoacao', JSON.stringify(donations.doacoes[0]));

        if (doador.idResponsavel != undefined && doador.idResponsavel != null && doador.idResponsavel !== '') {
          const resposavel = await getResponsavel(response);
          setResponsavel(resposavel);
          await AsyncStorage.setItem("@needy:responsavel", JSON.stringify(responsavel));

        } else {
          setResponsavel(null);
        }



        console.log("RESPONSÁVEL DOADOR [auth.js]: " + doador.idResponsavel);

        await AsyncStorage.setItem("@needy:doador", JSON.stringify(doador));

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
        setStatusDoador(doador.statusDoador);
        await AsyncStorage.setItem("@needy:statusDoador", JSON.stringify(doador.statusDoador));

      } else {
        console.log("ocorreu um erro" + error);
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 1500);
      }
    } catch (error) {
      console.log('eita deu erro ' + error);
    }
  };

  const setRemember = () => {
    setChecked(!checked);
  }

  const clear = () => {
    AsyncStorage.multiRemove(['@needy:token', '@needy:doador', '@needy:responsavel', '@needy:statusDoador', '@needy:donations', '@needy:ultimaDoacao']).then(() => {
      setUser(null);
      setStatusDoador(0);
    });
  };

  const setUserStatus = async (newPassword) => {
    const doador = await updatePassword(newPassword, token);

    if (doador) {
      setUser(doador);
      await AsyncStorage.setItem("@needy:doador", JSON.stringify(doador));


      setStatusDoador(doador.statusDoador);
      await AsyncStorage.setItem("@needy:statusDoador", JSON.stringify(doador.statusDoador));

    } else {
      console.log('não retornou o doador');
    }
  }

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
        statusDoador,
        setUserStatus,
        lastDonation,
        donations,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
