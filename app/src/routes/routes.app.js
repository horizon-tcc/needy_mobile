import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import Maps from "../pages/maps/";
import Home from "../pages/home/";
import Perfil from "../pages/perfil/";
import Config from "../pages/config/";
import MapButton from "../components/MapButton";
import Notifications from "../pages/notifications";
import editProfile from "../pages/editProfile";
import editNotifications from "../pages/editNotifications";
import Achievements from "../pages/achiv";
import Carteirinha from "../pages/carteirinha";
import Ajuda from "../pages/ajuda";
import newPassword from '../pages/newPassword';
import Termo from "../pages/termos/";

const Stack = createStackNavigator();
const NavBar = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <NavBar.Navigator
      tabBarOptions={{
        activeTintColor: "#ca2929",
        showLabel: false,
        inactiveTintColor: "#8c8c8",
      }}
    >
      <NavBar.Screen
        name="Home"
        component={newPassword}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="home"
              color={focused ? "#ca2929" : "#8c8c8c"}
              size={25}
            />
          ),
        }}
      />

      <NavBar.Screen
        name="Maps"
        component={Maps}
        options={{
          tabBarIcon: () => <MapButton />,
        }}
      />

      <NavBar.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="user"
              color={focused ? "#ca2929" : "#8c8c8c"}
              size={24}
            />
          ),
        }}
      />
    </NavBar.Navigator>
  );
};

const InsideRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <Stack.Screen name="Home" component={BottomNav} />

      <Stack.Screen
        name="Config"
        component={Config}
        options={{
          title: "Configurações",
          animationEnabled: true,

          headerShown: true,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#ca2929",
          },
        }}
      />

      <Stack.Screen
        name="Achiv"
        component={Achievements}
        options={{
          title: "Conquistas",
          animationEnabled: true,

          headerShown: true,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#ca2929",
          },
        }}
      />

      <Stack.Screen
        name="editNotifications"
        component={editNotifications}
        options={{
          title: "Editar Notificações",
          animationEnabled: true,

          headerShown: true,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#ca2929",
          },
        }}
      />

      <Stack.Screen
        name="Carteirinha"
        component={Carteirinha}
        options={{
          title: "Carteirinha",
          animationEnabled: true,

          headerShown: true,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#ca2929",
          },
        }}
      />

      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          title: "Notificações",
          animationEnabled: true,

          headerShown: true,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#ca2929",
          },
        }}
      />

      <Stack.Screen
        name="editProfile"
        component={editProfile}
        options={{
          title: "Editar Perfil",
          animationEnabled: true,

          headerShown: true,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#ca2929",
          },
        }}
      />

      <Stack.Screen
        name="Ajuda"
        component={Ajuda}
        options={{
          title: "Ajuda",
          animationEnabled: true,

          headerShown: true,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#ca2929",
          },
        }}
      />

      <Stack.Screen
        name="Termo"
        component={Termo}
        options={{
          title: "Termos de Privacidade de Uso",
          animationEnabled: true,

          headerShown: true,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#ca2929",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default InsideRoutes;
