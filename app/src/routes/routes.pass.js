import newPassword from "../pages/newPassword";
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const NewPasswordRoute = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animationEnabled: false,
            }}
        >
            <Stack.Screen name="Login" component={newPassword} />

        </Stack.Navigator>
    );
}

export default NewPasswordRoute