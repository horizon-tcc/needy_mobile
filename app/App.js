import React from "react";
import Routes from "./src/routes/";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/contexts/auth";
console.disableYellowBox = true;

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
