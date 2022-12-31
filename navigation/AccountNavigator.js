import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../TesterApp/Screens/AccountScreen";
import MessagesScreen from "../TesterApp/Screens/MessagesScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
    }}>
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
