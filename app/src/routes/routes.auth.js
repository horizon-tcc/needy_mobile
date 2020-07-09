import React from "react";
import Login from "../pages/login/";
import Intro from "../pages/intro/";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AuthRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Intro" component={Intro} />
    </Stack.Navigator>
  );
};

export default AuthRoute;
