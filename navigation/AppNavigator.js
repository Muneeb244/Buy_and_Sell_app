import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { notification } from "expo";

import FeedNavigator from "./FeedNavigator.js";
import AccountNavigator from "./AccountNavigator.js";

import ListingScreen from "../TesterApp/Screens/ListingScreen.js";
import ListingEditScreen from "../TesterApp/Screens/ListingEditScreen.js";
import AccountScreen from "../TesterApp/Screens/AccountScreen.js";
import NewListingButton from "./NewListingButton.js";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ListingEdit"
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => <NewListingButton onPress={() => navigation.navigate("ListingEdit")}/>,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
            name="plus-circle"
            size={size}
            color={color}
            />
            ),
          })
        }
      />
      <Tab.Screen
        name="Accounts"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
