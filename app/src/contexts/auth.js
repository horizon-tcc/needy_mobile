import React, { createContext, useEffect } from "react";
import { logIn, getUser } from "../services/api";
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState("");

  const validar = async (email, senha) => {
    const response = await logIn(email, senha);

    if (response != null) {
      const doador = await getUser(response);

      setUser(doador);
    } else {
      console.log("ocorreu um erro");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signed: user != null ? true : false,
        user,
        token,
        validar,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
