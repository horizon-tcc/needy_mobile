import React, { createContext, useEffect } from "react";
import { logIn, getUser } from "../services/api";
import { AsyncStorage } from "react-native";
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState("");

  React.useEffect(() => {
    async function loadStoredData() {
      const storedToken = await AsyncStorage.getItem("@needy:token");
      const storedUser = await AsyncStorage.getItem("@needy:doador");

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
    const response = await logIn(email, senha);

    if (response != null) {
      await AsyncStorage.setItem("@needy:token", response);
      const doador = await getUser(response);

      await AsyncStorage.setItem("@needy:doador", JSON.stringify(doador));
      setUser(doador);
    } else {
      console.log("ocorreu um erro");
    }
  };

  const clear = () => {
    AsyncStorage.clear().then(() => {
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
