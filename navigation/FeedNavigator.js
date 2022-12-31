import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import ListingScreen from "../TesterApp/Screens/ListingScreen.js";
import ListDetailScreen from "../TesterApp/Screens/ListDetailScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
    }}>
      <Stack.Screen name="Listings" component={ListingScreen} />
      <Stack.Screen name="ListingDetail" component={ListDetailScreen} />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
