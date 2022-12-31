import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
  ImageBackground,
  ScrollView,
  TextInput,
  Switch,
} from "react-native";

// AppRegistry.registerComponent(appName, () => App);

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import { useState, useEffect } from "react";

import { Formik } from "formik";

import * as ImagePicker from "expo-image-picker";
import * as Permission from "expo-permissions";
import { Camera, CameraType } from "expo-camera";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// import WelcomeScreen from "./TesterApp/Screens/WelcomeScreen.js";
// import ViewImageScreen from "./TesterApp/Screens/ViewImageScreen";
// import CardsScreen from "./TesterApp/Screens/CardsScreen.js";
import ListItem from "./components/ListItem.js";
// import ListDetailScreen from "./TesterApp/Screens/ListDetailScreen.js";
import MessagesScreen from "./TesterApp/Screens/MessagesScreen.js";
import ListingEditScreen from "./TesterApp/Screens/ListingEditScreen.js";
import ImageInput from "./components/ImageInput.js";
import ImageInputList from "./components/ImageInputList.js";
import OfflineNotice from "./components/OfflineNotice.js";
// import Icon from "./components/Icon.js";
// import AccountScreen from "./TesterApp/Screens/AccountScreen.js";
// import ListingScreen from "./TesterApp/Screens/ListingScreen.js";
// import Card from "./components/Card.js";
// import Card2 from "./components/Card2.js";
// import AppTextInput from "./components/AppTextInput.js";
// import ChoicePicker from "./components/ChoicePicker.js";
// import PickerItem from "./components/PickerItem.js";
// import LoginScreen from "./TesterApp/Screens/LoginScreen.js";
// import ListingEditScreen from "./TesterApp/Screens/ListingEditScreen.js";
// import Heading from "./components/Heading";
// import {MaterialCommunityIcons} from '@expo/vector-icons';
// import ChoicePicker from "./components/ChoicePicker.js";
import AuthNavigator from "./navigation/AuthNavigator.js";
import NavigationTheme from "./navigation/NavigationTheme";
import AppNavigator from "./navigation/AppNavigator";
import AccountNavigator from "./navigation/AccountNavigator";
import Authcontext from "./auth/context.js";
import AuthStorage from "./auth/storage.js";

export default function App() {
  // let { landscape } = useDeviceOrientation();
  // console.log(landscape);

  // const [isNew, setIsNew] = useState(false);
  const [imgUris, setImgUris] = useState([]);
  // const [imgUri, setImgUri] = useState();

  const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Cameras", value: 3 },
  ];


  const [category, setCategory] = useState();
  const [user, setUser] = useState();

  const getLogin = async () => {
    const currUser = await AuthStorage.getLogin();
    if(!currUser) return;
    setUser(currUser);
  }

  useEffect(() => {
    getLogin();
  }, [])

  return (
    // <View style={styles.container}>
    //   <Text>Here</Text>
    // </View>
    <Authcontext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={NavigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </Authcontext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "dodgerblue",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight + 20 : 0,
    justifyContent: "space-between",
  },
  temp: {
    padding: 20,
  },
});
